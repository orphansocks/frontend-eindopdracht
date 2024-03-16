import React, {useContext, useEffect, useRef, useState} from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext.jsx";

const LoginForm = () => {

    // hookform voor het formulier
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    // voor de context
    const { login } = useContext(AuthContext);

    // state voor de functionaliteit
    const [loading, toggleLoading] = useState(false);

    // navigate voor na submit
    const navigate = useNavigate();

    // een canceltoken voor het request naar het netwerk
    const source = axios.CancelToken.source();

    // useEffect om side effects af te handelen
    useEffect(() => {
        return function cleanup() {
            source.cancel("component unmounted");
        }
    }, []);

    // de functie voor het indienen van de data

    async function onSubmit(data) {
        console.log(data);

        try {
            toggleLoading(true);
            const response = await axios.post('http://localhost:8080/authenticate', {
                username: data.username,
                password: data.password,
            }, {
                cancelToken: source.token,
            });
            console.log(response.data);

            // geef de JWT token aan de login mee
            const { jwt } = response.data;

            // pass de token naar de login functie
            login(jwt);

        } catch (e) {
            console.error(e);
        } toggleLoading(false);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username</label>
                <input type="text"
                       {...register('username', {
                           required: 'Username is required'
                       })} />
                {errors.username && <span>{errors.username.message}</span>}
            </div>

            <div>
                <label>Password</label>
                <input type="password"
                       {...register('password', {
                           required: 'Password is required'
                       })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            {errors.username && errors.password && <p>Combination of email address and password is incorrect</p>}

            <button
                type="submit"
                className="form-button"
                >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
