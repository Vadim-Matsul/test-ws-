import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";


const PostItem = ({post}) => {

 const navigate = useNavigate ()

 const RoutePage = (id) => {
    navigate (`/posts/${id}`)
    console.log('works');
 }
    return (
        <div className={"Post"} >
            <h2>Номер поста: { post.id }</h2>
            <div>
                <h3>Заголовок:</h3>
                <span className={"Post-content-title"}>{post.title}</span>
            </div>
            <div>
                <h3>Содержимое:</h3>
                <span>{post.body}</span>
            </div>
            <div className={'Post-btns'}>
            <MyButton onClick = {() => RoutePage(post.id) }> Open   </MyButton>
            <MyButton > Delete </MyButton>
            </div>
        </div>
    )
}


export default PostItem;