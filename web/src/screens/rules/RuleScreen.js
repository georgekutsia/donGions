import React, { useState } from 'react'
import { BackgroundFloatingBuble, Characters, Charisma, Kinesthesia, Luck, NavbarVertical, Notes, Perception, Pj, Presence, SearchRules } from '../../component'
import Rules from '../../component/guide/EstadisticasPj'

function RuleScreen() {
  const [basic, setBasic] = useState(true)
  const [char, setChar] = useState(true)
  
  const [rPre, setrPre] = useState(false)
  const [rCha, setrCha] = useState(false)
  const [rLu, setrLu] = useState(false)
  const [rPer, setrPer] = useState(false)
  const [rKi, setrKi] = useState(false)

  const stats = () => setBasic(!basic)
  const presence = () => setrPre(!rPre)
  const charisma = () => setrCha(!rCha)
  const luck = () => setrLu(!rLu)
  const perception = () => setrPer(!rPer)
  const kinesthesia = () => setrKi(!rKi)
  return (
    <>
        <NavbarVertical 
            statistics={stats} 
            stpresence={presence} 
            stcharisma={charisma} 
            stluck={luck}
            stperception={perception} 
            stkinesthesia={kinesthesia}
        />
        <BackgroundFloatingBuble floatingBalls=
        // square-flow      slow-flow
    {"url(https://res.cloudinary.com/dfrda73uc/image/upload/v1666134847/donGions%20imgs/backgroundEffects/pngwing.com_-_2022-10-19T011351.446_eeqfuh.png)"} 
    widthBall={"50px"} heigthBall={"60px"} radiusBall={"2px"} idFlow={"square-flow"}/>
      <div align="center" className='container'>
        <h1>Manual de instrucciones del juego</h1>
        <div className='bubble-text-manual '>
        <img className="img-shop-info-manual" alt="Dude" />
          <h5> Si algo no está escrito aquí, es que no lo has encontrado</h5>
          <h5>Tienes una barra de navegación con la que encontrar cosas más concretas. Información es poder!</h5>
        </div>
          <div className='d-flex mt-5 justify-content-between'> 
          <div>
              <button className='btn-rules-toggle' style={{color:"grey"}} onClick={()=>{setBasic(!basic); setChar(false)}}>
                  <span></span><span></span><span></span><span></span>Estadísticas básicas
              </button>
              <button className='btn-rules-toggle' style={{color:"grey"}} onClick={()=>{setChar(!char); setBasic(false)} }>
                  <span></span><span></span><span></span><span></span>Carácter
              </button>
              </div>
                <div className=''>
                <button className='btn-rules-toggle' style={{color:"violet"}} onClick={()=>{ setBasic(true); setrPre(true); setrCha(true); setrLu(true); setrPer(true); setrKi(true); }}>
                      <span></span><span></span><span></span><span></span>Abrir todo 
                </button>
                <button className='btn-rules-toggle' style={{color:"blue"}} onClick={()=>{setChar(false); setBasic(false); setrPre(false); setrCha(false); setrLu(false); setrPer(false); setrKi(false); }}>
                      <span></span><span></span><span></span><span></span>Cerrar todo
                </button>
                </div>
          </div>
          <div>
              {basic && <Rules/>}
              {char && <Characters/>}
              {rLu && <Luck/>}
              {rCha && <Charisma/>}
              {rKi && <Kinesthesia/>}
              {rPer && <Perception/>}
              {rPre && <Presence/>}
          </div>
      </div>
    </>

    
  )
}

export default RuleScreen