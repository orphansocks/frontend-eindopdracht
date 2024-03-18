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

    const initialDesignerId = "4040";

    // state voor de functionaliteit
    const [loading, toggleLoading] = useState(false);

    // navigate voor het navigeren na invullen
    const navigate = useNavigate();

    // canceltoken voor het netwerkrequest
    const source = axios.CancelToken.source();

    // useeffect voor het afbreken
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    // de asynchrone functie voor de data
    async function onSubmit(data) {
        console.log(data);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8080/cards', {

                cardName: data.cardName,
                designerId: data.designerId,
               category: data.category,
                imageId: data.imageId,

            }, {
                cancelToken: source.token,
            });
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
                {...register('imageData', { required: true })}
            />
            {errors.imageDate && <span>This field is required, choose a file</span>}

            <button
                type="submit"
                className="form-button"
                disabled={loading}>

                Upload</button>



        </form>


    );

    }

export default uploadCardForm;