import { useState } from "react";

export default function Quiz(){
    //this is one possible way but not the optimal way 
    const [activeQuestion,setActiveQuestionIndex]=useState(0);
    const [userAnswers,setUserAnswers]=useState([]);
    return (
        <p>Currently active Question</p>
    );
}