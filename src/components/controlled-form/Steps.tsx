import React, { useState } from 'react';
import './steps.css'; // Asegúrate de importar los estilos aquí

const Step1 = ({ goNext }) => {
  const [name, setName] = useState('');

  const handleNext = () => {
    goNext({ name });
  };

  return (
  <div className="form-container">
  <h1 className="title">Benvingut a JAA</h1>
  <p className="subtitle">Quina il·lusió tenir-te aqui!</p>

  <div className="card">
    <h2 className="question text-center" >Com et dius?</h2>
    <input onChange={e => setName(e.target.value)} type="text" className="input" placeholder="Nom" />

    <button className="next-button" onClick={handleNext}>Següent</button>

    

    <p className="step-info">1 de 4</p>
  </div>
</div>

  );
};

const Step2 = ({ goNext }) => {
  const [email, setEmail] = useState('');

  const handleNext = () => {
    goNext({ email });
  };

  return (
    <div className="form-container">
  <h1 className="title">Un pas més aprop</h1>

  <div className="card">
    <h2 className="question text-center">Quin és el teu correu?</h2>
    <input onChange={e => setEmail(e.target.value)} type="email" className="input" placeholder="Email" />

    <button className="next-button" onClick={handleNext}>Següent</button>

   

    <p className="step-info">2 de 4</p>
  </div>
</div>

  );
};


const Step3 = ({ goNext }) => {
  const [address, setAddress] = useState('');

  const handleNext = () => {
    goNext({ address });
  };

  
    return (
      <div className="form-container">
    <h1 className="title">Ja falta poc</h1>
  
    <div className="card">
      <h2 className="question text-center">D'on ets?</h2>
      <input onChange={e => setAddress(e.target.value)} type="text" className="input" placeholder="Ciutat" />
  
      <button className="next-button" onClick={handleNext}>Següent</button>
  
    
  
      <p className="step-info">3 de 4</p>
    </div>
  </div>
  
    );

};

const Step4 = ({ goNext }) => {
  const [contrasenya, setContrasenya] = useState('');

  const handleNext = () => {
    goNext({ contrasenya });
  };

  return (
  <div className="form-container">
  <h1 className="title">Una última empenta</h1>

  <div className="card">
    <h2 className="question text-center">Tria una contrasenya</h2>
    <input onChange={e => setContrasenya(e.target.value)} type="text" className="input" placeholder="Nom" />

    <button className="next-button" onClick={handleNext}>Següent</button>

    

    <p className="step-info">4 de 4</p>
  </div>
</div>

  );
};



export { Step1, Step2, Step3,Step4 };
