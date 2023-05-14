import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Talent() {
  const [talFirstOne, setTalFirstOne] = useState(false)
  const [talFirstTwo, setTalFirstTwo] = useState(false)
  const [talFirstThree, setTalFirstThree] = useState(false)
  const handleFirstClick = () => {
    setTalFirstOne(!talFirstOne);
    setTalFirstTwo(false);
    setTalFirstThree(false);
  }
  const handleSecondClick = () => {
    setTalFirstOne(false);
    setTalFirstTwo(!talFirstTwo);
    setTalFirstThree(false);
  }
  const handleThirdClick = () => {
    setTalFirstOne(false);
    setTalFirstTwo(false);
    setTalFirstThree(!talFirstThree);
  }
  return (
    <div className='talent-div'>
      <div class='talent-name'>Sorin Markov</div>
      <div className='talent-first'>
        <button onClick={handleFirstClick} className={talFirstOne ? "talent-first-selected talent-items":'talent-first-1 talent-items'}>Sangromante</button>
        <button onClick={handleSecondClick} className={talFirstTwo ? "talent-second-selected talent-items":'talent-first-2 talent-items' }>Luchador</button>
        <button onClick={handleThirdClick} className={talFirstThree ? "talent-third-selected talent-items":'talent-first-3 talent-items'}>Arquero</button>
      </div>
    </div>
  )
}

export default Talent