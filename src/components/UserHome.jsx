import { useState, useEffect } from 'react'
import Nav from './Nav.jsx'
import CreatePost from './CreatePost.jsx'
import ViewPost from './ViewPost.jsx'
import CurrentUser from './CurrentUser.js'
import UserPosts from './UserPosts.jsx'
import EditPost from './EditPost.jsx'
import 'D:/React/social-media-app/Internship-Tasks/src/styles/userHome.css'


const UserHome = () =>{
    const [posts, setPost] = useState([])
    const [updatePost, setUpdatePost] = useState(-1)


    const addPost = (input) =>{
        setPost([...posts, {id: posts.length + 1, userId: CurrentUser[0].id, title: input.title, body: input.body}])
        window.localStorage.setItem('MY_POSTS', JSON.stringify(posts))     
    }

    useEffect(()=>{
        let savedPost = JSON.parse(localStorage.getItem('MY_POSTS'))
        if(savedPost){
            setPost(savedPost)
        }
    }, [])

    const deletePost = (id) => {
        setPost(posts.filter(post => post.id !== id))
    }

    const editPost = (id) => {
        setUpdatePost(id)
    }

    function handleSubmit(e){
        e.preventDefault();
        setUpdatePost(-1);
    }

    return (
        <div className='container'>
            <Nav />
            <CreatePost addPost={ addPost }/>
            <ul className='userPosts'>
                {posts.map((post, index)=>(
                    updatePost === post.id ? <EditPost key={index} post={post} list={posts} setlist={setPost} handleSubmit={handleSubmit}/> :
                    <UserPosts key={index} post={post} deletePost={deletePost} editPost={editPost}/>
                ))}
            </ul>
            <ViewPost />
           
        </div>
    )
}

export default UserHome