import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Curso } from '../types';

interface  props  {
  setToken:React.Dispatch<React.SetStateAction<string>>,
  setUser: React.Dispatch<React.SetStateAction<string>>,
  setRecommended: React.Dispatch<React.SetStateAction<Curso[]>>
}

const LoginPage = ({setToken,setUser,setRecommended}:props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const populateBBDD =async()=>{
    const response = await axios.get("http://localhost:8000/api/recommendations/1")
    setRecommended(response.data)

  }

  useEffect(()=>{
    populateBBDD()
  },[])

  const navigate = useNavigate()

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault();

    try {
      // Aquí iría la lógica de autenticación
    const response = await axios.post('http://localhost:8000/users/login', {email,password});
    setToken(response.data.token)
    console.log("Server response: ",response.data)
    navigate('/home')
    setUser(email)
      
    } catch (error) {
      
    }
    

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Bienvenido de Nuevo</h1>
        <p className="login-subtitle">Por favor, inicia sesión para continuar</p>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="Introduce tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
        
        <p className="signup-text">
          ¿No tienes cuenta? <a href="/signUp" className="signup-link">Regístrate aquí</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
