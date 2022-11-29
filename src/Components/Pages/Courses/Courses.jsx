import React, { useEffect, useState } from "react";
import axios from "axios";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/courses`)
      .then((res) => setCourses(res.data));
  }, []);
  console.log(courses);

  return (
    <div  className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 justify-center items-center">
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
