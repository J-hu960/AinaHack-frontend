import React, { useState } from 'react';
import ControlledFlow from '../components/controlled-form/Controlled-flow';
import { Step1, Step2, Step3, Step4 } from '../components/controlled-form/Steps'; // Importa los pasos de tu formulario
import './Form.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const MultiStepForm = () => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()

  const handleNext = (dataFromStep) => {
    // Aquí fusionamos los datos previos con los nuevos datos recibidos del paso actual
    setFormData((prevData) => ({ ...prevData, ...dataFromStep }));
    setCurrentStepIdx(currentStepIdx + 1); // Avanzamos al siguiente paso
  };

  const handleDone = async () => {
    try {
      // Enviar la solicitud POST con los datos del formulario
      const response = await axios.post('http://localhost:8000/users/register', formData);
  
      // Mostrar una alerta si la solicitud fue exitosa
      alert('Formulario completado con éxito');
      navigate('/login')
  
      // Registrar los datos del formulario en la consola
      console.log('Datos del formulario:', formData);
      console.log('Respuesta del servidor:', response.data);
  
    } catch (error) {
      // Manejar posibles errores en la solicitud
      console.error('Error al enviar el formulario:', error);
  
      // Mostrar un mensaje de error en caso de fallo
      alert('Hubo un error al completar el formulario. Intenta nuevamente.');
    }
  };
  

  return (
    <div>
      <ControlledFlow onNext={handleNext} onDone={handleDone} currentStepIdx={currentStepIdx}>
        <Step1 goNext={handleNext} />
        <Step2 goNext={handleNext} />
        <Step3 goNext={handleNext} />
        <Step4 goNext={handleNext} />
      </ControlledFlow>
      {currentStepIdx === 4 && (
 <div className="form-container">
  <h2 className='text-center mb-4'>Ya casi, quina emoció</h2>

 <div className="card">
   <h2 className="question text-center">Envia per començar l'aventura</h2>
   <button className="next-button" onClick={handleDone}>Enviar</button>
 </div>
</div>
)}
    </div>
  );
};

export default MultiStepForm;
