import './Forms.css';

function InputField({ label, type, name, handleChange, required, value }) {
    const labelInputLink = `relative-${name}`;

    return (
        <>
            <label>{label}</label>
            <input
                type={type}
                id={labelInputLink}
                name={name}
                required={required}
                value={value}
                onChange={handleChange}
            />
        </>
    );
}

export default InputField;