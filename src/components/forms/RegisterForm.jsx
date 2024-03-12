import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {

        const {
            handleSubmit,
            register,
            formState: {errors}
        } = useForm();

        // state voor de functionaliteit
        const [loading, toggleLoading] = useState(false);
        const navigate = useNavigate();

        // canceltoken
        const source = axios.CancelToken.source();

        useEffect(() => {
            return function cleanup() {
                source.cancel("component unmounted");
            }
        }, []);

        async function onSubmit(data) {
            console.log(data);
            toggleLoading(true);

            try {
                await axios.post('http://localhost:8080/register', {
                    username: data.username,
                    password: data.password,
                    email: data.email
                }, {
                    cancelToken: source.token
                });
                navigate('/login');
            } catch (e) {
                console.error(e);
            }
            toggleLoading(false);
        }


        return (

            <form onSubmit={handleSubmit(onSubmit)}>

                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        {...register("username", {
                            required: 'Username is required'
                        })} />
                    {errors.username && <span>{errors.username.message}</span>}
                </div>

                <div>
                    <label>E-mail address</label>
                    <input type="email"
                           {...register('email', {
                               required: 'E-mail is required',
                               pattern: {
                                   value: /^\S+@\S+$/,
                                   message: 'Invalid email address'
                               }
                           })} />
                    {errors.email && <span>{errors.email.message}</span>}
                </div>

                <div>
                    <label>Password</label>
                    <input type="password"
                           {...register('password', {
                               required: 'Password is required',
                               minLength: {
                                   value: 6,
                                   message: 'Password must be at least 6 characters'
                               }
                           })} />
                    {errors.password && <span>{errors.password.message}</span>}
                </div>

                <div>
                    <button
                        type="submit"
                        className="form-button"
                        disabled={loading}
                    >
                        Register
                    </button>
                </div>

            </form>
        );

}
export default RegisterForm;