import Carousel from '../components/Carrousel/Carrousel'
import '../App.css'
const Home = () => {
  const recommendedCourses = [
    { imgSrc: 'imagenes/libreta.png', title: 'Curs de no se que', date: 'Dijous, 16 desembre',index:1 },
    { imgSrc: 'imagenes/img3.JPEG', title: 'Curs de no se que', date: 'Dijous, 16 desembre',index:2 },
    { imgSrc: 'imagenes/img2.jpg', title: 'Curs de no se que', date: 'Dijous, 16 desembre',index:3 },
    { imgSrc: 'imagenes/libreta.png', title: 'Curs de no se que', date: 'Dijous, 16 desembre',index:4 },
    { imgSrc: 'imagenes/img3.JPEG', title: 'Curs de no se que', date: 'Dijous, 16 desembre',index:5 },
    { imgSrc: 'imagenes/img2.jpg', title: 'Curs de no se que', date: 'Dijous, 16 desembre',index:6  }
  ];
  return (
    <>
        <h2>Els teus recomenats</h2>
        <Carousel courses={recommendedCourses}  isTopCourses={false}/>
        <h2>Top cursos del dia</h2>
        <Carousel courses={recommendedCourses} isTopCourses={true} />
        </>
  )
}

export default Home