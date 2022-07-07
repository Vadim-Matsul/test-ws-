import React, { useState, useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import Popup from "../components/UI/popup/Popup";
import { AppContext } from "../context";
import { AuthError } from "../utils/AuthError";

const AuthPage = () => {
 
 const {auth, setAuth} = useContext ( AppContext )
 const [userInfo, setUserInfo] = useState(
    {name: '', password: '', error: ''}
 )
 const UserName = userInfo.name.length
 const UserPass = userInfo.password.length

 const config = {
          error_p_l: 'Введите логин и пароль',
            error_l: 'Введите логин',
            error_p: 'Введите пароль',
      error_l_short: 'Короткий логин',
      error_p_short: 'Короткий пароль',
       error_l_long: 'Длинный логин',
       error_p_long: 'Длинный пароль',
      err_l_p_short: 'Короткий логин и пароль',
       err_l_p_long: 'Длинный логин и пароль',
 err_l_long_p_short: 'Длинный логин и короткий пароль',
 err_p_long_l_short: 'Длинный пароль и короткий логин',
 
     userData: {
        setAuth: setAuth,
        userInfo: userInfo,
        setUserInfo: setUserInfo
    }
 }



 const logSystem = (event) => {
    event.preventDefault()

    if (UserName || UserPass){
      if ( UserName > 3 
           && UserName <= 12 
           &&  UserPass > 8 
           && UserPass <= 30 ){
            localStorage.setItem('auth', 'true')
            localStorage.setItem('userName', userInfo.name)
            localStorage.setItem('userPassword', userInfo.password)
            setAuth (true)
        } 
      if ( ( UserPass <= 8 || UserPass > 30 ) 
             && UserName > 3 
             && UserName <= 12 
             && UserPass !== 0 ){
                if (UserPass <= 8){ AuthError (config.userData, config.error_p_short) }
                if (UserPass > 30){ AuthError (config.userData, config.error_p_long ) } 
      }
      if ( ( UserName <= 3 || UserName > 12 ) 
             && UserPass > 8 
             && UserPass <= 30 
             && UserName !==0 ){
                if (UserName <= 3){ AuthError (config.userData, config.error_l_short) }
                if (UserName > 12){ AuthError (config.userData, config.error_l_long ) }
      }
      if ( UserName > 12 
           && UserPass > 30 ) {
        AuthError (config.userData, config.err_l_p_long)
      }
      if ( UserName <= 3 
           && UserPass <= 8 
           && UserName !== 0 
           && UserPass !==0 ) {
        AuthError (config.userData, config.err_l_p_short)
      }
      if ( UserName > 3 
           && UserName <= 12 
           && !UserPass ){
        AuthError (config.userData, config.error_p)
      }
      if ( ( UserName <= 3 || UserName > 12 ) 
             && !UserPass  ){
                if (UserName <= 3){ AuthError (config.userData, config.error_l_short) }
                if (UserName > 12){ AuthError (config.userData, config.error_l_long ) }
      }
      if ( UserPass > 8 
           && UserPass <= 30 
           && !UserName ){
        AuthError (config.userData, config.error_l)
      }
      if ( ( UserPass <= 8 || UserPass > 30 ) 
             && !UserName ){
                if (UserPass <= 8){ AuthError (config.userData, config.error_p_short) }
                if (UserPass > 30){ AuthError (config.userData, config.error_p_long ) }
      }
      if ( UserPass > 30 
           && UserName <= 3 
           && UserName !==0 ){
        AuthError (config.userData, config.err_p_long_l_short)
      }
      if ( UserName > 12 
           && UserPass <= 8 
           && UserPass !==0 ){
        AuthError (config.userData, config.err_l_long_p_short)
      }
    } else {
        AuthError (config.userData, config.error_p_l)
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
                <MyButton > Войти </MyButton>
                </form>
            </div>
          </div>
        </div>
    )
}


export default AuthPage;