import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './Carrousel.css';
import TopCourseCard from '../TopCourseCard/TopCourseCard';
import { Curso } from '../../types';

interface CarouselProps {
  courses: Curso[];
  isTopCourses: boolean;
}



const Carousel: React.FC<CarouselProps> = ({ courses, isTopCourses }) => {
  const images = [
    'georgie.jpg',
    'dylan.jpg',
    'lycs.jpg',
    'redd.jpg',
    'tim.jpg',
    'unseen.jpg'
]

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

  return (
    !isTopCourses ? (
      <div id="carousel-container">
        <button className="carousel-button prev">&#10094;</button>
        <div className="carousel " id='carousel1'>
          {courses.map((course) => (
            <CourseCard key={course.titulo} curso={course} img={getRandomImage()} />
          ))}
        </div>
        <button className="carousel-button next">&#10095;</button>
      </div>
    ) : (
      <div id="carousel-container">
      <button className="carousel-button prev">&#10094;</button>
      <div className="carousel" id='carousel2'>
        {courses.map((course, index) => (
          <TopCourseCard course={course} idx={index} imgSrc={getRandomImage()} />
        ))}
      </div>
      <button className="carousel-button next">&#10095;</button>
    </div>
    
    )
  );
};

export default Carousel;
