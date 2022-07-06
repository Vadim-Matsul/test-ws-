import React, { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import Popup from "../components/UI/popup/Popup";
import { AppContext } from "../context";

const AuthPage = () => {
const {auth, setAuth} = useContext ( AppContext )


const logSystem = () => {
    localStorage.setItem('auth', 'true')
    setAuth (true)
}

    return (
        <div>
          <div className={'Log'}>
            <div className={"Log-Page"}>
               <MyInput  
                    placeholder='Логин'
                     />
                <MyInput  
                    placeholder='Пароль'
                    />
                <MyButton 
                     onClick={logSystem}
                        > Войти </MyButton>
            </div>
          </div>
        </div>
    )
}


export default AuthPage;