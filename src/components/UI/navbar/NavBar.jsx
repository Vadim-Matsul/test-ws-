import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context";

const NavBar = () => {
const {auth, setAuth} = useContext (AppContext)
const [user, setUser] = useState (
    {name: ''})
 const logout = () => {
    localStorage.removeItem('auth') 
    setAuth (false)
 }

 useEffect (() => {
    
        setUser({...user, name: localStorage.getItem('userName')})
        console.log('username', user.name);
 }, [])

    return (
          <div className={'NavBar '}>
            <div className={'Container'}>
                <div className={'NavBar-Links'} >
                    <Link to={'/posts'} className={'Navbar-item'} > Посты </Link>
                    <Link to={'/interaction'} className={'Navbar-item'}> ⟲ </Link>
                    <Link to={'/about'} className={'Navbar-item'}>   ?   </Link>
                </div>
                <div className={'NavBar-Content'}>
                <h3>{ user.name }</h3>
                <button 
                        className={'NavBar-Btn-logout'}
                        onClick={logout}> Logout </button>
                </div>
            </div>
          </div>
        
    )
}


export default NavBar;