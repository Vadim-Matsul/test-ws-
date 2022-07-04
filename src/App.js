import React, { useEffect, useState } from 'react';
import { PostService  } from './API/PostService';
import { useFiltering } from './hooks/useFiltering'
import     Counter from './components/Counter';
import UpdateInput from './components/UpdateInput';
import   PostsList from './components/PostsList';
import  PostFilter from './components/PostFilter';
import './styles/App.css';





function App() {
 const [  posts, setPosts  ] = useState ([])
 const [  limit, setLimit  ] = useState (10)
 const [   page, setPage   ] = useState (1)
 const [ filter, setFilter ] = useState ( {sort: '', query: ''} )


 const fetchPosts = async (limit, page) => {
  const response = await PostService.getPosts(limit, page)
    setPosts (response.data)
 }
 
  useEffect ( () => {
    fetchPosts (limit, page)
 }, [limit, page])

 const sortedAndFilteredPosts = useFiltering (posts, filter.sort, filter.query)



  return (
    <div className={"App"} >
      
      <div className={"interaction"}>
        <Counter />
        <UpdateInput />
      </div>
      <PostFilter 
                filter={ filter }
                setFilter = { setFilter }          />
      <PostsList 
                posts = { sortedAndFilteredPosts }
                defaultValue = 'Список Постов н-1' />
    </div >
  );
}

export default App;
