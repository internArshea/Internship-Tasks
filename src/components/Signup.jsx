import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import 'D:/React/socialmedia-app/Internship-Tasks/src/styles/signup.css'

function Signup(){
    const [inputValues, setInputValues] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState([])

    const handleChange = (e) =>{
        setInputValues({...inputValues, 
            [e.target.name]: e.target.value
        });
    }

    const validate = (v) => {
        const errors = {}
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(!v.fullName){
            errors.fullName = "Name is Required"
        }
        if(!v.email){
            errors.email = "Email is Required"
        }
        else if(!regex.test(v.email)){
            errors.email = "Enter a Valid Email"
        }
        if(!v.username){
            errors.username = "Username is Required"
        }
        if(!v.password){
            errors.password = "Password is Required"
        }
        else if(v.password.length < 8 || v.password.length > 16){
            errors.password = "Password length should be between 8-16 characters"
        }
        else if(!v.confirmPassword){
            errors.confirmPassword = "Confirm Password"
        }
        else if(v.password !== v.confirmPassword){
            errors.confirmPassword = "Passwords Do Not Match"
        }
        return errors;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const errors = validate(inputValues)
        setFormErrors(errors);
        if(Object.keys(formErrors).length === 0){
            {window.location.href = '/login'}
        }
    }
    return (
        <div className='card'>
            <h2>SignUp Form</h2>
            <form className='signupForm' onSubmit={handleSubmit}>
                <label>Fullname<p className='required'> *</p>
                <input type='text' name='fullName' value={inputValues.fullName} onChange={handleChange} placeholder="Full Name"/></label>
                <p className='errors'>{formErrors.fullName}</p>
                <label>Email<p className='required'> *</p>
                <input type='email' name='email' value={inputValues.email} onChange={handleChange} placeholder="Email"/></label>
                <p className='errors'>{formErrors.email}</p>
                <label>Username<p className='required'> *</p>
                <input type='text' name='username' value={inputValues.username} onChange={handleChange} placeholder="Username"/></label>
                <p className='errors'>{formErrors.username}</p>
                <label>Password<p className='required'> *</p>
                <input type='password' name='password' value={inputValues.password}  onChange={handleChange} placeholder="Password"/></label>
                <p className='errors'>{formErrors.password}</p>
                <label>Confirm Password<p className='required'> *</p>
                <input type='password' name='confirmPassword' value={inputValues.confirmPassword} onChange={handleChange} placeholder="Confirm Password"/></label>
                <p className='errors'>{formErrors.confirmPassword}</p>
                <button type='submit'>SignUp</button>
            </form>
            <div className="bottom">
                <p><i>Already Have an Account?</i></p>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
            </div>
        </div>
    ) 
}

export default Signup