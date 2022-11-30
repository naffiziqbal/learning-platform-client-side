import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../../Hooks/useTitle";

const Course = ({ course }) => {
  const { title, course_Img, description, id } = course;
  useTitle('Courses')
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl ">
        <figure>
          <img className=" max-w-md hover:scale-110 duration-300" src={course_Img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description?.slice(0, 100)}</p>
          <div className="card-actions justify-end">
            <Link to={`/courses/${id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
