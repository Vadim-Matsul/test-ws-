import React, { useEffect, useRef, useState } from 'react';
import { PostService  } from '../API/PostService';
import { useFiltering } from '../hooks/useFiltering';
import { useFetching  } from '../hooks/useFetching';
import {     Context  } from '../context';
import { getTotalPage } from '../utils/TotalPage';
import   PostsList from '../components/PostsList';
import  PostFilter from '../components/PostFilter';
import      Loader from '../components/UI/loader/Loader';


const Posts = () => {

 const [  posts, setPosts  ] = useState ([])
 const [  limit, setLimit  ] = useState (10)
 const [   page, setPage   ] = useState (1)
 const [ totalCount, setTotalCount ] = useState ()
 const [ filter, setFilter ] = useState ( {sort: '', query: ''} )
 const blockObserver = useRef ()
 const postsObserver = useRef ()

 const [fetching, loading, error] = useFetching ( async (limit, page) => {
       const response = await PostService.getPosts(limit, page)
       setTotalCount (response.headers['x-total-count']); 
       setPosts ([...posts, ...response.data])
        
 })

 const sortedAndFilteredPosts = useFiltering (posts, filter.sort, filter.query)

     useEffect ( () => {
       fetching (limit, page)
    }, [limit, page])
 
 const totalPages = getTotalPage ( totalCount, limit )
 console.log(totalPages);
    useEffect (() => {
        if (loading) return
        if (postsObserver.current) postsObserver.current.disconnect ()

        const callback = (entries, observer) => {
          if ( entries[0].isIntersecting && page < totalPages ) {
            setPage ( page + 1 );
          }
        }
     postsObserver.current = new IntersectionObserver ( callback )
     postsObserver.current.observe( blockObserver.current )
    },[loading])

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
                 <PostsList 
                        posts = { sortedAndFilteredPosts }
                        defaultValue = 'Список Постов н-1'  
                        loading = {loading}/>
                { loading &&
                  <Loader />
                }
                
                <div 
                    style={ { height: 50} }
                    ref = { blockObserver } ></div>
            </div >
        </Context.Provider>
    )
}


export default Posts;