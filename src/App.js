import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Room from './Room';
import ValueContext from './ValueContext';

function App() {
 // let [numb, setNumb]=useState(45);
  return (
    
  <ValueContext.Provider value={91}>
    <div>
      Hello world
      <Room></Room>
      </div>  
  </ValueContext.Provider>
  
  );
}

export default App;
