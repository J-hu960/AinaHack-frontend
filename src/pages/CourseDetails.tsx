// pages/CourseDetails.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

export interface Course {
  imgSrc: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  date: string;
  index: number;
}

const CourseDetails: React.FC = () => {
  const recommendedCourses = [
    {
        imgSrc: '/libreta.png',
        title: 'Introducción a la Programación',
        description: 'Curso básico para comenzar a programar desde cero.',
        instructor: 'Ana Pérez',
        duration: '4 semanas',
        date: 'Lunes, 5 noviembre',
        index: 1
    },
    {
        imgSrc: '/img3.JPEG',
        title: 'Desarrollo Web con JavaScript',
        description: 'Aprende a crear aplicaciones web interactivas con JavaScript.',
        instructor: 'Carlos Sánchez',
        duration: '6 semanas',
        date: 'Martes, 13 noviembre',
        index: 2
    },
    {
        imgSrc: '/img2.jpg',
        title: 'Fundamentos de Machine Learning',
        description: 'Explora los conceptos básicos de Machine Learning y su aplicación.',
        instructor: 'Lucía Gómez',
        duration: '8 semanas',
        date: 'Miércoles, 21 noviembre',
        index: 3
    },
    {
        imgSrc: 'libreta.png',
        title: 'Bases de Datos SQL',
        description: 'Curso para entender y manejar bases de datos relacionales con SQL.',
        instructor: 'Juan Martínez',
        duration: '5 semanas',
        date: 'Jueves, 29 noviembre',
        index: 4
    },
    {
        imgSrc: 'img3.JPEG',
        title: 'UI/UX Design Principles',
        description: 'Descubre los principios fundamentales de diseño de interfaces de usuario.',
        instructor: 'Sofía Rodríguez',
        duration: '3 semanas',
        date: 'Viernes, 7 diciembre',
        index: 5
    },
    {
        imgSrc: 'img2.jpg',
        title: 'Ciberseguridad Básica',
        description: 'Conoce las bases de la ciberseguridad para proteger tus datos.',
        instructor: 'David López',
        duration: '4 semanas',
        date: 'Sábado, 15 diciembre',
        index: 6
    }
];


  const { id } = useParams<{ id: string }>();
  const course = recommendedCourses.find(course => course.index === parseInt(id || '', 10));

  if (!course) return <p>No se encontraron detalles para este curso.</p>;
  console.log(course)
  return (
    <div className="course-details-wrapper">
      <div className="course-details-card">
        <div className='img-wrapper'>
          <img src={course.imgSrc} alt={course.title} style={{ width: '200px', height: '200px',objectFit: 'cover',borderRadius: '10px',marginLeft:'auto',marginRight:'auto' }}/>
        </div>
        <div className="course-details-content">
          <h1>{course.title}</h1>
          <p><strong>Descripción:</strong> {course.description}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Duración:</strong> {course.duration}</p>
          <p><strong>Fecha:</strong> {course.date}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
