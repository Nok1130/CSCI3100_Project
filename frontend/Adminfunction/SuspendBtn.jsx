import React,{useState,useEffect} from 'react'
import {Button} from 'antd';

export const SuspendBtn = ({ SuspendState,onClick }) => {
    const [text, setText] = useState(SuspendState ? "Unsuspend" : "suspend");
    const [style, setStyle] = useState(SuspendState ? '#4CAF50' : '#ff4f4f');
    
    function handleClick() {
       onClick();
        console.log(!SuspendState);
  
      if (!SuspendState) {
        setText("Unsuspend");
        setStyle('#4CAF50');
        }else{
        setText("Suspend");
        setStyle('#ff4f4f')
    
        }
   
    }
  
    return (
        <Button className='suspendBTN' style={{ color: 'white', backgroundColor:`${style}` }} onClick={handleClick}> 
            {text}
        </Button>

    );
  };
