import { FaEdit, FaTimes } from "react-icons/fa"
import { useState, useEffect } from "react"

const NewSprintInfo = ({ sprint, delSprint, sprintId, sprintsLength}) => {
    
    const { sprintName, budget, totalPoints, costPerPoint, level } = sprint
    const [isChecked, setIsChecked] = useState(new Array(sprintsLength).fill(false))
    
    function handleCheck(id, value) {
        let mappedChecked = [...isChecked]
        let selected = mappedChecked.map((each, eachIndex) => eachIndex === id ? !each : each)
        return setIsChecked([...selected])
    }
    
    return (
        <>
            <tbody>
                <tr className="is-hoverable">
                    <th style={{ display: "flex", justifyContent: "space-between" }}>
                        <p className="field">
                            <span className="control">
                                <input
                                    type="checkbox"
                                    name={sprintName}
                                    value={sprintName}
                                    checked={isChecked[sprintId]}
                                    onChange={(e) => handleCheck(sprintId, e.target.checked)
                                    }
                                />
                            </span>
                        </p>
                        {sprintName}
                        <span>
                            <i className='icon'>{<FaEdit style={{ color: "green" }} />}</i>
                            <i className="icon">{<FaTimes style={{ color: "red" }} onDoubleClick={() => delSprint(sprintId)} />}
                            </i>
                        </span>
                    </th>
                    <td>{budget}</td>
                    <td>{totalPoints}</td>
                    <td>{costPerPoint}</td>
                    <td>{level}</td>
                    <td className={`not-finished ${isChecked[sprintId] ? "finished" : "not-finished"}`} ></td>
                </tr>
            </tbody>
            <tfoot >

            </tfoot>
        </>
    )
}
export default NewSprintInfo