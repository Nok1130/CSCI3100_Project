import React,{useState,useEffect} from 'react'
import {Button} from 'antd';

export const SuspendBtn = ({ SuspendState,onClick }) => {
    const [text, setText] = useState(SuspendState ? "Suspend" : "Unsuspend");
    const [style, setStyle] = useState(SuspendState ? "danger" : "unsuspend");
  
    function handleClick() {
       onClick();
        console.log(SuspendState);
  
      if (SuspendState) {
        setText("Unsuspend");
        setStyle(SuspendState);
  }else{
      setText("Suspend");
      setStyle(SuspendState);
  }
    }
  
    return (
        <Button style={{ color: 'white', backgroundColor : text === 'Suspend' ? '#ff4f4f' : '#4CAF50' }} onClick={handleClick}>
            {text}
        </Button>

    );
  };
