


export const AuthError = ({...config}, message) => {
    const blockError = document.querySelector('.AuthPage-Error')

        if ( blockError.classList.contains('AuthPage-Error-Anim') ){
               blockError.classList.remove('AuthPage-Error-Anim')
                setTimeout ( () => {
                    blockError.classList.add('AuthPage-Error-Anim')
                }, 0.0001 )
        } else {
              blockError.classList.add('AuthPage-Error-Anim')
        }

      config.setUserInfo ({...config.userInfo, error: message})
  config.setAuth( false )
}

