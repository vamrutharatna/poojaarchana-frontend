import React, { useState } from "react";
import './SignIn.css';

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    } 

    return (
        <>
        <div className="App">
        <div className="auth-form-container">
            <h1 >Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input className="login-form_input" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input className="login-form_input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button className="lbutton" type="submit">LogIn</button>
            </form>
            <button className="link-btn lbutton" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
        </div>
        </>
    )
}
export default SignIn;
