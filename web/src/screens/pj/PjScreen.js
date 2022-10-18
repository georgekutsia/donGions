import React, { useContext } from 'react'
import tagcloud from "https://cdn.skypack.dev/TagCloud@2.2.0";
import { SwordsBall } from '../../component';
import { AuthContext } from '../../context/AuthContext'




function PjScreen() {
  const info = useContext(AuthContext)
      
  return (
    <div className="moving-background-scenary" id='profile-size-box' align="center">
        <div className="moving-background-part">

        <h2>{info.pj.stats.name} {info.pj.stats.surname}</h2>
          <img className='profile-image-css' style={{border:`${info.pj.stats.style}`}} width="200px" src={info.pj.stats.image} alt="dasda" />
          <div className='d-'>
            <h5>life {info.pj.stats.life}</h5>
            <h5>mana {info.pj.stats.mana}</h5>
            <h5>move {info.pj.stats.move}</h5>
            <h5>weight {info.pj.stats.weight}</h5>
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