import { useState } from "react"

const AddComment = ({addComment}) =>{
    const [inputComment, setInputComment] = useState('')

    const handleChange = (e)=>{ 
        setInputComment(e.target.value);
        
    }

    function handleSubmit(e){
        e.preventDefault();
        addComment(inputComment);
        setInputComment('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name='comment' onChange={handleChange} value={inputComment} placeholder="Add a Comment"/>
            <button style={{borderRadius: '8px', backgroundColor: 'rgb(127, 114, 213)', color: 'white'}} type='submit'>Comment</button>
        </form>
    )
}

export default AddComment