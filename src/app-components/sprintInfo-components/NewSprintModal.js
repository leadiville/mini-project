import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";
import ModalForm from "./sprintFormModal";
import { closeSprintModal, displaySprints } from "../../store/appSlice";

export  const NewSprintModal = ({ handleChange, handleSubmit }) => {

  const dispatch = useDispatch()

  return (
    <div className='modal is-active'>
      <div className="modal-background"></div>
      <div className="modal-content">
        <form className="form" onSubmit={handleSubmit}>
          <ModalForm name='sprintName' type='text' placeholder='sprint title' handleChange={handleChange} required />
          <ModalForm name='budget' type='number' placeholder='budget' handleChange={handleChange} required />
          <ModalForm name='totalPoints' type='number' placeholder='total points' handleChange={handleChange} required />
          <ModalForm name='level' type='number' placeholder='level(max)' handleChange={handleChange} required />
          <ModalForm name='costPerPoint' type='number' placeholder='cost/point' handleChange={handleChange} required />
          <button className="button is-link" type="submit">submit</button>
        </form>
      </div>
      <button className="modal-close" onClick={() =>{ 
        dispatch(closeSprintModal())
        }}>{<FaTimes />}</button>
    </div>
  )
}
