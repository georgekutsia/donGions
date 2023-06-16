import React, { useState, useEffect } from 'react';

function Riddles({ respuesta, nombrePrueba, placeHolder }) {
  const [calculating, setCalculating] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('Verificar');
  const [showRiddle, setShowRiddle] = useState(false);
  const [colorBack, setColorBack] = useState("rgb(165, 196, 195)");
  const [dotsCount, setDotsCount] = useState(0);

  useEffect(() => {
    let interval;
    if (calculating) {
      interval = setInterval(() => {
        setDotsCount((prevCount) => (prevCount + 1) % 4);
      }, 300);
    } else {
      setDotsCount(0);
    }

    return () => clearInterval(interval);
  }, [calculating]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkInputValue();
    }
  };

  const checkInputValue = () => {
    setCalculating(true);
    setMessage("Verificando respuesta");
    setColorBack("white")
    setTimeout(() => {
      if (inputValue.toLowerCase() === respuesta.toLowerCase()) {
        setMessage('¡Buen trabajo!');
        setColorBack("rgb(0, 255, 85)");
      } else {
        setMessage('Prueba fallida');
        setColorBack("red");
      }
      setInputValue('');
      setCalculating(false);
    }, 2000);
  };

  return (
    <div>
      <button className='button-show-riddle' onClick={() => setShowRiddle(!showRiddle)}>
        {nombrePrueba}
      </button>
      {showRiddle && (
        <div>
          <input className='input-riddle' type="text" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder={placeHolder}/>
          <div>
            <button className='button-riddle' style={{ backgroundColor: `${colorBack}` }} onClick={checkInputValue} disabled={calculating}>
            {message + '.'.repeat(dotsCount)}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Riddles;
