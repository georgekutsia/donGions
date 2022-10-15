import React, { useState } from 'react'
import { NavbarVertical, Notes, Pj, SearchRules } from '../../component'
import Rules from '../../component/guide/Rules'

function RuleScreen() {
  const [showInfo, setShowInfo] = useState(false)
  const handleShowInfo = () => setShowInfo(!showInfo)

  return (
    <div className='container'>
      <h1>Manual de instrucciones del juego</h1>
      <NavbarVertical showTheInfo={handleShowInfo}/>
    <a onClick={()=>setShowInfo(!showInfo)}  href="#maimen">ssss</a>

      <button className='btn-rules-toggle' style={{color:"rgb(20, 251, 190)"}} onClick={()=>setShowInfo(!showInfo)}>
          <span></span><span></span><span></span><span></span>Estadísticas del personaje
      </button>
      {showInfo && <Rules/>}
    </div>
    
  )
}

export default RuleScreen