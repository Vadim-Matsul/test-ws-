import React, { useEffect, useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import Popup from "./UI/popup/Popup";
import MySelect from "./UI/select/MySelect";


const PostFilter = ({filter, setFilter, posts}) => {

 const [visible, setVisible] = useState (false)
 useEffect (() => {
  const createPostBtn = document.querySelector('.CrtPost-btn')
   if (createPostBtn){
    if (posts.length == 0){
      createPostBtn.classList.add('CrtPost-btn-active')
    } else {
      createPostBtn.classList.remove('CrtPost-btn-active')
    }
   }
  
 }, [posts])
 


  

    return (
        <div className={'Filter-form'}>
            <MySelect 
                    onChange = { (el) => setFilter({...filter, sort: el}) }
                    value = { filter.sort }
                    defaultValue = 'Сортировать'
                    options = {[
                      {value: 'title', name: 'По заголовку'  },
                      {value: 'body',  name: 'По содержимому'}
                    ]} 
                    />
            <MyInput 
                     placeholder = 'Поиск по заголовку ...'
                     onChange = { (el) => setFilter({...filter, query: el.target.value.toLowerCase()}) }
                     value = { filter.query }
                    />
            <button 
                 className={"CrtPost-btn"}
                 onClick = { () => setVisible(true) }> Создать пост </button>
            <Popup 
                 visible = { visible }
                 setVisible = { setVisible }
                 />
        </div>
    )
}


export default PostFilter;