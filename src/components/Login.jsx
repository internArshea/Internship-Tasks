import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/login.css'
import CurrentUser from './CurrentUser'

function Login(){
    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    });
    
    const [formErrors, setFormErrors] = useState([])
    const keeplogin = document.getElementsByTagName('input')
    const key_username=CurrentUser[0].username;
    const key_userpass=CurrentUser[0].password;

    useEffect(()=>{
        window.sessionStorage.setItem('KEEP_LOGGEDIN', JSON.stringify(inputValues.username, inputValues.password))
        if(sessionStorage.getItem("KEEP_LOGGEDIN")){
            keeplogin.value = sessionStorage.getItem('KEEP_LOGGEDIN')
        }
    }, [setInputValues])

    const handleChange = (e) =>{
        setInputValues({...inputValues,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(inputValues))
        if(Object.keys(formErrors).length === 0){
            {window.location.href = '/homepage/:id'}
        }
    }  
    
    const validate = (v) => {
        const errors = {}
        if(!v.username){
            errors.username = "Username is Required"
        }
        else if(v.username !== key_username){
            errors.username = "Incorrect Username";
        }
        if(!v.password){
            errors.password = "Password is Required"
        }
        else if(v.password !== key_userpass){
            errors.password = "Incorrect Pasword"
        }
        return errors;
    }
    
    return (
        <div className='card'>
            <h1>Login Form</h1>
            <form className='loginForm' onSubmit={handleSubmit}>
                <label>Userame<p className='required'>*</p>
                <input type='text' name='username' value={inputValues.username} onChange={handleChange} placeholder="Username"/></label>
                <p className='errors'>{ formErrors.username }</p>
                <label>Password<p className='required'>*</p>
                <input type='password' name='password' value={inputValues.password} onChange={handleChange} placeholder="Password"/></label>
                <p className='errors'>{ formErrors.password }</p>
                <button type='submit'>Login</button>
            </form>
            <div className="bottom">
                <p><i>Don't Have an Account?</i></p>
                <Link to='/'>
                    <button>Register</button>
                </Link>
            </div>
        </div>
    ) 
}

export default Login