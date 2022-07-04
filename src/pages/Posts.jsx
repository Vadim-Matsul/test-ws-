import React, { useEffect, useState } from 'react';
import { PostService  } from '../API/PostService';
import { useFiltering } from '../hooks/useFiltering';
import { useFetching  } from '../hooks/useFetching';
import {     Context  } from '../context';
import   PostsList from '../components/PostsList';
import  PostFilter from '../components/PostFilter';
import      Loader from '../components/UI/loader/Loader';


const Posts = () => {

 const [  posts, setPosts  ] = useState ([])
 const [  limit, setLimit  ] = useState (10)
 const [   page, setPage   ] = useState (1)
 const [ filter, setFilter ] = useState ( {sort: '', query: ''} )
 
   
 const [fetching, loading, error] = useFetching ( async (limit, page) => {
       const response = await PostService.getPosts(limit, page)
         setPosts (response.data)
 })

 const sortedAndFilteredPosts = useFiltering (posts, filter.sort, filter.query)

     useEffect ( () => {
       fetching (limit, page)
    }, [limit, page])
 
 const removePost = (sortId) => {
    setPosts([...posts].filter( post => post.id !== sortId))
 }
const createPost = (newPost) => {
    setPosts([newPost, ...posts ])
}    



    return (
        <Context.Provider
                    value={{
                        removePost,
                        createPost
                     }}>
            <div className={"App"} >
                <PostFilter 
                        filter={ filter }
                        setFilter = { setFilter }          />
                { error &&
                    <h2 className={'Error'} >Ошибка: {error} </h2>
                }
                {loading
                ? <Loader />
                : <PostsList 
                        posts = { sortedAndFilteredPosts }
                        defaultValue = 'Список Постов н-1'  />
                }
            </div >
        </Context.Provider>
    )
}


export default Posts;