import React from 'react';
import '../CourseCard/CourseCard.css';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  imgSrc: string;
  title: string;
  date: string;
  index:number;
  id:number
}

const TopCourseCard: React.FC<CourseCardProps> = ({ imgSrc, title, date,index,id }) => {
  
  return (
    <div className="top-course-item">
      <div className="card">
        <img src={imgSrc} alt={title} />
        <div className="card-content">
        <span className='rank'>{index}</span>         
          <h3>{title}</h3>
          <p>{date}</p>
          <Link to={`/curso-details/${id}`}>Ver detalles</Link>        </div>
      </div>
    </div>
  );
};

export default TopCourseCard;
