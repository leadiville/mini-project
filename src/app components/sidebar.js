import { useState } from "react";
import { FaBolt, FaUserCircle, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
    
    return (
        <>
            <div class="column is-1 is-vcentered" >
                    <div class="mt-6 pt-4" >
                        <div class="navbar-item has-dropdown is-hoverable mt-3 pt-3">
                            <span class="navbar-link"><i class="navbar-item icon">{<FaUserCircle class="nav-icons"/>}</i></span>
                            <span class="navbar-dropdown">
                                <p class="navbar-item">username</p>
                                <p class="navbar-item">email address</p>
                                <p class="navbar-divider"></p>
                                <Link to="/register" class="navbar-item">logout</Link>
                            </span>
                        </div>
                        <div class="navbar-item has-dropdown is-hoverable mt-6 pt-6 ">
                            <span class="navbar-link"><i class="navbar-item icon">{<FaBolt class="nav-icons"/>}</i></span>
                            <span class="navbar-dropdown ml-6">
                                <a href="#" class="navbar-item">all sprints</a>
                                <p class="navbar-divider"></p>
                                <a href="#" class="navbar-item">sprint 1</a>
                                <a href="#" class="navbar-item">sprint 2</a>
                            </span>
                        </div>
                        <span class="navbar-item mt-6 pt-6"><i class="navbar-item icon is-hoverable">{<FaUsers class="nav-icons"/>}</i></span>
                    </div>
            </div>
        </>
    )
}

export default Sidebar