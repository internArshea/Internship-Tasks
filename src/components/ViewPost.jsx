import {useState, useEffect, useMemo} from 'react'
const data = import.meta.env.VITE_POSTAPI
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/viewPost.css'

const LIMIT = 10;

const ViewPost = () => {
    const [feed, setFeed] = useState([])
   
    const [pageNumber, setPageNumber] = useState(0);

    const fetchData = async () => {
        try{
        
            const response =  await fetch(data)
            const json = await response.json()
            setFeed(json);
        }
        catch(err){
            console.log("Data not fetched: ", err)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    function gotoComments(id){
        window.location.href = `/${id}/comments`
    }

    function loadmorePosts(){
        if (pageNumber * LIMIT < feed.length) {
            setPageNumber(pageNumber + 1)
        }
        
    }

    function gototPrevious(){
        if(pageNumber > 0) {
            setPageNumber(pageNumber - 1)

        }
    }

    const paginatedFeed = useMemo(
      () => feed.slice(pageNumber * LIMIT, pageNumber * LIMIT + LIMIT),
      [pageNumber, feed]
    );

    return (
        <div className="displayPosts">
            <ul>
                {paginatedFeed.map((list, index)=>( 
                        (<li key={index} className='listItem'><div>{list.id}</div>
                            <div className='title'>{list.title}</div> 
                            <div>{list.body}</div>
                            <div className='comments' onClick={()=>gotoComments(list.id)}>Comments</div>
                        </li>)
                ))}
                <button className='loadMorePosts' onClick={()=> gototPrevious()}>Back</button>
                <button className='loadMorePosts' onClick={()=>loadmorePosts()}>Next</button>
            </ul>
        </div>
    )
}

export default ViewPost