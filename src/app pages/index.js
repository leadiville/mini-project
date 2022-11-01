import Navbar from "../app-components/Navbar";
import SprintInfo from "../app-components/sprintInfo";
import { useSelector, useDispatch } from "react-redux/";
import AppLevel from "../app-components/appLevel";
import EngineersInfo from "../app-components/engineersInfo";
import { openSprintModal, openEngModal } from "../store/appSlice";
import AddNewBtn from "../app-components/addNewBtn";
import { useState } from "react";


const AppLayout = ({ sprints, delSprint, engineers, handleDel }) => {
    
    const displaySprintInfo = useSelector((state) => state.toggleInfo.viewSprints)
    const displayEngineersInfo = useSelector((state) => state.toggleInfo.viewEngineers)

    const [searchV, setSearchV] = useState("")

    const dispatch = useDispatch()

    const filteredSprints = sprints.filter((eachSprint) => {
        const { sprintName } = eachSprint
        return sprintName.toLowerCase().includes(searchV.toLowerCase())
    })
    const filteredEngineers = engineers.filter((engineer) => {
        const { engName } = engineer
        return engName.toLowerCase().includes(searchV.toLowerCase())
    })

    return (
        <>
            <div className="block" style={{backgroundColor:"snow"}}>
                <Navbar sprints={sprints} engineers={engineers} />
                <div className="level mt-3 ml-5 mr-5">
                    <>
                        {displaySprintInfo && <AppLevel title="sprint" actionName='Add sprint' handleClick={() => dispatch(openSprintModal())} handleSearch={(e) => setSearchV(e.target.value)} value={searchV} />}
                        {displayEngineersInfo && <AppLevel title="engineer" actionName='Add engineer' handleClick={() => dispatch(openEngModal())} handleSearch={(e) => setSearchV(e.target.value)} value={searchV} />}
                        {(!displaySprintInfo && !displayEngineersInfo) && (<>
                            <AddNewBtn className="level-left" actionName="Add sprint" handleClick={() => dispatch(openSprintModal())} />
                            <AddNewBtn className="level-right" actionName="Add engineer" handleClick={() => dispatch(openEngModal())} />
                        </>)}
                    </>
                </div>
                <div className="container">
                    <article className="content is-capitalized">
                        <p className="title is-" style={{color:"cornflowerblue"}}>{displaySprintInfo ? 'sprints' : (displayEngineersInfo && "engineers")}</p>

                        <div className="box" style={{backgroundColor:"lightBlue"}}>
                            {(displayEngineersInfo) && <EngineersInfo engineers={filteredEngineers} handleDel={handleDel} />}
                            {(displaySprintInfo) && <SprintInfo style={{backgroundColor:"snow"}} sprints={filteredSprints} delSprint={delSprint} />}
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
export default AppLayout;