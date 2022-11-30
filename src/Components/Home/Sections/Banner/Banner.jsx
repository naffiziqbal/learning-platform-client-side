import React from "react";
import { Link } from "react-router-dom";
import img from "./banner.svg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-full">
            <h1 className="mb-5 text-5xl font-bold">
              when you don't create things, you become defined by your tastes
              rather than ability{" "}
            </h1>
            <Link to="/courses">
              <button className="btn btn-primary">Explore Courses</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
