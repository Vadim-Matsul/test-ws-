import React from "react";
import { Link } from 'react-router-dom';

const NavBarAuth = () => {

    return (
       <div className={'NavBar '}>
         <div className={'Container'}>
             <div className={'NavBar-AuthLinks'} >
                <Link to={'/about'} className={'Navbar-item'} >      ?      </Link>
                <Link to={'/login'} className={'Navbar-item'} > Авторизация </Link>
             </div>
         </div>
       </div>
    )
}


export default NavBarAuth;