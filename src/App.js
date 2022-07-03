import React, { useEffect, useState } from 'react';
import { PostService } from './API/PostService';
import Counter from './components/Counter';
import UpdateInput from './components/UpdateInput';
import PostsList from './components/PostsList';
import './styles/App.css';
import { useFiltering } from './hooks/useFiltering'
import PostFilter from './components/PostFilter';



function App() {
 const [posts, setPosts] = useState ([])
 const [limit, setLimit] = useState (10)
 const [page, setPage] = useState (1)
 const [filter, setFilter] = useState (
  {sort: ''})

 const fetchPosts = async (limit, page) => {
  const response = await PostService.getPosts(limit, page)
    setPosts (response.data)
    console.log(posts);
 }
 

  useEffect ( () => {
    fetchPosts (limit, page)
 }, [limit, page])

  
 
  const sortedPosts = useFiltering (posts, filter.sort)

  return (
    <div className={"App"} >
      
      <div className={"interaction"}>
        <Counter />
        <UpdateInput />
      </div>
      <PostFilter 
                  filter={ filter }
                  setFilter = { setFilter }/>
      <PostsList 
                posts = {sortedPosts}
                defaultValue = 'Список Постов н-1' />

    </div >
  );
}

export default App;
