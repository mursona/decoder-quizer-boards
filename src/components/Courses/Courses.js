import React from 'react';
import { Link } from "react-router-dom";

const Courses = ({topic}) => {
    const { id, name, logo, total } = topic;
    let imgbg = {
      backgroundColor: "#f3db4c",
    };
    let btnbg = {
      backgroundColor: "#3a92e4",
      color: "white",
    };
    return (
      <div className='pb-2 bg-slate-50 mx-6 border border-4 rounded rounded-6'>
        <div style={imgbg}><img src={logo} alt="" /></div>
        <div>
          <p className='text-blue-900 font-semibold mt-2'>Course Name: {name}</p>
          <p className='text-blue-900 my-2 mx-4 py-2 bg-sky-100'>
            <small>Total Questions: <span className='bg-blue-900 py-2 px-4 text-white rounded rounded-96'>{total}</span></small>
          </p>
            <Link to={`/home/${id}`}>
              <button style={btnbg} className='font-bold px-20 rounded rounded-4 py-2'>Start Quiz</button>
            </Link>

        </div>
      </div>
    );
  };

export default Courses;