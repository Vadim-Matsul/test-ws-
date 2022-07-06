import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

    return (
        <div className={'NavBar'}>
            <Link to={'/posts'} className={'Navbar-item'} > Посты </Link>
            <Link to={'/interaction'} className={'Navbar-item'}> ⟲ </Link>
            <Link to={'/about'} className={'Navbar-item'}>   ?   </Link>
        </div>
    )
}


export default NavBar;