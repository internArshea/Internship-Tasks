import { useState } from 'react'
const EditPost = ({post, list, setlist}) =>{

    /*const [updatePost, setUpdatePost] = useState({
        title: post.title,
        body: post.body
    })
*/
    function handleChange(e){
        const newList = list.map((li)=>(
            li.id === post.id ? {...li, 
            [e.target.name] : e.target.value
        } : li))
        setlist(newList)
    }
    

    return (
        <li>
            <input name='title' onChange={handleChange} value={post.title}></input>
            <textarea name='body' onChange={handleChange} value={post.body}></textarea>
            <button type='submit'>Edit</button>
        </li>
    )
}

export default EditPost