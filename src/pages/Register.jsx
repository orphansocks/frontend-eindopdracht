import { Link } from "react-router-dom";
import RegisterForm from "../components/forms/RegisterForm.jsx";
import React from "react";

function Register() {


    return (
        <>

            <h1 className="page-title">Register</h1>


            <section  className="outer-content-container">

                <div className="inner-content-container">
                    <p>Register here, or <Link to="/login">login</Link> </p>

                    <RegisterForm />

                    <p>Are you a designer? Please apply <Link to="/apply">here</Link></p>

                </div>

            </section>






        </>


    )





}

export default Register;