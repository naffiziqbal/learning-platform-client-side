import React from "react";

const Course = ({ course }) => {
  const { title,course_Img, description } = course;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img className=" max-w-md " src={course_Img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description?.slice(0,100)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
