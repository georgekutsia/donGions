import React from 'react'

function Character({dKinesthesia, dPresence, dPerception, dLuck, dCharisma}) {
  return (
    <div className='stats-chars-box'>
      <div style={{color:"rgb(237, 0, 254)"}} className="stats-chars">Suerte: <span >{dLuck}</span>  </div>
      <div  style={{color:"rgb(0, 246, 254)"}} className="stats-chars">Carisma: <span>{dCharisma}</span></div>
      <div style={{color:"rgb(255, 157, 0)"}}  className="stats-chars">Percepción: <span>{dPerception}</span></div>
      <div style={{color:"red"}} className="stats-chars">Presencia: <span>{dPresence}</span></div>
      <div style={{color:"rgb(4, 186, 4)"}} className="stats-chars">Cinestesia: <span>{dKinesthesia}</span></div>
    </div>
  )
}

export default Character