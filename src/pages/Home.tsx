import Carousel from '../components/Carrousel/Carrousel'
import '../App.css'
import { useEffect, useState } from 'react';
import { Course } from './CourseDetails';
import { Curso } from '../types';

interface props{
  searchQuery:string;
}

const Home = ({searchQuery}:props) => {

  const [recommendedCourses,setRecommendedCourses] = useState<Curso[]>([])
  const [trendingCourse,setTrendingCourse] = useState<Curso[]>([])



 
  const filteredCourses = searchQuery.trim() !== '' ?
      recommendedCourses.filter(course => course.titulo.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase()))
      : recommendedCourses


  return (
    <>
        <div className='video-wrapper'>
        <video
        src="video.mp4"
        autoPlay
        loop
        muted
        className="responsive-video"
      >
        Your browser does not support the video tag.
      </video>
      <div className="fade-overlay"></div>

        </div>
        <h2>Els teus recomenats</h2>
        <Carousel courses={recommendedCourses}  isTopCourses={false}/>
        <h2 className='second-h2'>Top cursos del dia</h2>
        <Carousel courses={trendingCourse} isTopCourses={true} />
        </>
  )
}

export default Home