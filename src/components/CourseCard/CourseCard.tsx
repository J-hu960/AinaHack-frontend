import React from 'react';
import './CourseCard.css';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  imgSrc: string;
  title: string;
  date: string;
  id:number
}

const CourseCard: React.FC<CourseCardProps> = ({ imgSrc, title, date,id }) => {
  return (
    <div className="top-course-item">
      <div className="card">
        <img src={imgSrc} alt={title} />
        <div className="card-content">
          <h3>{title}</h3>
          <p>{date}</p>
          <Link to={`/curso-details/${id}`}>Ver detalles</Link>  
        </div>
        </div>
      </div>
    
  );
};

export default CourseCard;
