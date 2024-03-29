import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ChangeRelativeForm({ relative, updateRelativeData }) {
    const {
        register,
        handleSubmit,
        formState: { errors }, setValue } = useForm();


    // state voor de functionaliteit
    const [loading, toggleLoading] = useState(false);

    // navigate voor het navigeren na invullen
    const navigate = useNavigate();

    // canceltoken voor het netwerkrequest
    const source = axios.CancelToken.source();

    // set initial form values from relative
    useEffect( () => {

        setValue('firstName', relative.firstName || '');
        setValue('lastName', relative.lastName || '');
        setValue('nickName', relative.nickName || '');
        setValue('dob', relative.dob || '');
        setValue('socialStatus', relative.socialStatus || '');
        setValue('nameOfPartner', relative.nameOfPartner || '');
        setValue('hasKids', relative.hasKids || '');
        setValue('amountOfKids', relative.amountOfKids || '');
        setValue('namesOfKids', relative.namesOfKids || '');
        setValue('misc', relative.misc || '');
        setValue('relation', relative.relation || '');


    }, [relative, setValue]);

    // useeffect voor het afbreken
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

// de asynchrone functie voor de data

    const onSubmit = async (data) => {
        toggleLoading(true);
        try {
            await axios.put(`http://localhost:8080/relatives/${relative.id}`, data);
            updateRelativeData(); // Call the callback function to update the relative data in SingleRelative component
            // navigate(`/relatives/${relative.id}`);
        } catch (error) {
            console.error(error);
        }
        toggleLoading(false);
    };

    const validateDOB = (value) => {
        const selectedDate = new Date(value);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
            return "Date of birth cannot be in the future";
        }

        return true;
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>First name *</label>
            <input type="text" {...register("firstName", { required: true })} />
            {errors.firstName && <span className="error-message">This field is required</span>}

            <label>Last name</label>
            <input type="text" {...register("lastName", { required: false })} />
            {errors.lastName && <span>This field is NOT required</span>}

            <label>Nickname</label>
            <input type="text" {...register("nickName", { required: false })} />
            {errors.nickName && <span>This field is NOT required</span>}

            <label>Date of birth</label>
            <input type="date" id="dob" {...register('dob', { required: false, validate: validateDOB })} />
            {errors.dob && <span>Date of birth cannot be in the future</span>}

            <label>Social status *</label>
            <select
                {...register("socialStatus", { required: true })} >
                <option value="">Select ...</option>
                <option value="single">Single</option>
                <option value="together">Together</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="other">Other</option>
            </select>
            {errors.socialStatus && <span className="error-message">Choose an option</span>}

            <label>Name of Partner</label>
            <input type="text" {...register("nameOfPartner", { required: false })} />
            {errors.nameOfPartner && <span>This field is NOT required</span>}

            <label>Has kids</label>
            <select {...register("hasKids", { required: false })}>
                <option value="">Select ...</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            {errors.hasKids && <span>Choose an option NOT required</span>}

            <label>Amount of kids</label>
            <input type="text" {...register("amountOfKids", { required: false })} />
            {errors.amountOfKids && <span>This field is NOT required</span>}

            <label>Name(s) of kid(s)</label>
            <input type="text" placeholder="(name(s) separated  as you like)" {...register("namesOfKids", { required: false })} />
            {errors.namesOfKids && <span>This field is NOT required</span>}

            <label>Our relation *</label>
            <select
                {...register("relation", { required: true })} >
                <option value="">Select ...</option>
                <option value="friends">Friends</option>
                <option value="family">Family</option>
                <option value="fellow students">Study related</option>
                <option value="neighbours">Neighbours</option>
                <option value="colleagues">Colleagues</option>
                <option value="other">Other</option>
            </select>
            {errors.relation && <span className="error-message">Choose an option</span>}

            <label>Miscellaneous</label>
            <textarea {...register("misc", {required: false})} placeholder="..." />
            {errors.misc && <span>This field is NOT required</span>}


            <button
                type="submit"
                className="form-button"
                disabled={loading}>

                Submit</button>
        </form>
    );
}


export default ChangeRelativeForm;
