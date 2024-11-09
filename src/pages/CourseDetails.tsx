// pages/CourseDetails.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetails.css';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  date: string;
}

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      setLoading(true);
      try {
        const mockData: Course = {
          id: parseInt(id || '0'),
          title: 'Curso de React Avanzado',
          description:
            'Este curso abarca conceptos avanzados de React, incluyendo hooks, contexto, y optimización de rendimiento.',
          instructor: 'Juan Pérez',
          duration: '5 horas',
          date: '15 de noviembre de 2024',
        };
        setCourse(mockData);
      } catch (error) {
        console.error('Error al obtener los detalles del curso:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [id]);

  if (loading) return <p>Cargando detalles del curso...</p>;
  if (!course) return <p>No se encontraron detalles para este curso.</p>;

  return (
    <div className="course-details-wrapper">
      <div className="course-details-container">
        <h1>{course.title}</h1>
        <p><strong>Descripción:</strong> {course.description}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>
        <p><strong>Duración:</strong> {course.duration}</p>
        <p><strong>Fecha:</strong> {course.date}</p>
      </div>
    </div>
  );
};

export default CourseDetails;
