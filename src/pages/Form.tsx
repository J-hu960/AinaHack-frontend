import React, { useState } from 'react';
import ControlledFlow from '../components/controlled-form/Controlled-flow';
import { Step1, Step2, Step3, Step4 } from '../components/controlled-form/Steps'; // Importa los pasos de tu formulario
import './Form.css'
const MultiStepForm = () => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (dataFromStep) => {
    // Aquí fusionamos los datos previos con los nuevos datos recibidos del paso actual
    setFormData((prevData) => ({ ...prevData, ...dataFromStep }));
    setCurrentStepIdx(currentStepIdx + 1); // Avanzamos al siguiente paso
  };

  const handleDone = () => {
    alert('Formulario completado con éxito');
    console.log('Datos del formulario:', formData);
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
