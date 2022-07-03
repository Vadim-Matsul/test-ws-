import React, { useState } from "react";
import MyInput from './UI/input/MyInput'

const UpdateInput = () => {

const [info, setInfo] = useState ('')
  
    return (
        <div className={"MyInp-form"}>
            <div className={"MyInp-form-content"}>
                <h3>{ info }</h3>
            </div>
            <MyInput 
                    placeholder='Введите текст'
                    value={ info }
                    onChange={ el => setInfo(el.target.value) }/>
        </div>
    )
}


export default UpdateInput;