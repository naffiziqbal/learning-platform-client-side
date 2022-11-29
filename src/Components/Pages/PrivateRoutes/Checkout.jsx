import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const [state, setState] = useState("Place Order");
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

  const order = () =>{
    setState('Order Placed')
  }
  return (
    <div>
      <div className="card card-side ">
        <div className="indicator">
          <span className="indicator-item indicator-middle indicator-start badge badge-secondary">
            {tagline}
          </span>
          <figure>
            <img className="max-w-md" src={course_Img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Name : {title}</h2>
            <p>{description}</p>
            <p>Author: {author}</p>
            <p>Price : {price}</p>
            <p>Ratings : {ratings}</p>
            <button onClick={order} className="btn btn-active">{state}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
