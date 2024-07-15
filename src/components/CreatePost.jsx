import { useState } from 'react'
import CurrentUser from './CurrentUser'
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/createPost.css'


function CreatePost({addPost}){

    const [inputValue, setInput] = useState({
        title:'',
        body:''
    })

    const handleChange = (e) =>{
        setInput({...inputValue, [e.target.name] : e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addPost(inputValue);

        setInput({ title:'',
        body:''})
    }

    
    return (
        <div className="create-post">
            <form onSubmit={handleSubmit}>
            <img src={CurrentUser.map(user=>(user.profileImage))} alt='dp'/>
            <textarea onChange={handleChange} name='title' value={inputValue.title} className="post-title" placeholder="Title"/>
            <div className="post-content">
                <textarea onChange={handleChange} name='body' value={inputValue.body} placeholder="Create a Post"/>
            </div>
            <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default CreatePost