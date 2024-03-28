import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";

function ChangeGroupForm({ group, updateGroupData, groupRelatives }) {
    const {
        register,
        handleSubmit,
        formState: { errors }, setValue,
    } = useForm();


    // state voor de functionaliteit
    const [loading, toggleLoading] = useState(false);
    const [selectedRelatives, setSelectedRelatives] = useState([]);
    const [relatives, setRelatives] = useState([]);

    // navigate voor het navigeren na invullen
    const navigate = useNavigate();

    // canceltoken voor het netwerkrequest
    const source = axios.CancelToken.source();

    useEffect(() => {

        const fetchRelatives = async () => {

            try {
                const response = await axios.get('http://localhost:8080/relatives');
                console.log('all relatives data:', response.data);
                setRelatives(response.data); // Set relatives state
                setSelectedRelatives(group.relatives.map(rel => rel.id));
            } catch (error) {
                console.error(error);
            }
        };

        fetchRelatives();

        return () => {
            source.cancel();
        };
    }, []);



    // Set initial form values from relative
    useEffect(() => {

        console.log('relatives group:', groupRelatives);

        setValue('groupName', group.groupName || '');
        setValue('groupPlace', group.groupPlace || '');
        // setValue('selectedRelatives', group.relativeIds || '');

    }, [group, setValue]);

    const handleCheckboxChange = (e) => {
        const id = parseInt(e.target.value);
        if (e.target.checked) {
            setSelectedRelatives([...selectedRelatives, id]);
        } else {
            setSelectedRelatives(selectedRelatives.filter(relId => relId !== id));
        }
    };

    // useeffect voor het afbreken
    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

// de asynchrone functie voor de data

    const onSubmit = async (data) => {

        if (selectedRelatives.length === 0) {
            alert("Please select at least one relative");
            return;
        }

        toggleLoading(true);

        try {
            await axios.put(
                `http://localhost:8080/groups/${group.id}`, data);
            updateGroupData(); // Call the callback function to update the group data in
            console.log(data);
        } catch (error) {
            console.error(error);
        }
        toggleLoading(false);
    };


    return (

        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Group name</label>
            <input type="text" {...register('groupName', { required: true })} />
            {errors.groupName && <span className="error-message">This field is required</span>}

            <label>Group place</label>
            <input type="text" {...register('groupPlace', { required: true })} />
            {errors.groupPlace && <span className="error-message">This field is required</span>}

            <div>
                <p>Selected Relatives</p>

                {selectedRelatives.map(relId => {
                    const relative = groupRelatives.find(rel => rel.id === relId);
                    return relative ? (
                        <div className="check-selected" key={relId}>{relative.firstName}</div>
                    ) : null;
                })}

            </div>

            <div>
                <p>Select Relatives</p>
                {relatives.map(relative => (

                    <div key={relative.id} className="checkbox-container">
                        <label htmlFor={`relative-${relative.id}`}>{relative.firstName}</label>
                        <input
                            type="checkbox"
                            id={`relative-${relative.id}`}
                            {...register('selectedRelatives')}
                            // name="selectedRelatives"
                            value={relative.id}
                            onChange={handleCheckboxChange}
                            checked={selectedRelatives.includes(relative.id)}
                        />
                    </div>
                ))}
                {errors.selectedRelatives && <p>Please select at least one relative</p>}
            </div>

            <button type="submit" className="form-button" disabled={loading}>
                Submit
            </button>
        </form>

    );
}


export default ChangeGroupForm;
