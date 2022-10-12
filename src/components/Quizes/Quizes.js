import React from 'react';
import { useLoaderData } from "react-router-dom";
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const data = useLoaderData();
    const quizes = data.data;
    return (
        <div>
            <h2 className='mt-6 underline font-bold text-blue-900 text-3xl text-center'>Welcome to {quizes.name} Quiz</h2>
            {/* <h3 className='text-blue-900 font-bold text-2xl py-6 mt-6 text-center'>Score :  </h3> */}
            {quizes.questions.map((question) => (
            <Quiz 
            key={question.id} 
            question={question}
            ></Quiz>
      ))}
        </div>
    );
};

export default Quizes;