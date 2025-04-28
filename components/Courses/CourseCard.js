import React from "react";
import "./coursecard.css";

const CourseCard = ({ title, description, duration, slug }) => {
  // console.log("CourseCard: ", title, description, duration, slug);
  return (
    <div className="card course-card">
      <div className="card-body"></div>
        <p className="duration">{duration}</p>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={`/courses/${slug}`} className="btn btn-sm btn-primary" role="button">
          View Course
        </a>
      
    </div>
  );
};

export default CourseCard;
