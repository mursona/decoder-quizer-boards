import React from 'react';

const Options = ({options, handleCorrectWrong}) => {
    return (
        <div>
            <div className={'bg-slate-200 border border-spacing-1 border-blue-600 rounded-md mx-2 my-2 px-4 py-2 font-semibold text-blue-500 text-center'}>
            <button onClick={() => handleCorrectWrong(options)}>{options}</button>
            </div>
        </div>
    );
};

export default Options;