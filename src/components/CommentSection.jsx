import { useParams } from 'react-router-dom'
import DisplayComments from './DisplayComments'

const CommentSection = () =>{

    let { id } = useParams()
    
    return(
        <DisplayComments postId={id}/>
    )
}

export default CommentSection