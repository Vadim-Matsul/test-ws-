import React from "react";
import NoPosts from "./NoPosts";
import PostItem from "./PostItem";
import Loader from "./UI/loader/Loader";


const PostsList = ({posts, defaultValue, loading}) => {
    return (
        <div>
             
            {posts.length
            ? <div>
                <h2 style={{margin: '70px 0 40px 0', color: 'white'}}>{ defaultValue }</h2>
                {posts.map( post => 
                    <PostItem 
                            post={ post }
                            key={ post.id }  /> 
                )}
               </div>
            : loading
              ? <Loader  />
              : <NoPosts />
            }
        </div>

    )
}


export default PostsList;