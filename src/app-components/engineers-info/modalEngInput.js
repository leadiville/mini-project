
const ModalEngInput = ({name, placeholder, type, handleChange, required}) => {

    return (
        <>
            <input className="input" type={type} placeholder={placeholder} onChange={(e)=>handleChange(name, e.target.value)} name={name} required={required} />
        </>
    )
}
export default ModalEngInput