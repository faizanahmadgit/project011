import React, {useState} from 'react';
import './Room.css'

function Room() {
    
    //const state = useState(true);
    //console.log("state =",state);
    let [isLit, setLit]= useState(false);
    let [age, setAge] = useState(25);

    const UpdateLit= ()=>  setLit(!isLit);
    //const IncAge=  ()=> setAge(++age);
    //()=> setAge(++age);

  return (
    <div className= {`room ${isLit ? 'lit' : 'dark'}`} >
        This is room. light is : {isLit? 'Lit': 'Dark'}
        <br />
        Age = {age+'c' }
        <br />
        <button onClick={()=> setAge(++age)} >plus age </button>
        <button onClick={()=> setAge(--age)} >less age </button>
        <br />
        <button onClick={UpdateLit} >Toggle Button</button>
    </div>
  );
}

export default Room;
