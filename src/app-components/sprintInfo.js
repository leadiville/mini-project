import React from "react"
import NewSprintInfo from "./sprintInfo-components/newSprintInfo"
import Notification from "./Notification"
import SprintTable from "./sprintInfo-components/sprintTable"
import { useState } from "react"

const SprintInfo = ({ sprints, delSprint }) => {
    const [finished, setFinished] = useState(false)

    const handleCheck = ( sprintId, value) => {
        let selected = sprints.filter((each, eachId) => eachId === sprintId)
        if(selected) {
            setFinished(value)
        } else {
            return 
        }
    }
    return (
        <>
            <Notification data={sprints} dataName="sprints" finished={finished} />
            <table className="table is-bordered is-hoverable">
                <SprintTable />
                {sprints.map((sprint, id) => <NewSprintInfo key={id} delSprint={delSprint} sprint={sprint} id={id} checked={finished} handleCheck={(e) => handleCheck(e.target.checked)} />
                )}
                <tfoot>
                </tfoot>
            </table>
        </>
    )

}

export default SprintInfo



