import React, { useEffect, useState } from 'react'
import { BackgroundFloatingBuble, Characters, Charisma, Creator, ExtraInfo, Kinesthesia, Luck, NavbarVertical, Perception, Presence } from '../../component'
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
  const [char, setChar] = useState(false)
  const [inspi1, setInpsi1] = useState(false)
  const [inspi2, setInpsi2] = useState(false)
  const [inspi3, setInpsi3] = useState(false)

  const [expl1, setExpl1] = useState(false)
  const [expl2, setExpl2] = useState(false)
  const [expl3, setExpl3] = useState(false)
  const [expl4, setExpl4] = useState(false)
  const [expl5, setExpl5] = useState(false)
  const [expl6, setExpl6] = useState(false)
  



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
  
  const handelInspi = () => {
 setTimeout(() => {
    setInpsi1(!inspi1)
  }, 200)
  setTimeout(() => {
    setInpsi2(!inspi2)
  }, 400)
  setTimeout(() => {
    setInpsi3(!inspi3)
  }, 600)
}
const handleExplo= () => {
  setTimeout(() => {
    setExpl1(!expl1)
  }, 300)
  setTimeout(() => {
    setExpl2(!expl2)
  }, 400)
  setTimeout(() => {
    setExpl3(!expl3)
  }, 500)
  setTimeout(() => {
    setExpl4(!expl4)
  }, 600)
  setTimeout(() => {
    setExpl5(!expl5)
  }, 700)
  setTimeout(() => {
    setExpl6(!expl6)
  }, 800)

}
  return (
    <div className='margin-rules-borrom'>
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
        <div style={{fontSize:"calc(12px + 2.5vw)"}}> Manual de instrucciones del juego</div>
        <div style={{width:"10%"}}> 
            <Link   onClick={()=> setDude(!dude)}>
            {dude ?  
              <FadeInOut show={showPage} duration={200}>
                <i   className="button-show-dude-up fa-solid fa-user-tie fa-spin" ></i> 
                </FadeInOut>
                : 
                <FadeInOut show={showPage} duration={200}>
                <i className="button-show-dude-down fa-solid fa-user-tie fa-fade"></i> 
              </FadeInOut>
                }
            </Link>
        </div>
        {dude &&  
      <FadeInOut show={showPage} duration={400}>
        <div className='bubble-text-manual '>
          <img className="img-shop-info-manual" alt="Dude" />
          <div> Si algo no está escrito aquí, es que no lo has encontrado</div>
          <div>Tienes una barra de navegación a la izquierda con la que encontrar cosas más concretas. Información es poder! Y poder es dinero!</div>
        </div>
        </FadeInOut>

        }
          <div className='nav-show-stats-rules'> 
            <div>
                    <button className='btn-rules-toggle' style={{color:"grey"}} onClick={()=>{setBasic(!basic); setChar(false); setInpsi1(false);setInpsi2(false);setInpsi3(false);setExpl1(false);setExpl2(false);setExpl3(false);setExpl4(false);setExpl5(false);setExpl6(false)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-list"></i>Stats básicas
                    </button>
                    <button className='btn-rules-toggle' style={{color:"grey"}} onClick={()=>{setChar(!char); setBasic(false); setInpsi1(false);setInpsi2(false);setInpsi3(false);setExpl1(false);setExpl2(false);setExpl3(false);setExpl4(false);setExpl5(false);setExpl6(false)} }>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-hurricane"></i>Carácter
                    </button>
                    <button className='btn-rules-toggle' style={{color:"grey"}} onClick={()=> {handelInspi(); setBasic(false); setChar(false);setExpl1(false);setExpl2(false);setExpl3(false);setExpl4(false);setExpl5(false);setExpl6(false);setrPre(false); setrCha(false); setrLu(false); setrPer(false); setrKi(false)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-regular fa-lightbulb"></i><i className="fa-sharp fa-solid fa-raygun"></i>¡Inspírate!
                    </button>
                    <button className='btn-rules-toggle' style={{color:"grey"}} onClick={()=> {handleExplo(); setBasic(false); setChar(false); setInpsi1(false);setInpsi2(false);setInpsi3(false); setrPre(false); setrCha(false); setrLu(false); setrPer(false); setrKi(false);}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-bag-shopping"></i>Lista de objetos
                    </button>
              </div>
              <div>
                <button className='btn-rules-toggle' style={{color:"violet", fontSize:"calc(14px + 0.3vw)"}} 
                onClick={()=>{ setBasic(true); setrPre(true); setrCha(true); setrLu(true); setrPer(true); setrKi(true); setInpsi1(true);setInpsi2(true);setInpsi3(true);setExpl1(true);setExpl2(true);setExpl3(true);setExpl4(true);setExpl5(true);setExpl6(true);   }}>
                      <span></span><span></span><span></span><span></span>Abrir 
                </button>
                <button className='btn-rules-toggle' style={{color:"blue", fontSize:"calc(14px + 0.3vw)"}} 
                onClick={()=>{setChar(false); setBasic(false); setrPre(false); setrCha(false); setrLu(false); setrPer(false); setrKi(false); setInpsi1(false);setInpsi2(false);setInpsi3(false);setExpl1(false);setExpl2(false);setExpl3(false);setExpl4(false);setExpl5(false);setExpl6(false);  }}>
                      <span></span><span></span><span></span><span></span>Cerrar todo
                </button>
              </div>
            </div>
        <div className='bla'>
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
      {/* <FadeInOut show duration={400}>
              { <ExtraInfo/>}
      </FadeInOut> */}
        {/* explor start */}
      <div className='img-rules-inspi-container'>
        <FadeInOut show={expl1} duration={400}>
            {expl1 &&
            <img className='img-rules-inspi' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666704197/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_15.20.30_eqplj7.png" alt="inspire 3" />
            }
        </FadeInOut>
        <FadeInOut show={expl2} duration={400}>
            {expl2 &&
            <img className='img-rules-inspi' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666704197/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_15.20.19_sanazn.png" alt="inspire 3" />
            }
        </FadeInOut>
        <FadeInOut show={expl3} duration={400}>
            {expl3 &&
            <img className='img-rules-inspi' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666704197/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_15.20.56_cugkwd.png" alt="inspire 3" />
            }
        </FadeInOut>
        <FadeInOut show={expl4} duration={400}>
            {expl4 &&
            <img className='img-rules-inspi' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666704197/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_15.22.31_tklyfy.png" alt="inspire 3" />
            }
        </FadeInOut>
        <FadeInOut show={expl5} duration={400}>
            {expl5 &&
            <img className='img-rules-inspi' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666704197/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_15.20.40_ohxgoh.png" alt="inspire 3" />
            }
        </FadeInOut>
        <FadeInOut show={expl6} duration={400}>
            {expl6 &&
            <img className='img-rules-inspi' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666704200/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_15.21.06_tomssv.png" alt="inspire 3" />
            }
        </FadeInOut>

        </div>
        {/* explor end */}

        {/* inspiracion start */}
        <FadeInOut show={inspi1} duration={200}>
            {inspi1 &&
            <img className='m-2' width="90%" src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666698260/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_13.42.46_dl8bcg.png" alt="inspire 1" />
            }
        </FadeInOut>
      <FadeInOut show={inspi2} duration={200}>
            {inspi2 &&
            <img className='m-2' width="90%" src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666698261/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_13.43.02_gpniud.png" alt="inspire 2" />
              }
            </FadeInOut>
      <FadeInOut show={inspi3} duration={200}>
            {inspi3 &&

            <img className='m-2' width="90%" src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666698260/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_13.43.10_qvo0xf.png" alt="inspire 3" />
            }
        </FadeInOut>
        {/* inspiracion end */}
      </div>
        </FadeInOut>
      </div>
      <FadeInOut show="buttons" duration={6000}>
              <Creator/>
        </FadeInOut>
    </div>

    
  )
}

export default RuleScreen