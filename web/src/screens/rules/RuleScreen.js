import React, { useState } from 'react'
import { Characters, NavbarVertical, Notes, Pj, SearchRules } from '../../component'
import Rules from '../../component/guide/EstadisticasPj'

function RuleScreen() {
  const [showInfo, setShowInfo] = useState(false)
  const [showChar, setShowChar] = useState(false)
  const handleShowInfo = () => setShowInfo(!showInfo)
  const handleShowChar = () => setShowChar(!showChar)

  return (

    <>
        <NavbarVertical showTheInfo={handleShowInfo}/>
      <div className='container'>
        <h1>Manual de instrucciones del juego</h1>
          <div>
                <button className='btn-rules-toggle' style={{color:"rgb(220, 201, 10)"}} onClick={()=>setShowInfo(!showInfo)}>
                <span></span><span></span><span></span><span></span>Estadísticas básicas
            </button>
                <button className='btn-rules-toggle' style={{color:"rgb(20, 251, 190)"}} onClick={()=>setShowChar(!showChar) }>
                <span></span><span></span><span></span><span></span>Carácter
            </button>
                <button className='btn-rules-toggle' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setShowChar(false); setShowInfo(false)}}>
                <span></span><span></span><span></span><span></span>Cerrar todo
            </button>
                <button className='btn-rules-toggle' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setShowChar(true); setShowInfo(true)}}>
                <span></span><span></span><span></span><span></span>Abrir todo
            </button>
          </div>
        {showInfo && <Rules/>}
        {showChar && <Characters/>}
      </div>

    </>

    
  )
}

export default RuleScreen