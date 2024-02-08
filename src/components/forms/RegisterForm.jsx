import React from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';

const RegisterForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        console.log(data); // HANDLE FORM DATA!!
    };

    return (
        <form onSubmit={ handleSubmit(onSubmit) }>

            <div>
                <label>Gebruikersnaam</label>
                <input
                    {...register('username', { required: 'Gebruikersnaam is verplicht' })}
                />
                {errors.username && <span>{errors.username.message}</span>}
            </div>

            <div>
                <label>E-mailadres</label>
                <input
                       {...register('email', { required: 'E-mail is verplicht', pattern: {  value: /^\S+@\S+$/, message: 'Invalid email address' }})}
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div>
                <label>Kies een Password</label>
                <input type="password"
                       {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} />
                {errors.password && <span>{errors.password.message}</span>}
            </div>

            <div>

                <button
                    className="form-button"
                    type="submit">
                    Register
                </button>
            </div>

        </form>
    );
};

export default RegisterForm;