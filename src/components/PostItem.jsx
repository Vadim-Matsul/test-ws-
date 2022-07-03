import React from "react"

const PostItem = ({post}) => {

    return (
        <div className={"Post"} >
            <h2>Номер поста: { post.id }</h2>
            <div className={"Post-content"} >
                <h3>Заголовок:</h3>
                <span className={"Post-content-title"}>{post.title}</span>
            </div>
            <div className={"Post-content"} >
                <h3>Содержимое:</h3>
                <span>{post.body}</span>
            </div>
        </div>
    )
}


export default PostItem;