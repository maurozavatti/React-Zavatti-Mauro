import React, {useState} from 'react';
import "./button.css";

function Button(props) {
    const [colorState, setColorState] = useState({backgroundColor: props.color});
   
    function handleClick(){
      setColorState({backgroundColor: "green"});
    }

  return (
    <button onClick={handleClick} style={colorState} className="btn bg-warning text-dark">
      {props.children}
    </button>
  );
}

export default Button;