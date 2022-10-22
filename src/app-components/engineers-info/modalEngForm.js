import { useDispatch } from "react-redux"
import { closeEngModal, displayEngineers } from "../../store/appSlice"
import ModalEngInput from "./modalEngInput" 
export const ModalEngForm = ({ handleChange, handleSubmit, required}) => {

    const dispatch = useDispatch()
    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
            <div className="modal-content">
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <p className="control">
                        <ModalEngInput name='engName' placeholder="engineer's name" type="text" handleChange={handleChange} required/>
                        <ModalEngInput name='level' placeholder="level" level type="number" handleChange={handleChange} required/>
                        <ModalEngInput name='point' placeholder="point" type="number" handleChange={handleChange} required/>
                        <ModalEngInput name='cost' placeholder="cost" type="number" handleChange={handleChange} required/>
                        <ModalEngInput name='mobilization' placeholder="mobilization" type="number" handleChange={handleChange} required/>
                        <ModalEngInput name='sprintName' placeholder="sprint issued" type="text" handleChange={handleChange} required/>
                        <button className="button is-link" type="submit">submit</button>
                    </p>
                </div>
            </form>
            </div>
            <button className="modal-close" onClick={() => {
                dispatch(closeEngModal())
            }}>
            </button>
        </div>
    )
}