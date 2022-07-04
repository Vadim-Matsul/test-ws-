import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
import Popup from "./UI/popup/Popup";
import MySelect from "./UI/select/MySelect";


const PostFilter = ({filter, setFilter}) => {

 const [visible, setVisible] = useState (false)

 
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