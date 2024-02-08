import React from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data); // HANDLE FORM SUBMISSION
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Gebruikersnaam</label>
                <input type="text" {...register('username', { required: 'Gebruikersnaam is' +
                        ' verplicht' })} />
                {errors.username && <span>{errors.username.message}</span>}
            </div>

            <div>
                <label>Password</label>
                <input type="password" {...register('password', { required: 'Password is' +
                        ' verplicht' })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <button
                className="form-button"
                type="submit">
                Login
            </button>
        </form>
    );
};

export default LoginForm;
