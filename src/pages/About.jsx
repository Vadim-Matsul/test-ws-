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
            <div className={'AboutAuth-Content'}>
                <span>Hello, World!</span>
                <span>  Меня зовут Вадим и мне 19 лет <br/> Это далеко не лучший пример хорошего сайта, 
                здесь я использовал те принципы React, которые знаю на данный момент. При создании я опирался на 
                техническую часть, а не на стилизацию. <br/><br/> Как я люблю говорить, когда подхожу к логическому чекпоинту в моей работе,
                Дальше - Больше!
                </span>
            </div>
        </div>
    )
}


export default About;