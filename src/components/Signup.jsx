import { useState, useEffect } from 'react'
import 'D:/React/socialmedia-app/src/styles/signup.css'

function Signup(){
    const [inputValues, setInputValues] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
    });

    const [formErrors, setFormErrors] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)

    const handleChange = (e) =>{
        setInputValues({...inputValues, 
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(inputValues)
        }
    },[formErrors])

    const validate = (v) => {
        const errors = {}
        if(!v.fullName){
            errors.fullName = "Name is Required"
        }
        if(!v.email){
            errors.email = "Email is Required"
        }
        if(!v.userName){
            errors.username = "Username is Required"
        }
        if(!v.password){
            errors.password = "Password is Required"
        }
        if(!v.confirmPassword){
            errors.confirmPassword = "Confirm Password"
        }
        if(v.password !== v.confirmPassword){
            errors.confirmPassword = "Passwords Do Not Match"
        }
        return errors;
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(inputValues));
        setIsSubmit(true);
    }
    return (
        <div className='card'>
            <h2>SignUp Form</h2>
            <form className='signupForm' onSubmit={handleSubmit}>
                <label>Fullname<p className='required'> *</p>
                <input type='text' name='fullName' value={inputValues.fullName} onChange={handleChange} placeholder="Full Name"/></label>
                <label>Email<p className='required'> *</p>
                <input type='email' name='email' value={inputValues.email} onChange={handleChange} placeholder="Email"/></label>
                <label>Username<p className='required'> *</p>
                <input type='text' name='username' value={inputValues.username} onChange={handleChange} placeholder="Username"/></label>
                <label>Password<p className='required'> *</p>
                <input type='password' name='password' value={inputValues.password}  onChange={handleChange} placeholder="Password"/></label>
                <label>Confirm Password<p className='required'> *</p>
                <input type='password' name='confirmPassword' value={inputValues.confirmPassword} onChange={handleChange} placeholder="Confirm Password"/></label>
                <button type='submit'>SignUp</button>
            </form>
            <div className="bottom">
                <p><i>Already Have an Account?</i></p>
                <button>Login</button>
            
            </div>
        </div>
    ) 
}

export default Signup