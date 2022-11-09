import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../services/UserService";
import { toast } from "react-toastify";
import '../SignIn/SignIn.css';

const SignUp = (props) => {
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [number, setNumber] = useState('');
    // const [pass, setPass] = useState('');

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(username);
    // }

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        contact: "",
    });

    const [error, setError] = useState({
        errors: {},
        isError: false,
    });

    // handle change
    const handleChange = (event, property) => {
        //dynamic setting the values
        setData({ ...data, [property]: event.target.value });
    };

    //reseting the form
    const resetData = () => {
        setData({
            name: "",
            email: "",
            password: "",
            contact: "",
        });
    };

    //submit the form
    const submitForm = (event) => {
        event.preventDefault();

        console.log(data);

        //call server api for sending data
        signUp(data)
            .then((resp) => {
                console.log(resp);
                console.log("success log");
                toast.success("User is registered successfully !! user id " + resp.id);
                setData({
                    name: "",
                    email: "",
                    password: "",
                    about: "",
                });
            })
            .catch((error) => {
                console.log(error);
                console.log("Error log");
                //handle errors in proper way
                setError({
                    errors: error,
                    isError: true,
                });
            });
    }


    return (
        <>
            <div className="App">

                <div className="auth-form-container">

                    <h2>SignUp</h2>

                    <form className="login-form" onSubmit={submitForm}>

                        <label htmlFor="name">

                            Name

                        </label>

                        <input className="login-form_input"
                            type="username"
                            placeholder="Enter Full Name"
                            id="username"
                            name="username"
                            onChange={(e) => handleChange(e, "name")}
                            value={data.name}
                            invalid={
                                error.errors?.response?.data?.name ? true : false
                            }
                        />

                        <label htmlFor="email">

                            Email

                        </label>

                        <input className="login-form_input"
                            type="email"
                            placeholder="youremail@gmail.com"
                            id="email"
                            name="email"
                            onChange={(e) => handleChange(e, "email")}
                            value={data.email}
                            invalid={
                                error.errors?.response?.data?.email ? true : false
                            }
                        />

                        <label htmlFor="password">

                            Password

                        </label>

                        <input className="login-form_input"
                            type="password"
                            placeholder="********"
                            id="password"
                            name="password"
                            onChange={(e) => handleChange(e, "password")}
                            value={data.password}
                            invalid={
                                error.errors?.response?.data?.password ? true : false
                            }
                        />

                        <label htmlFor="number">

                            Contact Number

                        </label>

                        <input className="login-form_input"
                            placeholder="Enter phone number"
                            id="number"
                            name="number"
                            onChange={(e) => handleChange(e, "contact")}
                            value={data.about}
                            invalid={
                                error.errors?.response?.data?.about ? true : false
                            }
                        />

                        <button className="lbutton" type="submit">

                            SignUp

                        </button>

                    </form>

                    <Link className="link-btn lbutton" to='/signin'>

                        Have an account? Login here.

                    </Link>

                </div>

            </div>

        </>
    )
}
export default SignUp;