import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const data = import.meta.env.VITE_POSTAPI
import Comments from './CommentSection'
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/viewPost.css'


const ViewPost = ({post}) => {
    const [feed, setFeed] = useState([])
    //let currentPage = 1;
    const [startPost, setStartPost] = useState(0);
    const [endPost, setEndPost] = useState(10);

    const fetchData = async(s, e)=>{
        try{
            const response =  await fetch(data)
            const json = await response.json()
            let feedData = json.filter((item, index) => index>=s && index<e)
            feedData.length === 0 ? setFeed(["Oops! You've viewed all the Posts for today"]) : setFeed(feedData)
        }
        catch(err){
            console.log("Data not fetched")
        }
    }  

    useEffect(() => {
        fetchData(startPost, endPost)
    }, [startPost])

    function loadmorePosts(){
        //currentPage++;
        setStartPost(startPost+10);
        setEndPost(endPost+10);   
    }

    function gotoComments(id){
        console.log(id);
        return(
            window.location.href = `/${id}/comments`
        )
            
    }

    return (
        <div className="displayPosts">
            <ul>
                {feed.map((list, index)=>( 
                    typeof list === 'string' ? 
                        (<div key={index}>{list}</div>) :
                        (<li key={index} className='listItem'><div>{list.id}</div>
                            <div className='title'>{list.title}</div> 
                            <div>{list.body}</div>
                            <div className='comments'>
                                <button onClick={()=>gotoComments(list.id)}>Comments</button>
                            </div>
                        </li>)
                ))}
                <button className='loadMorePosts' onClick={()=>loadmorePosts()}>Next</button>
            </ul>
        </div>
    )
}

export default ViewPost