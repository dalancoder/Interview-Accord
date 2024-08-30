import React, { useState } from 'react'
import {arrowdown} from "../helper/icons";
import {arrowup} from "../helper/icons"


const Questions = ({data}) => {
    const [show, setShow] = useState(false)
    const handleDown = (index)=> {
        setShow(true)
    }
    const handleUp = (index)=>{
        setShow(false)
    }
  return (
  
    
       
          <div className='text-box'>
            <h3 className='question-box'>
                {data.question} 
                {show? <span onClick={handleUp}>{arrowup}</span>: <span onClick={handleDown}>{arrowdown}</span> 
                }
                
            </h3>
            {
                show? <h6 className='answer-box'>{data.answer}</h6>: null
            }
          </div>
        )
          
   
       
    
  
    
 
  
}

export default Questions