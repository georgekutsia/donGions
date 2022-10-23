import React, { useContext, useEffect, useState } from 'react'
import tagcloud from "https://cdn.skypack.dev/TagCloud@2.2.0";
import { Character, Inventory, Equiped, Materials, StatsSalud, StatsPlusFight, StatsDam, StatsDefence} from '../../screens';
import { AuthContext } from '../../context/AuthContext'
import FadeInOut from "../../component/FadeInOut";
import { Link } from 'react-router-dom';




function PjScreen() {
  const info = useContext(AuthContext)
  const [showPage, setShowPage] = useState(false)
  const [showPlusStats, setShowPlusStats] = useState(false)
  const [char, setChar] = useState(false)
  const [dispStats, setDispStats] = useState(true)
  const [back, setBack] = useState(false)
  
  useEffect(() => {
      setShowPage(true)
  }, [])
  return (
    <div className={back ? "moving-background-scenary" : "moving-background-part"} id='profile-size-box' align="center">
        <div className='d-flex change-background-profile'>
        <div>
              <Link style={{color:"grey"}} onClick={()=> setBack(!back)}>{back ? 
              <i  className="fa-solid fa-moon"></i>: <i className="fa-solid fa-mountain-sun"></i>}
              </Link>
        </div>
        </div>
        <div className='d-flex'>
              <Link onClick={() => setDispStats(!dispStats)}> 
              <img className='profile-image-css' style={{border:`${info.pj.stats.style} 3px solid`}} width="360px" src={info.pj.stats.image} alt="dasda" />
              </Link>
              <Link className='button-show-chars' onClick={()=> setChar(!char)}>{char ? <i className="fa-solid fa-angles-left"></i>: <i className="fa-solid fa-angles-right"></i>}</Link>
              {char &&
                <FadeInOut show={showPage} duration={200}>
                          <Character 
                          dKinesthesia={info.pj.character.kinesthesia} dPresence={info.pj.character.presence} dPerception={info.pj.character.perception} dLuck={info.pj.character.luck} dCharisma={info.pj.character.charisma}/>
                </FadeInOut>
              }
        </div>
        {!dispStats &&
        <div  style={{backgroundColor:"black", width:"680px"}}>
            <div className='d-flex' style={{border:"3px solid white"}}>
                <h4 className='ps-5'>Vida: {info.pj.stats.life}</h4>
                <h4 className='ps-5'>Mana: {info.pj.stats.mana}</h4>
                <h4 className='ps-5'>Movimiento: {info.pj.stats.move}</h4>
                <h4 className='ps-5'>Apellido{info.pj.stats.surname}</h4>
            </div>
                <div className='d-flex' style={{border:"3px solid white"}}>
                <h4 className='ps-5'>Nombre {info.pj.stats.name} </h4>
                <h4 className='ps-5'>Acciones: {info.pj.stats.actions}</h4>
                <h4 className='ps-5'>Alcance: {info.pj.stats.reach}</h4>
                <h4 className='ps-5'>Carga: {info.pj.stats.weight}</h4>
                </div>
            <div className='d-flex' style={{border:"3px solid white"}}>
                <h4 className='ps-5'>Nivel: {info.pj.character.level}</h4>
                <h4 className='ps-5'>Esquiva: {info.pj.stats.dodge}</h4>
                <h4 className='ps-5'>Bloqueo: {info.pj.stats.block}</h4>
                <h4 className='ps-5'>Parada: {info.pj.stats.parry}</h4>
            </div>
            <div className='d-flex' style={{border:"3px solid white"}}>
                <h4 className='ps-5'>Resistencia: {info.pj.stats.resist}</h4>
                <h4 className='ps-5'>Velocidad: {info.pj.stats.speed}</h4>
                <h4 className='ps-5'>Precisión: {info.pj.stats.precision}</h4>
                <h4 className='ps-5'>Reflejos: {info.pj.stats.reflex}</h4>
            </div>
            <div className='d-flex' style={{border:"3px solid white"}}>
                <h4 className='ps-5'>Firmeza: {info.pj.stats.firm}</h4>
                <h4 className='ps-5'>Temple: {info.pj.stats.temple}</h4>
                <h4 className='ps-5'>Marcialidad: {info.pj.stats.marciality}</h4>
            </div>
        </div>
        }
    {dispStats &&
    <div>
      <FadeInOut show={showPage} duration={1200}>
        <div className='big-box-stats float-start'>
            <div  className='float-start inner-box-stats mb-5'>
              <StatsSalud 
              dLife={info.pj.stats.life} dMana={info.pj.stats.mana} dMove={info.pj.stats.move} dSurname={info.pj.stats.surname}  dName={info.pj.stats.name}
              dActions={info.pj.stats.actions} dReach={info.pj.stats.reach} dWeight={info.pj.stats.weight} dColor={info.pj.stats.style} dLevel={info.pj.character.level}/>
              <StatsDam  ddFis={info.pj.stats.damFis}  ddDist={info.pj.stats.damDist}  ddMag={info.pj.stats.damMag}
                        daFis={info.pj.stats.acFis} daMag={info.pj.stats.acDist}  daDist={info.pj.stats.acMag}
              />
              <StatsDefence  dDodge={info.pj.stats.dodge}  dBlock={info.pj.stats.block} dParry={info.pj.stats.parry} dResist={info.pj.stats.resist} dColor={info.pj.stats.style}/>
              <Link onClick={() => setShowPlusStats(!showPlusStats)} className='button-mostrar-mejoradas'>Mostrar las estadísticas mejoradas</Link>
              {showPlusStats && 
                <FadeInOut show={showPage} duration={1000}>
                  <StatsPlusFight dSpeed={info.pj.stats.speed} dPrecision={info.pj.stats.precision}  dReflex={info.pj.stats.reflex} 
                            dFirm={info.pj.stats.firm} dTemple={info.pj.stats.temple} dMarciality={info.pj.stats.marciality}/>
                      </FadeInOut>
            }
            </div>
        {/* <Inventory/>
        <Equiped/>
        <Materials/>
          <div className='d-'>
            <h5>marcialidad {info.pj.stats.marciality}</h5>
            <h5>Oros {info.pj.gold}</h5>
            <h5>Lugar {info.pj.place}</h5>
          </div> */}
          </div>
        </FadeInOut>
      </div>
        }
    </div>
  )
}

export default PjScreen