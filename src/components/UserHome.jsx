import { useState, useEffect } from 'react'
import Nav from './Nav.jsx'
import CreatePost from './CreatePost.jsx'
import ViewPost from './ViewPost.jsx'
import CurrentUser from './CurrentUser.js'
import UserPosts from './UserPosts.jsx'


const UserHome = () =>{
    const [posts, setPost] = useState([])


    const addPost = (title, content) =>{
        setPost([...posts, {id: posts.length + 1, userId: CurrentUser[0].id, title: title, body: content}])
        console.log(posts)
    }

    const deletePost = (id) => {
        setPost(posts.filter(post => post.id !== id))
    }

    const editPost = (id) => {
        let newPost = posts.find((post) => {
            return (post.id === id ? post.body : "Error")
        })
        console.log(newPost)

    }

    return (
        <div className='container'>
            <Nav />
            <CreatePost addPost={ addPost }/>
            <ul className='userPosts'>
                {posts.map((post, index)=>(
                    <UserPosts key={index} post={post} deletePost={deletePost} editPost={editPost}/>
                ))}
            </ul>
            <ViewPost post={posts}/>
           
        </div>
    )
}

export default UserHome