import {useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import './Forms.css';

function uploadCardForm() {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm();

    const initialDesignerId = "4001";

    // state voor de functionaliteit
    const [loading, toggleLoading] = useState(false);

    // navigate voor het navigeren na invullen
    const navigate = useNavigate();


    // useeffect voor het afbreken
    useEffect(() => {
        return () => {
            //cleanup
        }
    }, []);

    // de asynchrone functie voor de data
    async function onSubmit(data) {
        console.log(data);
        toggleLoading(true);

        try {
            const formData = new FormData();
            formData.append('cardName', data.cardName);
            formData.append('designerId', data.designerId);
            formData.append('category', data.category);
            formData.append('file', data.file[0]); // single file upload

            await axios.post('http://localhost:8080/cards', formData, {

                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Redirect or do something upon successful upload
            navigate('/designers/4001');
        } catch (e) {
            console.error(e);
        }
        toggleLoading(false);
    }


    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Card name*</label>
            <input type="text" {...register("cardName", { required: true })} />
            {errors.cardName && <span>This field is required</span>}


            <label>Your Id</label>
            <input type="text" defaultValue={initialDesignerId} readOnly {...register("designerId", { required: true })} />
            {errors.designerId && <span>This field is required</span>}

            <label>Category*</label>
            <select
                {...register("category", { required: true })} >
                <option value="">Select ...</option>
                <option value="Birthday">Birthday</option>
                <option value="Get well soon">Get well soon</option>
                <option value="Birth">Birth</option>
                <option value="Other">Other</option>
            </select>
            {errors.category && <span>This field is required, choose an option</span>}

            <label>Upload image</label>
            <input
                type="file"
                accept="image/*"
                {...register('file', { required: true })}
            />
            {errors.file && <span>This field is required, choose a file</span>}

            <button
                type="submit"
                className="form-button"
                disabled={loading}>

                Upload</button>



        </form>


    );

    }

export default uploadCardForm;