import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const PostFilter = ({filter, setFilter}) => {

//  const onChange = (sort) => {
//    setFilter ({...filter, sort: sort})
//  }

    return (
        <div className={'Filter-form'}>
            <MySelect 
                    onChange = { (el) => setFilter({...filter, sort: el}) }
                    value = { filter.sort }
                    defaultValue = 'Сортировать'
                    options = {[
                      {value: 'title', name: 'По заголовку'  },
                      {value: 'body',  name: 'По содержимому'}
                     ]} />
            <MyInput 
                     placeholder = 'Поиск по заголовку ...'
                     onChange = { (el) => setFilter({...filter, query: el.target.value.toLowerCase()}) }
                     value = { filter.query }
                    />
        </div>
    )
}


export default PostFilter;