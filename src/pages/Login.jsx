import {Link} from "react-router-dom";
import React from "react";
import LoginForm from "../components/forms/LoginForm.jsx";

function Login() {


    return (

        <>

            <h1 className="page-title">Login</h1>


            <section  className="outer-content-container">

                <div className="inner-content-container">

                    <LoginForm />



                    <p>Not having an account yet? Please register <Link to="/register">here</Link></p>

                </div>

            </section>





        </>


    )





}

export default Login;