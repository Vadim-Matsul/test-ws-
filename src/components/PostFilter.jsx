import React from "react";
import MySelect from "./UI/select/MySelect";


const PostFilter = ({filter, setFilter}) => {

 const onChange = (sort) => {
   setFilter ({...filter, sort: sort})
 }

    return (
        <div className={'Filter-form'}>
            <MySelect 
                    onChange = { onChange }
                    sort = { filter.sort }
                    defaultValue = 'Сортировать'
                    options = {[
                      {value: 'title', name: 'По заголовку'  },
                      {value: 'body',  name: 'По содержимому'}
                     ]} />
        </div>
    )
}


export default PostFilter;