import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { title, course_Img, description, author, price, ratings, tagline } =
    data;

  return (
    <div>
      <p>Course Description</p>

      <div>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src= {course_Img}  alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {title}</h2>
            <p>{description}</p>
            <p>Author: {author}</p>
            <p>Price : {price}</p>
            <p>Ratings :  {ratings}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
