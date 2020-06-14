import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Room from './Room';
import ValueContext from './ValueContext';

function App() {
  let val =useState(45);
  return (
    
  <ValueContext.Provider value={val}>
    <div>
      Hello world
      <Room></Room>
      </div>  
  </ValueContext.Provider>
  
  );
}

export default App;
