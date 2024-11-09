import React, { useState } from 'react';
import Navbar from './components/Navbar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import './App.css';
import Home from './pages/Home';
import Perfil from './pages/Perfil';
import ChatBot from './pages/ChatBot';
import MyList from './pages/MyList';
import CourseDetails from './pages/CourseDetails';
import MultiStepForm from './pages/Form';
import LoginPage from './pages/Login';
import AudioRecorder from './components/AudioRecorder/AudioRecorder';
import { Curso } from './types';

const App: React.FC = () => {

  const [searchQuery,setSearchQuery]= useState('')
  const [user,setUser] = useState<string>('')
  const [toke,setToken] = useState<string>('')
  const [recommendedCourses,setRecommendedCourses] = useState<Curso[]>([])

 
  return (
    <div className='app-container'>
      <Navbar setSearchQuery={setSearchQuery} user={user}/>
      <div className='container-custom'>
        <Router>      
          <Routes>
            <Route path="/" element={<LoginPage setRecommended={setRecommendedCourses} setUser={setUser} setToken={setToken} />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/curso-details/:id" element={<CourseDetails />} /> {/* Ruta con parámetro dinámico */}
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/signUp" element={<MultiStepForm />} />
            <Route path="/login" element={<LoginPage setRecommended={setRecommendedCourses} setUser={setUser} setToken={setToken} />} />
            <Route path="/home" element={<Home recommendedCourses={recommendedCourses} searchQuery={searchQuery} />} />
            <Route path="/audio" element={<AudioRecorder />} />


          </Routes>
        </Router>
        </div>
      <Footer />
    </div>
  );
};

export default App;
