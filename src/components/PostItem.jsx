import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";
import { Context } from "../context";




const PostItem = ({post, number}) => {

 const navigate = useNavigate ()
 const {removePost} = useContext ( Context )


 const RoutePage = (id) => {
    navigate (`/posts/${id}`)
 }
    return (
        <div className={"Post"} >
            <h2>Номер поста: { number }</h2>
            <div>
                <h3>Заголовок:</h3>
                <span className={"Post-content-title"}>{post.title}</span>
            </div>
            <div>
                <h3>Содержимое:</h3>
                <span>{post.body}</span>
            </div>
            <div className={'Post-btns'}>
            {post.id > 101
            ? <span style={{background: 'none'}}></span>
            : <MyButton onClick = { () => RoutePage (post.id) } > Open   </MyButton>
            }
            <MyButton onClick = { () => removePost(post.id) } > Delete </MyButton>
            </div>
        </div>
    )
}


export default PostItem;