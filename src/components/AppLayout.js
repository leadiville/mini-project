import { FaPlus, FaRunning, FaSearch, FaTeamspeak, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const AppLayout = () => {
    
    return (
        <>
            <div class="columns" style={{height:"768px", width:"auto"}}>
                <div class="column is-1 has-text-centered" >
                    <div class="block">
                        <span class="icon is-large mt-4 pt-6">
                            <Link to="">
                                <i class="icon">{<FaUser className="icon"/>}</i>
                            </Link>
                        </span>
                        <span class="icon is-large mt-6 pt-6" >
                            <Link to="">
                                <i class="icon">{<FaRunning className="icon"/>}</i>
                            </Link>
                        </span>
                        <span class="icon is-large mt-6 pt-6">
                            <Link to="">
                                <i class="icon">{<FaTeamspeak className="icon"/>}</i>
                            </Link>
                        </span>
                    </div>
                </div>
                <div class="column is-2" style={{backgroundColor:"blue"}}>
                </div>
                <div class="column">
                    <div class="container" style={{padding:"40px"}}>
                        <div class="level">
                            <div class="level-left">
                                <div class="field">
                                    <p class="control">
                                        <button class="button is-link">
                                            <span class="icon is-small"><i class="icon">{<FaPlus/>}</i></span>
                                            <content class="content is-small">New Sprint</content>
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="field">
                                <p class="control has-icons-left">
                                    <input class="input is-small" placeholder="search" />
                                    <span class="icon is-small is-left"><i class="icon">{<FaSearch/>}</i></span>
                                </p>
                                </div>
                            </div>
                        </div>
                        <article class="pt-6">
                            <p class="content">Recently viewed</p>
                            <div class="box has-text-centered" style={{display:"flex", flexDirection:"column", justifyContent:"flex-end" , minHeight:"200px", minWidth:"auto"}}>
                                <footer >
                                    <p class="content is-small">
                                        No saved sprints yet...
                                    </p>
                                </footer>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AppLayout;