import { FaBolt, FaUserCircle, FaUsers } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { displaySprints, displayEngineers, displayNoEngineers, displayNoSprints } from "../store/appSlice";

const Sidebar = ({ sprints, engineers }) => {
    const dispatch = useDispatch()
    const displayEngineersInfo = useSelector((state) => state.toggleInfo.viewEngineers)
    const displaySprintsInfo = useSelector((state) => state.toggleInfo.viewSprints)

    return (
        <>
            <div className="column is-1 is-vcentered is-capitalized" >
                <div className="mt-6 pt-4" >
                    <div className="navbar-item has-dropdown is-hoverable mt-3 pt-3">
                        <span className="navbar-link"><i className="navbar-item icon">{<FaUserCircle className="nav-icons" />}</i></span>
                        <span className="navbar-dropdown">
                            <p className="navbar-item">username</p>
                            <p className="navbar-item">email address</p>
                            <p className="navbar-divider"></p>
                            <Link to="/register" className="navbar-item">logout</Link>
                        </span>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable mt-6 pt-6 ">
                        <span className="navbar-link"><i className="navbar-item icon">{<FaBolt className="nav-icons" />}</i></span>
                        <span className="navbar-dropdown ml-6" onClick={() => {
                            displayEngineersInfo && dispatch(displayNoEngineers())
                            sprints ? dispatch(displaySprints()) : dispatch(displayNoSprints())
                        }}>
                            <a href="#" className="navbar-item" style={{ color: "black" }} >sprints</a>
                            <p className="navbar-divider" ></p>
                            {sprints && sprints.map((each, id) => {
                                const { sprintName, status } = each
                                return (
                                    <p key={id} className="navbar-item">
                                        <a href="#" className={`{default} ${status ? 'done' : "default"}`}>{sprintName}</a>
                                    </p>
                                )
                            })}
                        </span>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable mt-6 pt-6">
                        <p className="navbar-link" ><i className="icon">{<FaUsers className="nav-icons" />}</i></p>
                        <div className="navbar-dropdown" onClick={() => {
                            displaySprintsInfo && dispatch(displayNoSprints())
                            engineers ? dispatch(displayEngineers()) : dispatch(displayNoEngineers())
                        }}>
                            <p className="navbar-item" >Engineers</p>
                            <div className="navbar-divider"></div>
                            {engineers.map((eng, id) => {
                                return (
                                    <p key={id} className="navbar-item mt-3">
                                        <a style={{ color: "skyblue" }}>{eng.engName}</a>
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar