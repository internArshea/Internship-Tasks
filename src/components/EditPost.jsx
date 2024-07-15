import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/editPost.css'
const EditPost = ({post, list, setlist, handleSubmit}) =>{

    function handleChange(e){
        const newList = list.map((li)=>(
            li.id === post.id ? {...li, 
            [e.target.name] : e.target.value
        } : li))
        setlist(newList)
    }
    
    return (
        <form onSubmit={handleSubmit}>
        <li>
            <input name='title' onChange={handleChange} value={post.title}></input>
            <textarea name='body' onChange={handleChange} value={post.body}></textarea>
            <button type='submit'>Edit</button>
        </li>
        </form>
    )
}

export default EditPost
