import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context";

const NavBar = () => {
const {auth, setAuth} = useContext (AppContext)

 const logout = () => {
    localStorage.removeItem('auth') 
    setAuth (false)
 }
 
    return (
        <div className={'NavBar'}>
            <Link to={'/posts'} className={'Navbar-item'} > Посты </Link>
            <Link to={'/interaction'} className={'Navbar-item'}> ⟲ </Link>
            <Link to={'/about'} className={'Navbar-item'}>   ?   </Link>
            <button onClick={logout}>Logout</button>
        </div>
    )
}


export default NavBar;