import React from "react";
import PostItem from "./PostItem";


const PostsList = ({posts, defaultValue}) => {
    return (
        <div>
            <h2 style={{margin: '70px 0 40px 0', color: 'white'}}>{ defaultValue }</h2>
            {posts.length
            ? posts.map( post => 
                <PostItem post={ post }
                           key={ post.id } /> 
              )
            : <h2 style={{margin: '70px 0 40px 30px', 
                          color: 'white',
                          }} >Посты не найдены...<br/>Перезагрузите страницу</h2>
            }
        </div>

    )
}


export default PostsList;