import React from "react";
import PostItem from "./PostItem";


const PostsList = ({posts, defaultValue}) => {
    return (
        <div>
            <h2 style={{margin: '70px 0 40px 0', color: 'white'}}>{ defaultValue }</h2>
            {   posts.map( post => 
                            <PostItem post={ post }
                                       key={ post.id } />
            )}
        </div>

    )
}


export default PostsList;