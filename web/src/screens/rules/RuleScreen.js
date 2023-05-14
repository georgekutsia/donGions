import React, { useEffect, useState } from 'react'
import { BackgroundFloatingBuble, Characters, Charisma, Creator, NonSpecific, Kinesthesia, Luck, NavbarVertical, Perception, Presence, Effort, Combat, Npc, Dice, Dungeon, Talents } from '../../component'
import { EquipmentScreen, ArmorScreen } from '../index';
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
  const [dude, setDude] = useState(false)
  const [rDice, setRDice] =useState(false)

  const [basic, setBasic] = useState(false)
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

  const [rEffort, setREffort] = useState(false)
  const [rCombat, setRCombat] = useState(false)
  const [rNonSpecific, setRNonSpecific] = useState(false)
  const [rNpc, setRNpc] = useState(false)
  const [rEquipment, setREquipment] = useState(false)
  const [rArmor, setRArmor] = useState(false)
  const [rDungeon, setRDungeon] = useState(false)
  const [rTalent, setRTalent] = useState(true)

  const stats = () => setBasic(true)
  const presence = () => setrPre(true)
  const charisma = () => setrCha(true)
  const luck = () => setrLu(true)
  const perception = () => setrPer(true)
  const kinesthesia = () => setrKi(true)
  const effort = () =>setREffort(true)
  const combat = () =>setRCombat(true)



  const handelInspiOff = (onOff) => {
 setTimeout(() => {
    setInpsi1(!onOff)
  }, 200)
  setTimeout(() => {
    setInpsi2(!onOff)
  }, 400)
  setTimeout(() => {
    setInpsi3(!onOff)
  }, 600)
}

const handleExploOff= (onOf) => {
  setTimeout(() => {
    setExpl1(!onOf)
  }, 300)
  setTimeout(() => {
    setExpl2(!onOf)
  }, 400)
  setTimeout(() => {
    setExpl3(!onOf)
  }, 500)
  setTimeout(() => {
    setExpl4(!onOf)
  }, 600)
  setTimeout(() => {
    setExpl5(!onOf)
  }, 700)
  setTimeout(() => {
    setExpl6(!onOf)
  }, 800)
}
const handleingOn = () =>{
  handelInspiOff(false); handleExploOff(false); setBasic(true); setChar(true);setrPre(true); setrCha(true); setrLu(true); setrPer(true); setrKi(true); setREffort(true); setRCombat(true);setRNonSpecific(true);setRNpc(true); setREquipment(true); setRArmor(true); setRDice(true); setRDungeon(true); setRTalent(true)
}
const handleingOff = () =>{
  handelInspiOff(true); handleExploOff(true); setBasic(false); setChar(false);setrPre(false); setrCha(false); setrLu(false); setrPer(false); setrKi(false); setREffort(false); setRCombat(false);setRNonSpecific(false);setRNpc(false); setREquipment(false); setRArmor(false); setRDice(false); setRDungeon(false); setRTalent(true)
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
        <div className='titulo-pagina'> Manual de instrucciones del juego</div>
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
                    <button className={basic ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setBasic(!basic)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-list"></i>Básico
                    </button>
                    <button className={rCombat ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRCombat(!rCombat)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-people-arrows"></i>Combate
                    </button>
                    <button className={rEquipment ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setREquipment(!rEquipment)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-group-arrows-rotate"></i>Equipo
                    </button>
                    <button className={rArmor ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRArmor(!rArmor)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-shirt"></i>Armadura
                    </button>
                    <button className={char ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setChar(!char)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-hurricane"></i>Carácter
                    </button>
                    <button className={rNpc ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRNpc(!rNpc)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-people-group"></i>NPC
                    </button>
                    <button className={inspi1 ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); handelInspiOff(!true);}}>
                        <span></span><span></span><span></span><span></span><i className="fa-regular fa-lightbulb"></i><i className="fa-sharp fa-solid fa-raygun"></i>¡Inspírate!
                    </button>
                    <button className={expl1 ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); handleExploOff(!true);}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-bag-shopping"></i>Objetos
                    </button>
                    <button className={rEffort ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setREffort(!rEffort)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-child-reaching"></i>Esfuerzo
                    </button>
                    <button className={rNonSpecific ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRNonSpecific(!rNonSpecific)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-hands-asl-interpreting"></i>Conceptos
                    </button>
                    <button className={rDungeon ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRDungeon(!rDungeon)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-archway"></i>Mazmorras
                    </button>
                    <button className={rDice ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRDice(!rDice)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-solid fa-dice"></i>Dados
                    </button>
                    <button className={rDice ? 'btn-rules-on' : 'btn-rules-toggle'} style={{color:"grey"}} onClick={()=>{handleingOff(); setRTalent(!rTalent)}}>
                        <span></span><span></span><span></span><span></span><i className="fa-brands fa-connectdevelop"></i>Talentos
                    </button>
              </div>
              <div>
                <button className='btn-rules-toggle' style={{color:"violet", fontSize:"calc(14px + 0.3vw)"}} 
                onClick={()=>{handleingOn()}}>
                      <span></span><span></span><span></span><span></span><i className="fa-regular fa-folder-open"></i>  
                </button>
                <button className='btn-rules-toggle' style={{color:"blue", fontSize:"calc(14px + 0.3vw)"}} 
                onClick={()=>{handleingOff()}}>
                      <span></span><span></span><span></span><span></span><i className="fa-solid fa-folder-closed"></i>
                </button>
              </div>
            </div>
        <div className='bla'>
      <FadeInOut show={basic} duration={400}>
              {basic && <Rules/>}
        </FadeInOut>
      <FadeInOut show={rCombat} duration={400}>
              {rCombat && <Combat/>}
        </FadeInOut>
      <FadeInOut show={rEquipment} duration={400}>
              {rEquipment && <EquipmentScreen/>}
        </FadeInOut>
      <FadeInOut show={rArmor} duration={400}>
              {rArmor && <ArmorScreen/>}
        </FadeInOut>
      <FadeInOut show={rEffort} duration={400}>
              {rEffort && <Effort/>}
        </FadeInOut>
      <FadeInOut show={rNpc} duration={400}>
              {rNpc && <Npc/>}
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
      <FadeInOut show={rDungeon} duration={400}>
              {rDungeon && <Dungeon/>}
        </FadeInOut>
      <FadeInOut show={rNonSpecific} duration={400}>
              {rNonSpecific && <NonSpecific/>}
        </FadeInOut>
      <FadeInOut show={rDice} duration={400}>
              {rDice && <Dice/>}
        </FadeInOut>
      <FadeInOut show={rTalent} duration={400}>
              {rTalent && <Talents/>}
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