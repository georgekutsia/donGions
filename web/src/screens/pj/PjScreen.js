import React, { useContext, useEffect, useState } from 'react'
import tagcloud from "https://cdn.skypack.dev/TagCloud@2.2.0";
import { SwordsBall, Character, Inventory, Equiped, Materials, StatsSalud, StatsPlusAc, StatsPlusFight, StatsDam} from '../../screens';
import { AuthContext } from '../../context/AuthContext'
import FadeInOut from "../../component/FadeInOut";




function PjScreen() {
  const info = useContext(AuthContext)
  const [showPage, setShowPage] = useState(false)
  
  useEffect(() => {
      setShowPage(true)
  }, [])
  return (
    <div className="moving-background-scenary" id='profile-size-box' align="center">
        <div className="moving-background-part">

          <img className='profile-image-css' style={{border:`${info.pj.stats.style}`}} width="200px" src={info.pj.stats.image} alt="dasda" />


        <Character></Character>
        <Inventory></Inventory>
        <Equiped></Equiped>
        <Materials></Materials>
        <StatsSalud 
        dLife={info.pj.stats.life} dMana={info.pj.stats.mana} dMove={info.pj.stats.move} 
        dActions={info.pj.stats.actions} dReach={info.pj.stats.reach} dWeight={info.pj.stats.weight}/>
        <StatsPlusAc></StatsPlusAc>
        <StatsPlusFight></StatsPlusFight>
        <StatsDam></StatsDam>

        <h2>{info.pj.stats.name} {info.pj.stats.surname}</h2>
          <div className='d-'>
            <h5>life {info.pj.stats.life}</h5>
            <h5>mana {info.pj.stats.mana}</h5>
            <h5>move {info.pj.stats.move}</h5>
            <h5>Carga {info.pj.stats.weight}</h5>
            <h5>Alcance {info.pj.stats.reach}</h5>
            <h5 >actions {info.pj.stats.actions}</h5>
            <h5>Daño Físico {info.pj.stats.damFis}</h5>
            <h5>Daño a distancia {info.pj.stats.damDist}</h5>
            <h5>Daño mágico {info.pj.stats.damMag}</h5>
            <h5>Acierto físico {info.pj.stats.acFis}</h5>
            <h5>Acierto a distancia {info.pj.stats.acDist}</h5>
            <h5>Acierto mágico {info.pj.stats.acMag}</h5>
            <h5>precision {info.pj.stats.precision}</h5>
            <h5>velocidad {info.pj.stats.speed}</h5>
            <h5>marcialidad {info.pj.stats.marciality}</h5>
            <h5>esquiva {info.pj.stats.dodge}</h5>
            <h5>bloqueo {info.pj.stats.block}</h5>
            <h5>parada {info.pj.stats.parry}</h5>
            <h5>resistencia {info.pj.stats.resist}</h5>
            <h5>reflejos {info.pj.stats.reflex}</h5>
            <h5>firmeza {info.pj.stats.firm}</h5>
            <h5>temple {info.pj.stats.temple}</h5>
            <h5>parada {info.pj.stats.parry}</h5>
            <h5>Oros {info.pj.gold}</h5>
            <h5>Oros {info.pj.place}</h5>
          </div>
          <div  className=''>
            <h3>Destacas en {info.pj.character.name} <img src={info.pj.character.image} alt="323" width="100px" /> </h3> 
            <h5>Suerte {info.pj.character.luck}</h5>
            <h5>Carisma {info.pj.character.charisma}</h5>
            <h5>Percepción {info.pj.character.perception}</h5>
            <h5>Cinestesia {info.pj.character.kinesthesia}</h5>
            <h5>Presencia {info.pj.character.presence}</h5>
            <h5>Nivel {info.pj.character.level}</h5>
          </div>
      </div>
    </div>
  )
}

export default PjScreen