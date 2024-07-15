
const ManageComment = ({comment, deleteComment, editComment}) =>{
    return (
        <div style={{float: 'top-right'}}>
            <button style={{borderRadius: '8px', backgroundColor: 'rgb(127, 114, 213)', color: 'white'}} onClick={() => deleteComment(comment.id)}>Del</button>
            <button style={{borderRadius: '8px', backgroundColor: 'rgb(127, 114, 213)', color: 'white'}} onClick={() => editComment(comment.id)}>Edit</button>
        </div>
    )
}

export default ManageComment