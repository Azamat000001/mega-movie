import React, { useState} from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import AuthDetails from "../AuthDetails/AuthDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { faFontAwesome } from "@fortawesome/free-regular-svg-icons";
function Navbar() {
        const [authUser, setAuthUser] = useState(null);
        return (
        <nav className="nav">
          
                <h1 className="item ava">Mega-Team's Movie</h1>
                <div className="item"><NavLink to="/home" >Home</NavLink></div>
                <div className="item"><NavLink to="movies" >Films</NavLink></div>
                <div className="item">
                        <NavLink to="/SignIn">Sign in</NavLink>
                </div>
                
                <AuthDetails/>
        
        </nav>
    )
}

export default Navbar;