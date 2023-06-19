import React from "react";
import { NavLink } from "react-router-dom";
import "./HomePage.css"

function HomePage() {
    return (
        <div className="default_page">
            
            <ul>
                <li className="first_page">
                    <h1>Welcome to our Megamovie!</h1> 
                    <div className="welcome">
                        <p>register before you get access</p>
                        <NavLink to='/SignIn'>Log in accaunt</NavLink>
                    </div>
                    
                </li>
                <li className="second_page">
                    <p>Here you will find a huge selection of various films - from classic hits to modern blockbusters.</p>
                    <p> We are sure that everyone here will find something to their liking. Your pleasant pastime with us is our main goal. </p>
                </li>
                <li className="thrird_page">
                    <p>Have a nice time!</p>
                </li>
                <li className="forteen_page">
                   
                </li>
            </ul>
            
            
           
            
            
        </div>
    )
}

export default HomePage;