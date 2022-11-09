import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../services/UserService";
import { doLogin } from "../../auth";
import userContext from '../../context/userContext'
import './SignIn.css';

const SignIn = (props) => {
    const userContxtData = useContext(userContext);

    const navigate = useNavigate();

    const [loginDetail, setLoginDetail] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event, field) => {
        let actualValue = event.target.value;
        setLoginDetail({
            ...loginDetail,
            [field]: actualValue,
        });
    };

    const handleReset = () => {
        setLoginDetail({
            username: "",
            password: "",
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(loginDetail);
        //validation
        if (
            loginDetail.username.trim() == "" ||
            loginDetail.password.trim() == ""
        ) {
            toast.error("Username or Password  is required !!");
            return;
        }

        //submit the data to server to generate token
        loginUser(loginDetail)
            .then((data) => {
                console.log(data);

                //save the data to localstorage
                doLogin(data, () => {
                    console.log("login detail is saved to localstorage");
                    //redirect to user dashboard page
                    // userContxtData.setUser({
                    //     data: data.user,
                    //     login: true,
                    // });
                    // navigate("/user/dashboard");
                });

                toast.success("Login Success");
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status == 400 || error.response.status == 404) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Something went wrong  on sever !!");
                }
            });
    };

    return (
        <>
            <div className="App">

                <div className="auth-form-container">

                    <h1 >

                        Login

                    </h1>

                    <form className="login-form" onSubmit={handleFormSubmit}>

                        <label htmlFor="email">

                            Email

                        </label>

                        <input className="login-form_input"
                            type="email"
                            placeholder="youremail@gmail.com"
                            id="email"
                            name="email"
                            value={loginDetail.username}
                            onChange={(e) => handleChange(e, "username")}
                        />

                        <label htmlFor="password">

                            Password

                        </label>

                        <input className="login-form_input"
                            type="password"
                            placeholder="********"
                            id="password"
                            name="password"
                            value={loginDetail.password}
                            onChange={(e) => handleChange(e, "password")}
                        />

                        <button className="lbutton"
                            type="submit"
                        >

                            LogIn

                        </button>

                    </form>

                    <Link className="link-btn lbutton" to='/signup'>

                        Don't have an account? Register here.

                    </Link>

                </div>

            </div>
        </>
    )
}
export default SignIn;
