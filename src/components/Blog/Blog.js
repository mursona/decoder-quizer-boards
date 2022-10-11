import React from 'react';
import router from '../../images/react-router.png';
import hook from '../../images/hook.png'
import context from '../../images/context-api.png'

const Blog = () => {
    return (
    <div>
    <div className="bg-slate-200 mt-10 w-full flex flex-col sm:flex-col md:flex-row mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl align-middle justify-between">
        <div className='bg-red-50'>
            <img src={router} alt="" />
        </div>
        <div className="container flex flex-col items-center pl-4 mx-auto text-center md:pl-10 text-gray-900">
            <h1 className="mt-20 text-5xl font-bold leading-none sm:text-4xl xl:max-w-3xl text-blue-900">
            What is the purpose of react router?
          </h1>
          <p className='mx-10 mt-6 text-sky-600'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
          <br />At its heart, React Router is a state container for the current location , or URL. It keeps track of the location and renders different Route s as it changes, and it also gives you tools to update the location using Link s and the history API.</p>
        </div>
    </div>
    <div className="bg-slate-200 mt-10 w-full flex flex-col sm:flex-col md:flex-row mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl align-middle justify-between">
        <div className="container flex flex-col items-center pl-4 mx-auto text-center md:pl-10 text-gray-900">
            <h1 className="mt-20 text-5xl font-bold leading-none sm:text-4xl xl:max-w-3xl text-blue-900">
            How does context api work?
          </h1>
          <p className='mx-10 mt-6 text-sky-600'>Context provides a way to pass data through the component tree without having to pass props down manually at every level. <br /><br />
          The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
        </div>
        <div className='bg-red-50'>
            <img src={context} alt="" />
        </div>
    </div>
    <div className="bg-slate-200 mt-10 w-full flex flex-col sm:flex-col md:flex-row mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl align-middle justify-between">
        <div className='bg-red-50'>
            <img src={hook} alt="" />
        </div>
        <div className="container flex flex-col items-center pl-4 mx-auto text-center md:pl-10 text-gray-900">
            <h1 className="mt-20 text-5xl font-bold leading-none sm:text-4xl xl:max-w-3xl text-blue-900">
            React useRef Hook?
          </h1>
          <p className='mx-10 mt-6 text-sky-600'>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. <br /> <br /> The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>
    </div>
    </div>
    );
};

export default Blog;