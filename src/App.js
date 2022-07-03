import React, { useEffect, useState } from 'react';
import { PostService } from './API/PostService';
import Counter from './components/Counter';
import UpdateInput from './components/UpdateInput';
import './styles/App.css';




function App() {
 const [posts, setPosts] = useState ([])
 const [limit, setLimit] = useState (10)
 const [page, setPage] = useState (1)


 const fetchPosts = async (limit, page) => {
  const response = await PostService.getPosts(limit, page)
    setPosts (response.data)
    console.log(posts);
 }
 

  useEffect ( () => {
    fetchPosts (limit, page)
 }, [limit, page])

  return (
    <div className={"App"} >
      
      <div className={"interaction"}>
        <Counter />
        <UpdateInput />
      </div>


    </div >
  );
}

export default App;
