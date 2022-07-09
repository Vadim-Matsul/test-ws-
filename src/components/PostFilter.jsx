import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context";
import    MyButton from "./UI/button/MyButton";
import     MyInput from "./UI/input/MyInput";
import       Popup from "./UI/popup/Popup";
import    MySelect from "./UI/select/MySelect";


const PostFilter = ({filter, setFilter, posts}) => {

 const [visible, setVisible] = useState (false)
 const [postsCount, setPostsCount] = useState (10)
 const { limit, setLimit } = useContext ( Context )
console.log(limit);

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
                    onChange = { el => setFilter({...filter, sort: el}) }
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
            <MySelect 
                      onChange = { el => setLimit( el )}
                      value={limit} 
                      defaultValue = 'Сколько постов подгружать?'
                      options = {[
                        {value: 5, name: 5},
                        {value: 10, name: 10},
                        {value: 25, name: 25},
                        {value: -1, name: 'Подгрузить всё'}
                      ]}
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