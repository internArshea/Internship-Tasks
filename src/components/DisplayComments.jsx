import { useState, useEffect } from 'react'
import AddComment from './AddComment'
import CurrentUser from './CurrentUser'

const DisplayComments = ({postId}) =>{

    const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    const [comments, setComments] = useState([])

    const fetchComments = async (comments) =>{
        try{
            const response = await fetch(comments)
            const json = await response.json()
            let postComments = json.filter((comm, index) => index<10)
            postComments.length === 0 ? setComments(["No Comments"]) : setComments(postComments)
            console.log(postComments)
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

    return(
        <div className='displayComments'>
            <AddComment addComment={addComment} list={comments} setComment={setComments}/>
            <ul>
                {comments.map((cmt, index) => (
                    typeof cmt === 'string' ? ({cmt}) :
                    (<li key={index}>
                        <h3>{cmt.name}</h3>
                        <p>{cmt.body}</p>
                        {cmt.name} === {CurrentUser[0].name} ? (<ManageComment cmntId={cmt.id}/>)</li>)
                ))}
            </ul>
        </div>
    )
}

export default DisplayComments