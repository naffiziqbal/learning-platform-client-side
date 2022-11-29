import React, { createRef } from "react";
import { useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";

const CourseDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { title, course_Img, description, author, price, ratings, tagline } =
    data;

  const ref = createRef();
  return (
    <div>
      <p className="text-3xl font-bold text-center">Course Description</p>

      <div ref={ref}>
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img src={course_Img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {title}</h2>
            <p>{description}</p>
            <p>Author: {author}</p>
            <p>Price : {price}</p>
            <p>Ratings : {ratings}</p>
          </div>
        </div>
      </div>
      <Pdf targetRef={ref} filename="coursedetails.pdf">
        {({ toPdf }) => <button className="btn btn-primary w-full" onClick={toPdf}>Download Details</button>}
      </Pdf>
    </div>
  );
};

export default CourseDetails;
