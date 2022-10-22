import { FaEdit, FaTimes } from "react-icons/fa"

export const EngData = ({ engineer, handleDel, id }) => {
    const { engName, level, point, cost, mobilization, sprintName } = engineer
    const balance = cost - mobilization
    const chargePerPoint = level * point
    return (
        <>
            <tbody>
                <tr>
                    <th >
                        <div className="columns" style={{ display: "flex", justifyContent: "space-between", }}>
                            <p className="column is-6">{engName}</p>
                            <span className="column" style={{display:"flex", justifyContent:"space-between"}}>
                                <i className="icon">{<FaEdit style={{color: "green"}} />}</i>
                                <i  onDoubleClick={()=>handleDel(id)} className="icon">{<FaTimes style={{color:"red"}} />}</i>
                            </span>
                        </div>
                    </th>
                    <td>{level}</td>
                    <td>{chargePerPoint}</td>
                    <td>{point}</td>
                    <td>{cost}</td>
                    <td>{mobilization}</td>
                    <td>{balance}</td>
                    <th>{sprintName}</th>
                </tr>
            </tbody>
        </>
    )
}
