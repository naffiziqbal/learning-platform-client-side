import React, { createRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import { DocumentIcon } from "@heroicons/react/24/solid";

const CourseDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    title,
    course_Img,
    description,
    author,
    price,
    ratings,
    tagline,
    id,
  } = data;

  const ref = createRef();
  return (
    <>
      <p className="text-3xl font-bold text-center">Course Description</p>
      <div className="card card-compact bg-base-100 shadow-xl my-5">
        <Pdf targetRef={ref} filename="coursedetails.pdf">
          {({ toPdf }) => (
            <button className="btn btn-ghost max-w-sm my-5" onClick={toPdf}>
              <DocumentIcon className="w-6 " /> Download Details
            </button>
          )}
        </Pdf>

        <div ref={ref}>
          <div className="">
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
        <Link to={`/checkout/${id}`}>
          <button className="btn btn-primary w-full">Get Premium Access</button>
        </Link>
      </div>
    </>
  );
};

export default CourseDetails;
