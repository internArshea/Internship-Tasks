import 'D:/React/social-media-app/Internship-Tasks/src/styles/userPost.css'
const UserPosts = ({post, deletePost, editPost})=>{

    return(
        <li className='listItem'>
        {post.id}
        <button onClick={() => editPost(post.id)}>Edit</button>
        <button onClick={()=>deletePost(post.id)}>Delete</button>
        <p>{post.title}</p>
        <p>{post.body}</p>
        </li>
    )

}

export default UserPosts