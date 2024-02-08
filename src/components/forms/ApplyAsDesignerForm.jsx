import React from 'react';
import { useForm } from 'react-hook-form';

function ApplyAsDesignerForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data); // You can handle form submission here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name</label>
                <input type="text" {...register('name', { required: true })} />
                {errors.name && <span>Name is required</span>}
            </div>

            <div>
                <label>Email</label>
                <input type="email" {...register('email', { required: true })} />
                {errors.email && <span>Email is required</span>}
            </div>

            <div>
                <label>Link to Portfolio</label>
                <input {...register("subject", { required: false })} />
                {errors.subject && <span>This field is required</span>}
            </div>

            <div>
                <label>Message</label>
                <textarea {...register('message', { required: true })}></textarea>
                {errors.message && <span>Message is required</span>}
            </div>

            <button
                className="form-button"
                type="submit"
            >
                Apply
            </button>
        </form>
    );
}

export default ApplyAsDesignerForm;
