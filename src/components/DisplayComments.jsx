import { useState, useEffect } from 'react'
import AddComment from './AddComment'
import CurrentUser from './CurrentUser'
import ManageComment from './ManageComment'
import EditComment from './EditComment'
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/comments.css'

const DisplayComments = ({postId}) =>{

    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    const [comments, setComments] = useState([])
    const [updateComments, setUpdateComments] = useState(-1)

    const fetchComments = async (comments) =>{
        try{
            const response = await fetch(comments)
            const json = await response.json()
            let postComments = json.filter((cmt, index) => index<10)
            postComments.length === 0 ? setComments(["No Comments"]) : setComments(postComments)
        }
        catch(err){
            console.log("Comments were not fetched.")
        }
    }

    useEffect(()=>{
        fetchComments(url)
    }, [])

    const addComment = (cmt) =>{
        setComments([...comments, {postId: postId, id: comments.length+1, name: CurrentUser[0].username, email: CurrentUser[0].email, body: cmt}])
    }

    const deleteComment = (id) =>{
        setComments(comments.filter(cmt => cmt.id !== id))
    }

    function editComment(id){
        setUpdateComments(id);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        setUpdateComments(-1);

    }

    return(
        <div className='displayComments'>
            <AddComment addComment={addComment} list={comments} setComment={setComments}/>
            
            <ul className='commentList'>
                {comments.map((cmt, index) => (
                    updateComments === cmt.id ? <form key={index} onSubmit={handleSubmit}>
                        <EditComment key={index} comment={cmt} list={comments} setlist={setComments}/></form> :
                        typeof cmt === 'string' ? ({cmt}) :
                            (<li key={index}>
                            <h3>{cmt.name}</h3>
                            <p>{cmt.body}</p>
                            {cmt.name === CurrentUser[0].username ? (
                                <ManageComment key={index} comment={cmt} deleteComment={deleteComment} editComment={editComment}/>):
                                <p></p>}
                    </li>)
                ))}
            </ul>  
        </div>
    )
}

export default DisplayComments

