import React, { useContext, useState } from "react"
import MyButton from "../button/MyButton"
import MyInput from "../input/MyInput"
import classes from '../popup/Popup.module.css'
import { Context } from "../../../context"



const Popup = ({visible, setVisible}) => {
 
 const {rp, createPost} = useContext ( Context )
 const [newPostInfo, setNewPostInfo] = useState (
    { title:'', body: ''}
 )
 const classArr = [classes.Popup]
 if (visible){
    classArr.push( classes.Active ) 
 }
 
 const createNewPost = () => {

    const newPost = {
        ...newPostInfo,
        id: Date.now()
    }
    createPost (newPost)
    console.log(newPost);
 }
 
    return (
        <div className={classArr.join(' ')}
             onClick = {() => setVisible( false )}>
            <div className={classes.PopupContent}
                  onClick={(event) => event.stopPropagation()}>
                <MyInput 
                      value = {newPostInfo.title} 
                      onChange = {el => setNewPostInfo({...newPostInfo, title: el.target.value})}
                      placeholder = 'Заголовок поста'/>
                <MyInput 
                      value = {newPostInfo.body} 
                      onChange = {el => setNewPostInfo({...newPostInfo, body: el.target.value})}
                      placeholder = 'Содержимое поста'/>
                <MyButton onClick = {createNewPost}> Create </MyButton>

            </div>
        </div>
    )
}

export default Popup;