import { FaEdit, FaTimes } from "react-icons/fa"

const NewSprintInfo = ({ sprint, delSprint, id, checked, handleCheck}) => {
    const { sprintName, budget, totalPoints, costPerPoint, level, } = sprint
    
    return (
        <>
            <tbody>
                <tr className="is-hoverable">
                    <th
                        style={{ display: "flex", justifyContent: "space-between" }}>
                        <input onChange={handleCheck} checked={checked} type="checkbox" />
                        {sprintName}
                        <span>
                            <i className='icon'>{<FaEdit style={{ color: "green" }} />}</i>
                            <i className="icon">{<FaTimes style={{ color: "red" }} onDoubleClick={() => delSprint(id)} />}
                            </i>
                        </span>
                    </th>
                    <td>{budget}</td>
                    <td>{totalPoints}</td>
                    <td>{costPerPoint}</td>
                    <td>{level}</td>
                    <td className={`not-finished ${checked && 'finished'}`}></td>
                </tr>
            </tbody>
            <tfoot >

            </tfoot>
        </>
    )
}
export default NewSprintInfo