import Carousel from '../components/Carrousel/Carrousel'
import '../App.css'
import { useEffect } from 'react';
import { Course } from './CourseDetails';

interface props{
  searchQuery:string;
}

const Home = ({searchQuery}:props) => {
  const recommendedCourses = [
    {
        imgSrc: 'georgie.jpg',
        title: 'Introducción a la Programación',
        description: 'Curso básico para comenzar a programar desde cero.',
        instructor: 'Ana Pérez',
        duration: '4 semanas',
        date: 'Lunes, 5 noviembre',
        index: 1
    },
    {
        imgSrc: 'dylan.jpg',
        title: 'Desarrollo Web con JavaScript',
        description: 'Aprende a crear aplicaciones web interactivas con JavaScript.',
        instructor: 'Carlos Sánchez',
        duration: '6 semanas',
        date: 'Martes, 13 noviembre',
        index: 2
    },
    {
        imgSrc: 'lycs.jpg',
        title: 'Fundamentos de Machine Learning',
        description: 'Explora los conceptos básicos de Machine Learning y su aplicación.',
        instructor: 'Lucía Gómez',
        duration: '8 semanas',
        date: 'Miércoles, 21 noviembre',
        index: 3
    },
    {
        imgSrc: 'redd.jpg',
        title: 'Bases de Datos SQL',
        description: 'Curso para entender y manejar bases de datos relacionales con SQL.',
        instructor: 'Juan Martínez',
        duration: '5 semanas',
        date: 'Jueves, 29 noviembre',
        index: 4
    },
    {
        imgSrc: 'tim.jpg',
        title: 'UI/UX Design Principles',
        description: 'Descubre los principios fundamentales de diseño de interfaces de usuario.',
        instructor: 'Sofía Rodríguez',
        duration: '3 semanas',
        date: 'Viernes, 7 diciembre',
        index: 5
    },
    {
        imgSrc: 'unseen.jpg',
        title: 'Ciberseguridad Básica',
        description: 'Conoce las bases de la ciberseguridad para proteger tus datos.',
        instructor: 'David López',
        duration: '4 semanas',
        date: 'Sábado, 15 diciembre',
        index: 6
    }
];

  const filteredCourses = searchQuery.trim() !== '' ?
      recommendedCourses.filter(course => course.title.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
      : recommendedCourses
  return (
    <>
        <h2>Els teus recomenats</h2>
        <Carousel courses={filteredCourses}  isTopCourses={false}/>
        <h2>Top cursos del dia</h2>
        <Carousel courses={filteredCourses} isTopCourses={true} />
        </>
  )
}

export default Home