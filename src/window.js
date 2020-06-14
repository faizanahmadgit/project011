import React, { useContext } from 'react';
import './Room.css'
import ValueContext from './ValueContext';

function Window() {
    let value =useContext(ValueContext);
    console.log("value =",value);
  return (
      <div>
          window = {value[0]} ;
          <button onClick={()=>value[1](++value[0])} >increment</button>
      </div>
    
  );
}

export default Window;