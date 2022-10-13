import React, { useState } from 'react'
import { Notes, Pj, SearchRules } from '../../component'
import Rules from '../../component/guide/Rules'

function RuleScreen() {
  const [showInfo, setShowInfo] = useState(true)
  const [showPj, setShowPj] = useState(false)
  return (
    <div className='container'>
      <h1>Manual de instrucciones del juego</h1>
      <SearchRules/>
      <button className='btn-rules-toggle' onClick={()=>setShowInfo(!showInfo)}>
          <span></span><span></span><span></span><span></span>Estadísticas del personaje
      </button>
      <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      <button className='btn-rules-toggle' onClick={()=>setShowPj(!showPj)}>
      <span></span><span></span><span></span><span></span>Otra info
      </button>
      {showInfo && <Rules/>}
      <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
    </div>
    
  )
}

export default RuleScreen