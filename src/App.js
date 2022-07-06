import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './context';
import AppRouter from './components/AppRouter';
import Interaction from './pages/Interaction';
import NavBar from './components/UI/navbar/NavBar';
import './styles/App.css';


function App() {
  const [ auth, setAuth] = useState (false)


  return (
  <AppContext.Provider 
            value={{
              auth, 
              setAuth
            }}>
    <div className={'App-main'}>
      <BrowserRouter >
        <AppRouter />
      </BrowserRouter>
    </div>
   </AppContext.Provider>
   
  )
}

export default App;
