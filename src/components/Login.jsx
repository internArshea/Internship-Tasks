import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/login.css'

function Login(){
    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    });
    
    const [formErrors, setFormErrors] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)


    const handleChange = (e) =>{
        setInputValues({...inputValues,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(inputValues)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(inputValues))
        setIsSubmit(true)
    }  
    
    const validate = (v) => {
        const errors = {}
        if(!v.username){
            errors.username = "Username is Required"
        }
        if(!v.password){
            errors.password = "Password is Required"
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