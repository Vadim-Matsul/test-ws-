import React from "react";
import PostItem from "./PostItem";
import Loader from "./UI/loader/Loader";


const PostsList = ({posts, defaultValue, loading}) => {
    return (
        <div>
            <h2 style={{margin: '70px 0 40px 0', color: 'white'}}>{ defaultValue }</h2>
            {posts.length
            ? posts.map( post => 
                <PostItem 
                        post={ post }
                        key={ post.id }  /> 
              )
            : loading
              ? <Loader />
              : <h2 style={{margin: '70px 0 40px 30px', 
                          color: 'white',
                          }} >Посты не найдены...</h2>
            }
        </div>

    )
}


export default PostsList;