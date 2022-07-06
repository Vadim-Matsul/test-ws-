import React, {useEffect, useState} from "react";
import MyButton from "./UI/button/MyButton";

const Counter = ({counterNum}) => {

const [count, setCount] = useState (0)

useEffect ( () => {
 const zeroBlock  = document.querySelector('#zeroBlock' )
 const countBlock = document.querySelector('#countBlock')

    if ( count <= 0 || count > 999){
        setCount(0)
            zeroBlock.classList.add('ZeroBlock')
            countBlock.classList.add('ZeroBlock')
     } else {
            zeroBlock.classList.remove('ZeroBlock')
            countBlock.classList.remove('ZeroBlock')
     }
    counterNum (count)
}, [count])

    return (
         <div className={ 'CounterBlock' }>
            <h2 style={{ fontSize: '28px', marginTop: '-30px' }} id='countBlock'>{ count }</h2>
            <div className={ 'CounterBlock-Btns' }>
                <MyButton onClick={ () => setCount( count + 1 )} >  Like   </MyButton>
                <MyButton onClick={ () => setCount( count - 1 )}  id='zeroBlock' > DisLike </MyButton>
            </div>
         </div>      
    )
}


export default Counter;