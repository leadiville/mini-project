import NewSprintInfo from "./sprintInfo-components/newSprintInfo"
import Notification from "./Notification"
import SprintTable from "./sprintInfo-components/sprintTable"


const SprintInfo = ({ sprints, delSprint }) => {
    const sprintsLength = sprints.length
    return (
        <>
            <Notification data={sprints} dataName="sprints" />
            <table className="table is-bordered is-hoverable">
                <SprintTable />
                {sprints.map((sprint, sprintId) => <NewSprintInfo key={sprintId} sprintId = {sprintId} delSprint={delSprint} sprint={sprint} sprintsLength={sprintsLength}/>
                )}
                <tfoot>
                </tfoot>
            </table>
        </>
    )

}

export default SprintInfo



