import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../SignIn/SignIn.css';

const SignUp = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [pass, setPass] = useState(''); 
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    } 

    return (
        <>
        <div className="App">
        <div className="auth-form-container">
            <h2>SignUp</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="login-form_input" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="name">Username</label>
                <input className="login-form_input" value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="Enter Username" id="username" name="username" />
                <label htmlFor="number">Contact Number</label>
                <input className="login-form_input" value={number} onChange={(e) => setNumber(e.target.value)}type="number" placeholder="Enter phone number" id="number" name="number" />
                <label htmlFor="password">password</label>
                <input className="login-form_input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="lbutton" type="submit">SignUp</button>
            </form>
            <Link className="link-btn lbutton" to='/signin'>Have an account? Login here.</Link>
        </div>
        </div>
        </>
    )
}
export default SignUp;