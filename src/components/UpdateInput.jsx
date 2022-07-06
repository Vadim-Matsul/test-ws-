import React, { useEffect, useState } from "react";
import MyInput from './UI/input/MyInput'


const UpdateInput = () => {

const [info, setInfo] = useState ('')

    useEffect (() => {
        const updateInput = document.querySelector('#updateInput')

        if (info){
            updateInput.classList.add('MyInp-form-active')
        } else {
            updateInput.classList.remove('MyInp-form-active')
        }
    }, [info])
    console.log(info);
    return (
        <div className={"MyInp-form"}>
            <div className={"MyInp-form-content"}>
                <h3 id='updateInput'>{ info }</h3>
            </div>
            <MyInput 
                    placeholder='Hello, React!'
                    value={ info }
                    onChange={ el => setInfo(el.target.value) } />
        </div>
    )
}


export default UpdateInput;