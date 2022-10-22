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

  useEffect(() => {
      setShowPage(true)
  }, [])
  return (
    <div className="moving-background-scenary" id='profile-size-box' align="center">
    {char &&
      <FadeInOut show={showPage} duration={200}>
                <Character dKinesthesia={info.pj.character.kinesthesia} dPresence={info.pj.character.presence} dPerception={info.pj.character.perception} dLuck={info.pj.character.luck} dCharisma={info.pj.character.charisma}/>
                </FadeInOut>
    }
        <div className='big-box-stats float-start'>
            <div>
            <img className='profile-image-css' style={{border:`${info.pj.stats.style} 3px solid`}} width="300px" src={info.pj.stats.image} alt="dasda" />

            <Link className='button-show-chars' onClick={()=> setChar(!char)}>{char ? <i className="fa-solid fa-angles-left"></i>: <i className="fa-solid fa-angles-right"></i>}</Link>

            </div>
            <div  className='float-start inner-box-stats'>
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
                            dFirm={info.pj.stats.firm} dTemple={info.pj.stats.temple}/>
                      </FadeInOut>
            }
            </div>
        <Inventory/>
        <Equiped/>
        <Materials/>
          <div className='d-'>
            <h5>marcialidad {info.pj.stats.marciality}</h5>
            <h5>Oros {info.pj.gold}</h5>
            <h5>Lugar {info.pj.place}</h5>
          </div>
        </div>
    </div>
  )
}

export default PjScreen