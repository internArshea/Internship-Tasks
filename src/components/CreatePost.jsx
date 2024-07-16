import { useState } from 'react'
import CurrentUser from './CurrentUser'
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/createPost.css'

function CreatePost({addPost}){

    const [inputValue, setInputValue] = useState({
        title: '',
        body: ''
    })

    const handleChange = (e) =>{
        setInputValue({...inputValue, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        addPost(inputValue);
        setInputValue({title: '', body:''})
    }

    
    return (
        <div className="create-post">
            <form onSubmit={handleSubmit}>
            <img src={CurrentUser.map(user=>(user.profileImage))} alt='dp'/>
            <textarea name='title' onChange={handleChange} value={inputValue.title} className="post-title" placeholder="Title"/>
            <div className="post-content">
                <textarea name='body' onChange={handleChange} value={inputValue.body} placeholder="Create a Post"/>
            </div>
            <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default CreatePost