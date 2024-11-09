import React from 'react';
import './CourseCard.css';
import CustomLink from '../CustomLink';
import { Curso } from '../../types';

interface CourseCardProps {
  curso: Curso;
  img: string;
}

const CourseCard: React.FC<CourseCardProps> = ({ curso, img }) => {
  const { titulo, descripcion, tipo, modalidad, nivel, rating, precio, estado } = curso;

  return (
    <div className="course-card">
        <div className="card-img-container">
          <img className="card-img" src={img} alt={titulo} />
        </div>
        <div className="card-content">
          <h3>{titulo}</h3>
          <p className="short-description">{descripcion}</p>
          <div className="course-info">
            <p><strong>Tipo:</strong> {tipo}</p>
            <p><strong>Modalidad:</strong> {modalidad}</p>
            <p><strong>Nivel:</strong> {nivel}</p>
            <p><strong>Rating:</strong> {rating} / 5</p>
            <p><strong>Precio:</strong> ${precio}</p>
            <p><strong>Estado:</strong> {estado}</p>
          </div>
          {/* <CustomLink to={`/curso-details/${titulo.replace(/\s+/g, '-').toLowerCase()}`}>
            Ver detalles
          </CustomLink> */}
        </div>
      </div>
  );
};

export default CourseCard;
