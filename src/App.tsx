import React from 'react';
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

const App: React.FC = () => {
 
  return (
    <div className='app-container'>
      <Navbar />
      <div className='container-custom'>
        <Router>      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/curso-details/:id" element={<CourseDetails />} /> {/* Ruta con parámetro dinámico */}
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/mi-lista" element={<MyList />} />
            <Route path="/login" element={<MultiStepForm />} />

          </Routes>
        </Router>
        </div>
      <Footer />
    </div>
  );
};

export default App;
