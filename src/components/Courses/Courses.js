import React from 'react';
import { Link } from "react-router-dom";

const Courses = ({topic}) => {
    const { id, name, logo, total } = topic;
    return (
      <div className="topic-container">
        <img src={logo} alt="" />
        <div>
          <p>Name: {name}</p>
          <p>
            <small>Total Questions: {total}</small>
          </p>
          <button className="button">
            <Link className="link" to={`/home/${id}`}>
              Start Quiz
            </Link>
          </button>
        </div>
      </div>
    );
  };

export default Courses;