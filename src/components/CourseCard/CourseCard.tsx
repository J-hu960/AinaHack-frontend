import React from 'react';
import './CourseCard.css';
import CustomLink from '../CustomLink';
import { Curso } from '../../types';

interface CourseCardProps {
  curso: Curso,
  img: string
}

const CourseCard: React.FC<CourseCardProps> = ({ curso, img }) => {
  const { titulo, descripcion, tipo, modalidad, nivel, rating, precio, estado } = curso;

  return (
    <div className="top-course-item">
      <div className="card">
        <img src={img} alt={titulo} />
        <div className="card-content">
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

export default CourseCard;
