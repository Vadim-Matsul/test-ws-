import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Interaction from './pages/Interaction';
import NavBar from './components/UI/navbar/NavBar';
import './styles/App.css';


function App() {

  return (
   <div className={'App-main'}>
     <BrowserRouter >
       <NavBar />
       <AppRouter />
     </BrowserRouter>
   </div>
   
  )
}

export default App;
