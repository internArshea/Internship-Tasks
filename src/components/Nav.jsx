import { Link } from 'react-router-dom'
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/nav.css'
//import DP from 'D:/React/socialmedia-app/Internship-Tasks/src/assets/friend11.svg.jpg'
import CurrentUser from './CurrentUser.js'

const Nav = () => {
    
    return (
        <div className="navbar">
            <Link to='/homepage'>
                <img src={CurrentUser[0].profileImage} alt='Profile Picture'/>
            </Link>
            <p>{CurrentUser[0].name}</p>
        </div>
    )
}

export default Nav