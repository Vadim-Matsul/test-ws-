import React, { useEffect, useState } from 'react';
import { PostService  } from '../API/PostService';
import { useFiltering } from '../hooks/useFiltering';
import { useFetching  } from '../hooks/useFetching';
import     Counter from '../components/Counter';
import UpdateInput from '../components/UpdateInput';
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
   
    



    return (
        <div className={"App"} >
            <div className={"interaction"}>
                <Counter />
                <UpdateInput />
            </div>
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
                        defaultValue = 'Список Постов н-1' />
            }
        </div >
    )
}


export default Posts;