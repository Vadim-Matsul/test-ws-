import React, { useState } from 'react';
import Counter from './components/Counter';
import UpdateInput from './components/UpdateInput';
import './styles/App.css';




function App() {




  return (
    <div className={"App"}>
      
      <div className='interaction'>
        <Counter />
        <UpdateInput />
      </div>
    </div>
  );
}

export default App;
