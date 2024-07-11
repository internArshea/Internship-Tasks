import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
const data = import.meta.env.VITE_POSTAPI
import Comments from './Comments'
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
            
            console.log(feedData)
        }
        catch(err){
            console.log("Data not fetched")
        }
    }

    useEffect(() => {
        fetchData(startPost, endPost)
    }, [endPost, startPost])

    function loadmorePosts(){
        //currentPage++;
        setStartPost(startPost+10);
        setEndPost(endPost+10);
        
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
                            <Link to='/homepage/:id/view-post/:id/comments'>
                            <div className='comments'>
                                Comments
                            </div>
                            </Link>
                        </li>)
                ))}
                <button className='loadMorePosts' onClick={()=>loadmorePosts()}>Next</button>
            </ul>
        </div>
    )
}

export default ViewPost