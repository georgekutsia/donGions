import React from 'react'

function Perception() {
  return (
    <div style={{backgroundColor:"rgb(26, 16, 5)"}} className='background-rule-info '>
        <h1 align="center" className='texto-resaltado-percepcion'>Percepción</h1> 
        <img className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682202307/donGions%20imgs/characters/perception_jxcqqd.png" alt="Charisma"/>

      <div className='d-flex justify-content-evenly'>
        <div><h4 className='rules-show-shadow'>1-12- <span >Nada</span></h4> </div>
        <div><h4 className='rules-show-shadow'>13-17-<span >Poca Información</span></h4> </div>
        <div><h4 className='rules-show-shadow'>18-19 -<span >Información Útil</span></h4> </div>
        <div><h4 className='rules-show-shadow'>20+ <span >Mucha información </span></h4> </div>
    </div>
        <article id="s-percepcion" align="center" className='background-list-actions'>
        &nbsp;&nbsp;&nbsp; Al explorar, investigar o luchar, los jugadores con buena percepción tienes mucha ventaja para salir victoriosos en cada situación. Usa las tiradas de percepción 
        para obtener ventajas durante el combate, encontrar pistas o incluso encontrar una forma de sobrevivir una situación aparentemente imposible
        </article>
        <article align="center" className='background-list-actions'>
        &nbsp;&nbsp;&nbsp; Para analizar los puntos fuertes y débiles de las criaturas con las que se lucha, los jugadores pueden lanzar un tiro por percepción.
        Según el resultado, se obtiene más o menos información.
        </article>
        <ul>
          <li><i className="fa-solid fa-eye"></i> &nbsp; • Por cada punto de percepción	obtienes +3 en cada tirada de percepción</li>
          <li><i className="fa-solid fa-eye"></i>&nbsp;	•	Cada punto de percepción ignora un nivel de diferencia con las criaturas con las que se lucha</li>
          <li><i className="fa-solid fa-eye"></i>&nbsp;	•	Contrarresta criaturas con carisma, haciendo que seas menos vulnerable a engaños y distracciones </li>
          <li><i className="fa-solid fa-eye"></i>&nbsp;	•	Cada punto de Percepción aumenta en 1 las veces que puedes tirar por percepción en el turno</li>
          <li><i className="fa-solid fa-eye"></i>&nbsp;	•	Los jugadores con <span style={{color:"orange"}}>Percepción</span>  que también tienen puntos en <span style={{color:"rgb(237, 0, 254)"}}>Suerte</span>, al ver el contenido de cofres, 
          siempre muestran 1 carta mas por cada punto de <span style={{color:"orange"}}>Percepción</span> /<span style={{color:"rgb(237, 0, 254)"}}>Suerte</span> y tras repartir, devuelven una carta</li>
        </ul>
    </div>
  )
}

export default Perception