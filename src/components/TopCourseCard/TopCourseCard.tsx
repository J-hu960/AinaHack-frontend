import React from 'react';
import '../CourseCard/CourseCard.css';
import CustomLink from '../CustomLink';
import { Curso } from '../../types';

interface CourseCardProps {
  imgSrc: string;
  course: Curso;
  idx:number
}

const TopCourseCard: React.FC<CourseCardProps> = ({ course, imgSrc,idx }) => {
  const { titulo, descripcion, tipo, modalidad, nivel, rating, precio, estado } = course;

  return (
    <div className="top-course-item">
      <div className="card">
        <img src={imgSrc} alt={titulo} />
        <div className="card-content">
          <span className='rank'>{idx+1}</span>
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
          <p><strong>Tipo:</strong> {tipo}</p>
          <p><strong>Modalidad:</strong> {modalidad}</p>
          <p><strong>Nivel:</strong> {nivel}</p>
          <p><strong>Rating:</strong> {rating} / 5</p>
          <p><strong>Precio:</strong> ${precio}</p>
          <p><strong>Estado:</strong> {estado}</p>
          <CustomLink to={`/curso-details/${titulo.replace(/\s+/g, '-').toLowerCase()}`}>
            Ver detalles
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default TopCourseCard;
