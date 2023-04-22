import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Effort from '../toggle-info/Effort'

function Kinesthesia() {
  const [effort, setEffor] = useState(true)
  return (
      <div style={{backgroundColor:"rgb(2, 12, 5)"}} className='background-rule-info'>
        <h1 align="center" className='texto-resaltado-cinestesia'>Cinestesia</h1> 
        <img className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682203259/donGions%20imgs/characters/cinestesia_eaf6yp.jpg" alt="Charisma"/>
      <div className='d-flex justify-content-evenly'>
        <div><span className='texto-resaltado-suerte-stats'> Cada punto de Cinestesia aumenta +2 el acierto al hacer movimientos con </span>
        <Link className='texto-resaltado-sobreesfuerzo' onClick={() => setEffor(!effort)}>Sobreesfuerzo</Link> </div>
      </div>
        {effort && <Effort/>}
          <article id="s-cinestesia" align="center" className='background-list-actions'>
          &nbsp;&nbsp;&nbsp; Los jugadores con Cinestesia obtienen mejores habilidades físicas para movimientos que en principio escapan a sus capacidades. Con varios puntos de cinestesia,
          solo te delimita tu imaginación a la hora de luchar, escapar o en general, rolear 
          </article>
          <ul>
            <li><i className="fa-solid fa-dumbbell"></i>&nbsp; Disminuye en 2 las acciones necesarias para reequiparte por cada punto de cinestesia</li>
            <li><i className="fa-solid fa-dumbbell"></i>&nbsp; Permite bloquear y parar por la espalda. La disminución de la defensa tras fracasar la esquiva disminuye en 1</li>
            <li><i className="fa-solid fa-dumbbell"></i>&nbsp; Tras fallar en un ataque cuerpo a cuerpo, puedes atacar con acción gratuita con otra parte del cuerpo por cada punto </li>
            <li><i className="fa-solid fa-dumbbell"></i>&nbsp; Cada punto de Cinestesia aumenta en 1 el acierto otorgado por Euforia y puedes lanzar 2 armas arrojadizas a la vez.</li>
            <li><i className="fa-solid fa-dumbbell"></i>&nbsp;	Disminuye en 1 punto el requisito para que algo cuente como crítico, incluso resultados de dados naturales</li>
            <li><i className="fa-solid fa-dumbbell"></i>&nbsp; Puedes usar los artefactos con activación desde tu mochila que tengan igual o menor carga que tus puntos de cinestesia.
                                                                        Lo mismo pasa con lanzar armas o activar otras habilidades de objetos</li>
            <li><i className="fa-solid fa-dumbbell"></i>&nbsp; Los jugadores con <span style={{color:"green"}}>Cinestesia</span> que también tienen <span style={{color:"rgb(237, 0, 254)"}}>Suerte</span>, tienen mejores oportunidades para evitar explosiones o ataques 
            por sorpresa. El jugador puede elegir lanzar un D8 en lugar del D6 y asignar a los dos números adicionales la habilidad con la que quiere evitar la explosión. Si tiene 2 de <span style={{color:"green"}}>Cinestesia</span>/<span style={{color:"rgb(237, 0, 254)"}}>Suerte</span>, 
            puede tirar D10 y elegir otros 2 números para la habilidad que prefiere. Por ejemplo 1 para bloqueo, 2 para parada, 3 para resistencia y 4-5-6 para esquiva. Alguien con +1 <span style={{color:"green"}}>Cinestesia</span>/<span style={{color:"rgb(237, 0, 254)"}}>Suerte </span>  
            puede asignar el 7-8 a la esquiva.</li>
          </ul>
      </div>
  )
}

export default Kinesthesia