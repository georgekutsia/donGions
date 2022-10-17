import React from 'react'

function Presence() {
  return (
    <div style={{backgroundColor:"rgba(30, 0, 255, 0.05)"}} className='background-rule-info'>
      <h1 align="center" className='texto-resaltado-presence'>Presencia</h1> 
      <div className='d-flex justify-content-evenly'> </div>
        <div align="center"><span className='texto-resaltado-suerte-stats'> Puedes tener amenaza positiva o negativa que afecta de forma opuesta a esta característica </span>
        </div>
        <article align="center" className='background-list-actions'>
        &nbsp;&nbsp;&nbsp; Durante el combate, las criaturas son más propensas a atacar a los jugadores que han hecho más daño a la criatura 
        <span style={{fontStyle: "italic", color:"	lightyellow"}}> (generado más amenaza)</span>, aunque algunos reaccionan a veces a otras cosas<span style={{fontStyle: "italic", color:"	lightyellow"}}> (cierto tipo de magia, acciones etc)</span>. 
        Presencia es una habilidad que genera Amezada adicional, llama la atención sobre el jugador etc.  
        </article>
        <ul>
          <li><i class="fa-solid fa-person-rays"></i>&nbsp; Permite esconderse, ocultarse o incluso desaparecer más fácilmente durante el combate.</li>
          <li><i class="fa-solid fa-person-rays"></i>&nbsp; Permite robar, colarse en lugares y atacar desde oculto, siendo más difícil de detectar.</li>
          <li><i class="fa-solid fa-person-rays"></i>&nbsp; Los jugadores con presencia disminuida son menos propensos a ser atacados al luchar en grupo, incluso haciendo más daño.</li>
          <li><i class="fa-solid fa-person-rays"></i>&nbsp; Afecta a la eficacia de las ilusiones y cierto tipo de magia invocada.</li>
          <li><i class="fa-solid fa-person-rays"></i>&nbsp; Los jugadores con Presencia disminuida que también tienen Percepción, obtienen un 100% de daño en su primer ataque desde oculto, además de notar el mejor momento para ocultarse de la vista de las criaturas. El porcentaje aumenta en proporción</li>
        </ul>
    </div>
  )
}

export default Presence