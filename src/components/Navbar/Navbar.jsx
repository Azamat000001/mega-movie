import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    
        return (
        <nav className="nav">
          
            
                <div className="item"><NavLink to="/home" >Home</NavLink></div>
                <div className="item"><NavLink to="movies" >Films</NavLink></div>
           
        
        
        </nav>
    )
}

export default Navbar;