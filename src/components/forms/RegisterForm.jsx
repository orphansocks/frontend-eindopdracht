import React from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';

const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data); // Here you can handle your form data, e.g., send it to the server
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div>
                <label>Username</label>
                <input
                    {...register('username', { required: 'Username is required' })}
                />
                {errors.username && <span>{errors.username.message}</span>}
            </div>

            <div>
                <label>Email</label>
                <input
                       {...register('email', { required: 'Email is required', pattern: {  value: /^\S+@\S+$/, message: 'Invalid email address' }})}
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
                <label>Password</label>
                <input type="password"
                       {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div>
                <button type="submit">Register</button>
            </div>

        </form>
    );
};

export default RegisterForm;