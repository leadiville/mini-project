import { FaPlus, FaSearch} from "react-icons/fa"
import { Link } from "react-router-dom";
import Sidebar from "../app components/sidebar";
import Info from "../app components/info";
const AppLayout = () => {
    
    return (
        <>
            <div class="columns" style={{height:"768px", width:"auto"}}>
                <Sidebar />
                <div class="column is-1" style={{backgroundColor:"blue", marginLeft:"30px"}}></div>
                <div class="column">
                    <div class="container" style={{padding:"40px"}}>
                        <div class="level">
                            <div class="level-left">
                                <div class="field">
                                    <p class="control">
                                        <button class="button is-link">
                                            <span class="icon is-small"><i class="icon">{<FaPlus/>}</i></span>
                                            <p class="content is-small">New Sprint</p>
                                        </button>
                                    </p>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="field">
                                <p class="control has-icons-left">
                                    <input class="input is-small" placeholder="search" />
                                    <span class="icon is-small is-left"><i class="icon">{<FaSearch />}</i></span>
                                </p>
                                </div>
                            </div>
                        </div>
                        <Info />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AppLayout;