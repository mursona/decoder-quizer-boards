import React from 'react';
import header from '../../images/header-image.png';

const Home = () => {
    return (
        <div className="bg-slate-200 mt-10 w-full flex mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl align-middle justify-between">
            <div className="container flex flex-col items-center pl-4 mx-auto text-center md:pl-10 text-gray-900">
            <h1 className="mt-36 text-5xl font-bold leading-none sm:text-4xl xl:max-w-3xl text-blue-900">
            Welcome To Smart Home
          </h1>
          <p className='mx-10 mt-6 text-sky-600'>Quiz Decoder is a web-based Audience Engagement Cloud Platform for hosting interactive open programming hero quizzes at in-person, virtual, and hybrid events. It only takes minutes to create a learning game quiz on any topic, in any language. Host or share. </p>
            </div>
            <div>
            <img src={header} alt="" />
            </div>
        </div>
    );
};

export default Home;