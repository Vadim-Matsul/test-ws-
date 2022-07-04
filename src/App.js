import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter';
import Posts from './pages/Posts';
import './styles/App.css';





function App() {




  return (
    <BrowserRouter >
     <AppRouter />
    </BrowserRouter>
  )
}

export default App;
