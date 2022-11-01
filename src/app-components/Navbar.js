import { FaUserCircle} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { displaySprints, displayEngineers, displayNoEngineers, displayNoSprints } from "../store/appSlice";
import { SearchBox } from "./searchBox";

const Navbar = ({ sprints, engineers }) => {
    const dispatch = useDispatch()
    const displayEngineersInfo = useSelector((state) => state.toggleInfo.viewEngineers)
    const displaySprintsInfo = useSelector((state) => state.toggleInfo.viewSprints)

    return (
        <div className="navbar is-info">
            <div className="navbar-brand" >
                <i className="navbar-item">{<FaUserCircle className="icon" />}</i>
                <p className="navbar-item is-small">userName</p>
                <a className="navbar-burger" aria-label="menu" aria-expanded="false" >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className="navbar-menu ml-6">
                <div className="navbar-start ml-4">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <div className="navbar-link">
                            <p href="#" className="navbar-item" style={{color:"white"}}>Sprints</p>
                         </div>
                        <span className="navbar-dropdown ml-6" onClick={() => {
                            displayEngineersInfo && dispatch(displayNoEngineers())
                            sprints ? dispatch(displaySprints()) : dispatch(displayNoSprints())
                        }}>
                            <a href="#" className="navbar-item">All Sprints</a>
                            <p className="navbar-divider"></p>
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
                    <div className="navbar-item has-dropdown is-hoverable ml-6">
                        <div className="navbar-link" >
                            <p className="navbar-item" style={{color:"white"}}>Engineers</p>
                        </div>
                        <div className="navbar-dropdown" onClick={() => {
                            displaySprintsInfo && dispatch(displayNoSprints())
                            engineers ? dispatch(displayEngineers()) : dispatch(displayNoEngineers())
                        }}>
                            <a href="#" className="navbar-item">All Engineers</a>
                            <div className="navbar-divider"></div>
                            {engineers.map((eng, id) => {
                                return (
                                    <p key={id} className="navbar-item">
                                        <a style={{ color: "skyblue" }}>{eng.engName}</a>
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="field navbar-item">
                        <p className="control has-icons-left">
                            <SearchBox name='navbar-serachBox' handleSearch={() =>console.log('hello global search')} />
                        </p>
                        <button 
                        className="button is-link is-light is-small navbar-item"
                        type="submit"
                        >search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar