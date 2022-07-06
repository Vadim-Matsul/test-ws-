import React, { useState, useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import Popup from "../components/UI/popup/Popup";
import { AppContext } from "../context";

const AuthPage = () => {
 
 const {auth, setAuth} = useContext ( AppContext )
 const [userInfo, setUserInfo] = useState(
    {name: '', password: '', error: ''}
 )
 const config = {
    error_p_l: 'Пустые поля'
 }
 const blockError = document.querySelector('.AuthPage-Error')


const logSystem = (event) => {
    event.preventDefault()
    if (userInfo.name.length && userInfo.password.length){
        if (userInfo.name.length <= 12  ){
            localStorage.setItem('auth', 'true')
            localStorage.setItem('userName', userInfo.name)
            setAuth (true)
        }
    } else {
        setUserInfo ({...userInfo, error: config.error_p_l})
        if(blockError){
            blockError.classList.toggle('AuthPage-Error-Anim')
        }
        
       } 
   
}
    return (
        <div>
          <div className={'Log'}>
            <div className={'AuthPage-Error'}>
                <span>{userInfo.error}</span>
            </div>
            <div>
                <form 
                    className={"Log-Page"}
                    onSubmit ={logSystem }>
                <MyInput  
                    value={userInfo.name}
                    onChange={el => setUserInfo({...userInfo, name: el.target.value})}
                    placeholder='Логин'
                     />
                <MyInput  
                    value={userInfo.password}
                    onChange={el => setUserInfo({...userInfo, password: el.target.value})}
                    placeholder='Пароль'
                    type='password'
                    />
                <MyButton onClick={logSystem}> Войти </MyButton>
                </form>
            </div>
          </div>
        </div>
    )
}


export default AuthPage;