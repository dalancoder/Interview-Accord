import React from 'react';
import {Container} from "react-bootstrap";
import Questions from './Questions';
import questions from "../helper/data";


const InterviewAccord = () => {
  return (
    <Container style={{width:"100%"}}>
    {

        questions.map((data)=>(
             <Questions key={data.id} data = {data}/>
        ))
    }
       
    </Container>
  )
}

export default InterviewAccord