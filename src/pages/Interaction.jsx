import React, { useState, useEffect } from "react";
import Counter from '../components/Counter';
import NavBar from "../components/UI/navbar/NavBar";
import UpdateInput from '../components/UpdateInput';

const Interaction = () => {
 const [num, setNum] = useState (0);
 
 const counterNum = (count) => {
    setNum (count)
 }

 useEffect(() => {
    const NavBarItems  = document.querySelectorAll('.Navbar-item')
    const NavBarActive = document.querySelector(`.Navbar-item[href='/interaction']`)

    NavBarItems.forEach( item => {
        item.classList.remove('NavBar-item-active')
    })
    if (NavBarActive){
        NavBarActive.classList.add('NavBar-item-active')
     }
},[])


    return (
        <div className="interaction">
            <span >{ num }</span>
            <div className={"interaction-content"} >
                <Counter 
                        counterNum = { counterNum }
                        onChange = { counterNum } 
                        />
                <UpdateInput />
        </div>
        </div>
        
 
    )
}


export default Interaction;