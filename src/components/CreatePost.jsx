import { useState } from 'react'
import CurrentUser from './CurrentUser'
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/createPost.css'


function CreatePost({addPost}){

    const [inputTitle, setTitle] = useState('')
    const [inputContent, setContent] = useState('')

    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }
    const handleContentChange = (e) =>{
        setContent(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addPost(inputTitle, inputContent);

        setTitle('');
        setContent('');
    }

    
    return (
        <div className="create-post">
            <form onSubmit={handleSubmit}>
            <img src={CurrentUser.map(user=>(user.profileImage))} alt='dp'/>
            <textarea onChange={handleTitleChange} value={inputTitle} className="post-title" placeholder="Title"/>
            <div className="post-content">
                <textarea onChange={handleContentChange} value={inputContent} placeholder="Create a Post"/>
            </div>
            <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default CreatePost