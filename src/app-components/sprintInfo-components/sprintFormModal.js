
const SprintFormModal = ({ name, type, placeholder, handleChange, required }) => {

    return (
        <div className="field">
            <p className="control">
                <input className="input" name={name} type={type} placeholder={placeholder} onChange={(e) => handleChange(name, e.target.value)} required={required} />
            </p>
        </div>
    )
}

export default SprintFormModal  