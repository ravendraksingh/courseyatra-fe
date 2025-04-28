"use client";
import React, { useEffect } from "react";
import { ALL_COURSES, COURSE_CATEGORIES } from "@/constants";
import CourseCard from "./CourseCard";
import "./AllCourses.css";

const AllCourses = () => {
  const [filteredCourses, setFilteredCourses] = React.useState(ALL_COURSES);
  const [categories, setCategories] = React.useState(COURSE_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = React.useState(null);

  useEffect(() => {
    setSelectedCategory("pg");
    const filteredCourses = ALL_COURSES.filter((course) =>
      course.categories.includes("pg")
    );
    setFilteredCourses(filteredCourses);
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.key);
    const filteredCourses = ALL_COURSES.filter((course) =>
      course.categories.includes(category.key)
    );
    setFilteredCourses(filteredCourses);
  };

  console.log("Filtered Courses: ", filteredCourses);
  console.log("Selected Category: ", selectedCategory);

  return (
    <>
      <section className="section container">
      <h2 className="section-heading">Explore Courses</h2>
        {/** Course categories */}
        <div className="d-flex flex-row gap-2 overflow-x-auto mb-4">
          {categories.map((category) => (
              <button
                key={category.id}
                className="btn btn-outline-primary text-nowrap"
                onClick={() => handleCategoryClick(category)}         
              >
                {category.label}
              </button>
            ))}
        </div>

        {/* Course cards can be added here */}
        {filteredCourses.length === 0 && (
          <p className="">
            No course available in this category!
          </p>
        )}
        <div className="d-flex flex-row gap-4 flex-wrap justify-content-start">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              duration={course.duration}
              slug={course.slug}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllCourses;
