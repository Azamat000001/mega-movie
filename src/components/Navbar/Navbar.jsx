import React, { useState} from "react";
import { NavLink, Route } from "react-router-dom";
import "./Navbar.css"
import AuthDetails from "../AuthDetails/AuthDetails";
import Modal from "../Modal/Modal";
import SignIn from "../Auth/SignIn/SignIn";
import SignUp from "../Auth/SignUp/SignUp";

function Navbar() {
        const [authUser, setAuthUser] = useState(null);
        const [ modalActive, setModalActive ] = useState(true)
        const [ isOpenSign, setIsOpenSign ] = useState()
        return (
        <nav className="nav">
          
                <h1 className="item ava">Mega-Team's Movie</h1>
                <div className="item"><NavLink to="/home" >Home</NavLink></div>
                <div className="item"><NavLink to="movies" >Films</NavLink></div>
                
                <div className="item">
                        
                        <NavLink to="/SignIn"><button className={isOpenSign} onClick={() => setModalActive(true)}>Sign in</button></NavLink>
                        
                        
                </div>

                <Modal active={modalActive} setActive={setModalActive}>
                        <SignIn/>
                        <SignUp/>     
                </Modal>
                <AuthDetails/>
        
        </nav>
    )
}

export default Navbar;