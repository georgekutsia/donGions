import React, { useState } from 'react';

function Ridles() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkInputValue();
    }
  };

  const checkInputValue = () => {
    const reference = 'Hola'; // Referencia predefinida
    if (inputValue.toLocaleLowerCase() === reference.toLocaleLowerCase()) {
      setMessage('Correcto');
    } else {
      setMessage('Incorrecto');
    }
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={checkInputValue}>Verificar</button>
      <p>{message}</p>
    </div>
  );
};

export default Ridles




