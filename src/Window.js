import React, { useContext } from 'react';
import './Room.css'
import ValueContext from './ValueContext';

function Window() {
    let value =useContext(ValueContext);
  return (
      <div>
          window = {value} ;
      </div>
    
  );
}

export default Window;