import React, { useEffect } from "react";
import NavBar from "../components/UI/navbar/NavBar";


const About = () => {

    
useEffect(() => {
    const NavBarItems  = document.querySelectorAll('.Navbar-item')
    const NavBarActive = document.querySelector(`.Navbar-item[href='/about']`)

    NavBarItems.forEach( item => item.classList.remove('NavBar-item-active'))
    if (NavBarActive){
        NavBarActive.classList.add('NavBar-item-active')
     }
},[])

    return (
        <div>
            <NavBar />
        </div>
    )
}


export default About;