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
            source.cancel();
        }
    }, []);

    // de functie voor het indienen van de data

    async function onSubmit(data) {
        console.log(data);

        try {
            await axios.post('http://localhost:8080/login', {
                username: data.username,
                password: data.password
            }, {
                cancelToken: source.token,
            });
            console.log(result.data);

            // geef de JWT token aan de login mee
            login(result.data.accessToken);
        } catch (e) {
            console.error(e);
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Gebruikersnaam</label>
                <input type="text"
                       {...register('username', {
                           required: 'Gebruikersnaam is verplicht'
                       })} />
                {errors.username && <span>{errors.username.message}</span>}
            </div>

            <div>
                <label>Password</label>
                <input type="password"
                       {...register('password', {
                           required: 'Password is verplicht'
                       })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>
            {errors.username && errors.password && <p>Combinatie van emailadres en wachtwoord is onjuist</p>}

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
