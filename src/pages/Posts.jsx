import React, { useEffect, useRef, useState } from 'react';
import { PostService  } from '../API/PostService';
import { useFiltering } from '../hooks/useFiltering';
import { useFetching  } from '../hooks/useFetching';
import {     Context  } from '../context';
import { getTotalPage } from '../utils/TotalPage';
import   PostsList from '../components/PostsList';
import  PostFilter from '../components/PostFilter';
import      Loader from '../components/UI/loader/Loader';
import NavBar from '../components/UI/navbar/NavBar';

const Posts = () => {

 const [  posts, setPosts  ] = useState ([])
 const [  limit, setLimit  ] = useState (5)
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

    useEffect (() => {
        if (loading) return
        if (postsObserver.current) postsObserver.current.disconnect ()

        const callback = (entries, observer) => {
          if ( entries[0].isIntersecting && page < totalPages ) {
            setPage ( page + 1 );
          }
        }
     postsObserver.current = new IntersectionObserver ( callback, {
      rootMargin: '1500px'
     }
   
     )
     postsObserver.current.observe( blockObserver.current )
    },[loading])

    useEffect(() => {
      const NavBarItems  = document.querySelectorAll('.Navbar-item')
      const NavBarActive = document.querySelector(`.Navbar-item[href='/posts']`)
      
      NavBarItems.forEach( item => item.classList.remove('NavBar-item-active'))
      if (NavBarActive){
          NavBarActive.classList.add('NavBar-item-active')
       }
    },[])

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
                        createPost, 
                        limit,
                        setLimit
                     }}>
            <div className={"App"} >
                <NavBar />
                <PostFilter 
                        filter={ filter }
                        setFilter = { setFilter }  
                        posts = {posts}        
                        />
                
                { error &&
                    <h2 className={'Error'} >Ошибка: {error} </h2>
                }
                 <PostsList 
                        posts = { sortedAndFilteredPosts }
                        defaultValue = 'Список Постов н-1'  
                        loading = {loading}
                        />
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