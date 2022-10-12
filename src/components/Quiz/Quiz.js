import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EyeIcon } from '@heroicons/react/24/solid'
import Options from '../Options/Options';

const Quiz = ({question}) => {

    const correctAnswer = question.correctAnswer;
    const qId = question.id;
    const qNum = qId.slice(23);
    const questionSlice = (question.question).slice(3, (question.question).length - 4);

    const toastAnswer = () => {
        toast.info(`Correct Answer: ${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose:2500
        });
    };

    const handleCorrectWrong = (options) => {
        if (options === correctAnswer) {
            toast.success('Answer is Correct', {
                position: toast.POSITION.TOP_CENTER,
                autoClose:2500
            });
            
        }
        else{
            toast.error('Answer is Wrong', {
                position: toast.POSITION.TOP_CENTER,
                autoClose:2500
            });
        }
    };

    return (
        <div className='bg-sky-100 border border-4 rounded rounded-6 my-10 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl align-middle justify-between'>
        <div className='pb-2 mx-6'>
           <div>
            <p className='my-4 w-full flex flex-col sm:flex-col md:flex-row'>
                Q{qNum} : {questionSlice}
                    <button className='mx-2' onClick={toastAnswer}>
                    <EyeIcon className="text-center h-6 w-6 text-blue-500"/>
                    </button>
           </p>
           </div>
           <div className='bg-sky-100 w-full grid grid-cols-1 sm:grid-cols-6 md:grid-cols-1'>
            {question.options.map((options) => (
                <Options 
                handleCorrectWrong={handleCorrectWrong}
                key={options}
                options={options}
                ></Options>
            ))}
           </div>
            </div>
           <ToastContainer/>
        </div>
    );
};

export default Quiz;