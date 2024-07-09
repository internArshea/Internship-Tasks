import { useState } from 'react'
import 'D:/React/socialmedia-app/src/styles/login.css'

function Login(){
    const [inputValues, setInputValues] = useState({
        username: '',
        password: ''
    });
    
    const [formErrors, setFormErrors] = useState({})


    const handleChange = (e) =>{
        setInputValues({...inputValues,
            [e.target.name]: e.target.value
        });
        console.log(inputValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(inputValues))
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
            <h2>Login Form</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' value={inputValues.username} onChange={handleChange} placeholder="Username"/>
                <input type='password' name='password' value={inputValues.password} onChange={handleChange} placeholder="Password"/>
                <button type='submit'>Login</button>
            </form>
            <div className="bottom">
                <p><i>Don't Have an Account?</i></p>
                <button>Register</button>

            </div>
        </div>
    ) 
}

export default Login