import React from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';

function AddNewRelativeForm() {
    const { register,
        handleSubmit,
        formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data); // WHAT WITH DATA LOGIC HERE
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Voornaam</label>
            <input type="text" {...register("firstName", { required: true })} />
            {errors.firstName && <span>This field is required</span>}

            <label>Achternaam</label>
            <input type="text" {...register("lastName", { required: false })} />
            {errors.lastName && <span>This field is required</span>}

            <label>Bijnaam</label>
            <input type="text" {...register("nickName", { required: false })} />
            {errors.lastName && <span>This field is required</span>}

            <label>Geboortedatum</label>
            <input type="date" id="dob" {...register('dob', { required: false })} />
            {errors.dob && <span>This field is required</span>}

            <label>Status</label>
            <select
                {...register("socialStatus", { required: true })} >
                <option value="">Select ...</option>
                <option value="married">Getrouwd</option>
                <option value="single">Single</option>
                <option value="together">Together</option>
            </select>
            {errors.status && <span>Kies een optie</span>}

            <label>Aantal kinderen</label>
            <input type="text" {...register("amountOfKids", { required: false })} />
            {errors.lastName && <span>This field is required</span>}

            <label>N(a)am(en) kind(eren)</label>
            <input type="text" placeholder="namen gescheiden door komma" {...register("namesOfKids", { required: false })} />
            {errors.lastName && <span>This field is required</span>}

            <label>Voeg toe aan groep</label>
            <select
                {...register("group", { required: true })}>
                <option value="">Select ...</option>
                <option value="family">Family</option>
                <option value="friends">Friends</option>
                <option value="colleagues">Colleagues</option>
                <option value="neighbours">Neighbours</option>
            </select>

            <label>Extra notities</label>
            <textarea {...register("misc")} placeholder="..." />


            <label>Email</label>
            <input type="text" {...register("email", { required: false })} />
            {errors.email && <span>This field is required</span>}

            <button
                className="form-button"
                type="submit">
                Submit</button>
        </form>
    );
}

export default AddNewRelativeForm;
