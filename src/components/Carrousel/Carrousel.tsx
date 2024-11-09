import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './Carrousel.css';
import TopCourseCard from '../TopCourseCard/TopCourseCard';

interface CarouselProps {
  courses: { imgSrc: string; title: string; date: string,index:number }[];
  isTopCourses: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ courses, isTopCourses }) => {
  return (
    !isTopCourses ? (
      <div id="carousel-container">
        <button className="carousel-button prev">&#10094;</button>
        <div className="carousel " id='carousel1'>
          {courses.map((course, index) => (
            <CourseCard id={course.index}  key={course.index} imgSrc={course.imgSrc} title={course.title} date={course.date} />
          ))}
        </div>
        <button className="carousel-button next">&#10095;</button>
      </div>
    ) : (
      <div id="carousel-container">
      <button className="carousel-button prev">&#10094;</button>
      <div className="carousel" id='carousel2'>
        {courses.map((course, index) => (
          <TopCourseCard id={course.index}  index={index+1} key={course.index} imgSrc={course.imgSrc} title={course.title} date={course.date} />
        ))}
      </div>
      <button className="carousel-button next">&#10095;</button>
    </div>
    
    )
  );
};

export default Carousel;
