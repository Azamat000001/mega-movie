import React, { useState} from "react";
import { NavLink, Route } from "react-router-dom";
import "./Navbar.css"
import AuthDetails from "../AuthDetails/AuthDetails";

function Navbar() {
        const [authUser, setAuthUser] = useState(null);
        const [ modalActive, setModalActive ] = useState(true)
        const [ isOpenSign, setIsOpenSign ] = useState()
        return (
        <nav className="nav">
          
                <h1 className="item ava">Megamovie</h1>
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