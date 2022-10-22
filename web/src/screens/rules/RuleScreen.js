import React, { useEffect, useState } from 'react'
import { BackgroundFloatingBuble, Characters, Charisma, Kinesthesia, Luck, NavbarVertical, Notes, Perception, Pj, Presence, SearchRules } from '../../component'
import Rules from '../../component/guide/EstadisticasPj'
import FadeInOut from "../../component/FadeInOut";
import { Link } from 'react-router-dom';

function RuleScreen() {
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)

      setTimeout(() => {
        setDude(false)
      }, 5000)
  }, [])
  const [dude, setDude] = useState(true)

  const [basic, setBasic] = useState(true)
  const [char, setChar] = useState(true)
  
  const [rPre, setrPre] = useState(false)
  const [rCha, setrCha] = useState(false)
  const [rLu, setrLu] = useState(false)
  const [rPer, setrPer] = useState(false)
  const [rKi, setrKi] = useState(false)

  const stats = () => setBasic(true)
  const presence = () => setrPre(true)
  const charisma = () => setrCha(true)
  const luck = () => setrLu(true)
  const perception = () => setrPer(true)
  const kinesthesia = () => setrKi(true)

  return (
    <>
        <FadeInOut show={showPage} duration={5000}>
        <NavbarVertical 
            statistics={stats} 
            stpresence={presence} 
            stcharisma={charisma} 
            stluck={luck}
            stperception={perception} 
            stkinesthesia={kinesthesia}
        />
        </FadeInOut>

        <BackgroundFloatingBuble floatingBalls=
        // square-flow      slow-flow
    {"url(https://res.cloudinary.com/dfrda73uc/image/upload/v1666134847/donGions%20imgs/backgroundEffects/pngwing.com_-_2022-10-19T011351.446_eeqfuh.png)"} 
    widthBall={"50px"} heigthBall={"60px"} radiusBall={"2px"} idFlow={"square-flow"}/>
      <div align="center" className='container'>
      <FadeInOut show={showPage} duration={1000}>
        <h1> Manual de instrucciones del juego</h1>
        <Link  onClick={()=> setDude(!dude)}>
        {dude ?  
      <FadeInOut show={showPage} duration={200}>
            <i  className="button-show-dude-up fa-solid fa-angles-up" style={{animationDuration: "1.3s", animationIterationCount:"forever"}}></i> 
        </FadeInOut>
            : 
            <FadeInOut show={showPage} duration={200}>
            <i className="button-show-dude-down fa-solid fa-angles-down fa-fade" style={{animationDirection: "reverse", animationDuration: "1.3s", animationIterationCount:"forever"}}></i> 
          </FadeInOut>
            }</Link>

        {dude &&  
      <FadeInOut show={showPage} duration={400}>
        <div className='bubble-text-manual '>
        <img className="img-shop-info-manual" alt="Dude" />
          <h5> Si algo no está escrito aquí, es que no lo has encontrado</h5>
          <h5>Tienes una barra de navegación a la izquierda con la que encontrar cosas más concretas. Información es poder! Y poder es dinero!</h5>
        </div>
        </FadeInOut>

        }
          <div className='d-flex mt-5 justify-content-around'> 
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
      <FadeInOut show={basic} duration={400}>
              {basic && <Rules/>}
        </FadeInOut>
      <FadeInOut show={char} duration={400}>
              {char && <Characters/>}
        </FadeInOut>
      <FadeInOut show={rLu} duration={400}>
              {rLu && <Luck/>}
        </FadeInOut>
      <FadeInOut show={rCha} duration={400}>
              {rCha && <Charisma/>}
        </FadeInOut>
      <FadeInOut show={rKi} duration={400}>
              {rKi && <Kinesthesia/>}
        </FadeInOut>
      <FadeInOut show={rPer} duration={400}>
              {rPer && <Perception/>}
        </FadeInOut>
      <FadeInOut show={rPre} duration={400}>
              {rPre && <Presence/>}
        </FadeInOut>
          </div>
        </FadeInOut>
      </div>
    </>

    
  )
}

export default RuleScreen