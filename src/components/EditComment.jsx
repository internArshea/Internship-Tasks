
const EditComment = ({comment, list, setlist}) =>{

    function handleChange(e){
        const newComment = list.map((li)=>(
            li.id === comment.id ? {...li, 
            [e.target.name] : e.target.value
        } : li))
        setlist(newComment)
    }

    return(
        <li>
            <h3>{comment.name}</h3>
            <textarea name='body' onChange={handleChange} value={comment.body}></textarea>
            <button type='submit'>Edit</button>
        </li>
    )
}

export default EditComment