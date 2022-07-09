import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NoPosts from "./NoPosts";
import PostItem from "./PostItem";
import Loader from "./UI/loader/Loader";

const PostsList = ({posts, defaultValue, loading}) => {
    return (
        
          <div>
             
            {posts.length
            ? <div>
                <h2 style={{margin: '70px 0 40px 0', color: 'white'}}>{ defaultValue }</h2>
                <TransitionGroup >
                    {posts.map( ( post, index )  =>  
                        <CSSTransition 
                                 key={ post.id }
                                 timeout={ 500 }
                                 classNames="post" >
                            <PostItem 
                                        post = { post } 
                                        number = { index + 1 } /> 
                        </CSSTransition>
                    )}
                </TransitionGroup>
               </div>
            : loading
              ? <Loader  />
              : <NoPosts />
            }
          </div>
    )
}


export default PostsList;