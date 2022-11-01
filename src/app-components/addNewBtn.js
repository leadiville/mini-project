import { FaPlus } from "react-icons/fa"

const AddNewBtn = ({ actionName, handleClick}) => {

    return (
        <button className="button is-success is-outlined is-rounded is-small" onClick={handleClick}>
            <span className="icon is-small"><i className="icon">{<FaPlus />}</i></span>
            <p className="content is-small">{actionName}</p>
        </button>
    )
}
export default AddNewBtn