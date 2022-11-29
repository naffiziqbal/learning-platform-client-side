import React, { useEffect, useState } from "react";
import axios from "axios";
import Course from "./Course";
import { Link } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses`)
      .then((res) => setCourses(res.data));
  }, []);
  console.log(courses);

  return (
    <div className="grid grid-cols-1">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
        <div className="left grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 justify-center items-center">
            {courses.map((course) => (
              <Course key={course.id} course={course} />
            ))}
          </div>
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to = '/courses/1'>Learn Javascript</Link>
            </li>
            <li>
              <Link  to = '/courses/2'>Learn JavaScript Advance</Link>
            </li>
            <li>
              <Link  to = '/courses/3'>Learn React</Link>
            </li>
            <li>
              <Link  to = '/courses/4'>Learn Redux</Link>
            </li>
            <li>
              <Link  to = '/courses/5'>Learn Version Control</Link>
            </li>
            <li>
              <Link  to = '/courses/6'>Learn Backend Server</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Courses;
