import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './Forms.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddNewGroupForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [loading, toggleLoading] = useState(false);
    const [relatives, setRelatives] = useState([]); // State to store relatives data
    const [selectedRelatives, setSelectedRelatives] = useState([]); // State to store selected relatives

    const navigate = useNavigate();
    const source = axios.CancelToken.source();

    useEffect(() => {
        // Fetch relatives data
        const fetchRelatives = async () => {
            try {
                const response = await axios.get('http://localhost:8080/relatives');
                setRelatives(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchRelatives(); // Call fetchRelatives on component mount

        return () => {
            source.cancel();
        };
    }, []);

    const handleCheckboxChange = (e) => {
        const id = parseInt(e.target.value);
        if (e.target.checked) {
            setSelectedRelatives([...selectedRelatives, id]);
        } else {
            setSelectedRelatives(selectedRelatives.filter(relId => relId !== id));
        }
    };

    async function onSubmit(data) {
        toggleLoading(true);
        try {
            await axios.post(
                'http://localhost:8080/groups',
                {
                    groupName: data.groupName,
                    groupPlace: data.groupPlace,
                    relatives: selectedRelatives // Pass selected relatives to the backend
                },
                {
                    cancelToken: source.token
                }
            );
            navigate('/allgroups');
        } catch (error) {
            console.error(error);
        }
        toggleLoading(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Group name</label>
            <input type="text" {...register('groupName', { required: true })} />
            {errors.groupName && <span className="error-message">This field is required</span>}

            <label>Group place</label>
            <input type="text" {...register('groupPlace', { required: true })} />
            {errors.groupPlace && <span className="error-message">This field is required</span>}

            <div>
                <p>Selected Relatives:</p>
                {selectedRelatives.map(relId => {
                    const relative = relatives.find(rel => rel.id === relId);
                    return <div className="check-selected" key={relId}>{relative.firstName}</div>;
                })}
            </div>

            <div>
                <p>Select Relatives:</p>
                {relatives.map(relative => (

                    <div key={relative.id} className="checkbox-container">
                        <label htmlFor={`relative-${relative.id}`}>{relative.firstName}</label>
                        <input
                            type="checkbox"
                            id={`relative-${relative.id}`}
                            value={relative.id}
                            onChange={handleCheckboxChange}
                            checked={selectedRelatives.includes(relative.id)}
                        />
                    </div>
                ))}
            </div>

            <button type="submit" className="form-button" disabled={loading}>
                Submit
            </button>
        </form>
    );
}

export default AddNewGroupForm;
