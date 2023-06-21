import React, { useState, useEffect} from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase_config";
import { NavLink, Route } from "react-router-dom";
import "./Navbar.css"
import AuthDetails from "../components/AuthDetails/AuthDetails";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import {
  ChevronDownIcon
} from '@chakra-ui/icons'

function Navbar() {
        const [authUser, setAuthUser] = useState(null);
        const [ modalActive, setModalActive ] = useState(true)
        const [ isOpenSign, setIsOpenSign ] = useState()

        useEffect(() => {
                const listen = onAuthStateChanged(auth, (user) => {
                  if (user) {
                    setAuthUser(user);
                  } else {
                    setAuthUser(null);
                  }
                });
            
                return () => {
                  listen();
                };
        }, []);
            
        const userSignOut = () => {
                signOut(auth)
                  .then(() => {
                    console.log("sign out successful");
                })
                  .catch((error) => console.log(error));
        };

        return (
        <nav className="nav">
                
                <h1 className="item ava">Megamovie</h1>

                <div className="item"><NavLink to="/home" >Home</NavLink></div>
                { authUser ? (
                        <div className="item"><NavLink to="movies" >Films</NavLink></div>
                    ) : (
                        null
                    )
                }
                
               
                <AuthDetails/>
                
                {/* <Menu>
                  <MenuButton  rightIcon={<ChevronDownIcon />}>
                    Menu
                  </MenuButton>
                  <MenuList>
                    <MenuItem><div className="item"><NavLink to="/">Home</NavLink></div></MenuItem>
                    { authUser ? (
                      <MenuItem><div className="item"><NavLink to="movies" >Films</NavLink></div></MenuItem>
                      
                        ) : (
                          null
                        )
                    }
                    
                    <MenuItem><div className="item"><NavLink to="/SignIn">Sign in</NavLink></div></MenuItem>
                    <MenuItem><AuthDetails/></MenuItem>
                  </MenuList>
                </Menu> */}
                
        
        </nav>
      
    )
}

export default Navbar;