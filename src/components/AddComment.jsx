import { useState } from "react"
import CurrentUser from "./CurrentUser"

const AddComment = ({addComment}) =>{
    const [inputComment, setInputComment] = useState('')

    const handleChange = (e)=>{ 
        setInputComment(e.target.value);
        
    }

    function handleSubmit(e){
        e.preventDefault();
        addComment(inputComment);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='comment' onChange={handleChange} value={inputComment} placeholder="Add a Comment"/>
            <button type='submit'>Comment</button>
        </form>
    )
}

export default AddComment