import axios from "axios";
import React, { useEffect, useState } from "react";
import Course from "../../Pages/Courses/Course";

const Toprated = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get(`https://learn-digital-naffiziqbal.vercel.app/limitCourses`)
      .then((res) => setCourses(res.data));
  }, []);
  // console.log(courses);

  return (
    <div className="container mx-auto">
      <h3 className="text-4xl font-bold text-blue-600 text-center my-12">
        Our Top Rated Courses
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mx-5">
        {courses.map((course) => (
          <Course course={course} key={course.id} />
        ))}
      </div>
    </div>
  );
};

export default Toprated;
