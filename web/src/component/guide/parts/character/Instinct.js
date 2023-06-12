import React from 'react'

function Instinct() {
  return (
    <div style={{backgroundColor:"rgb(26, 16, 5)"}} className='background-rule-info '>
        <h1 align="center" className='texto-resaltado-instinct'>Instinto</h1> 
        <img className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1686490026/donGions%20imgs/charcter/pngwing.com_-_2023-06-11T142521.714_afa5et.png" alt="Instinct"/>

      <div className='d-flex justify-content-evenly'>
        <div><h4 style={{color: "rgb(120, 120, 0)"}} className='rules-show-shadow'>1-12 <span > <br /> Instinto Básico</span></h4> </div>
        <div><h4 style={{color: "rgb(150, 150, 0)"}} className='rules-show-shadow'>13-17 <span > <br /> Instinto Animal</span></h4> </div>
        <div><h4 style={{color: "rgb(220, 220, 0)"}} className='rules-show-shadow'>18-19 <span > <br /> Instinto Primordial</span></h4> </div>
        <div><h4 style={{color: "rgb(250, 250, 0)"}} className='rules-show-shadow'>20+ <span > <br /> Instinto Perfecto </span></h4> </div>
    </div>
        <article id="s-percepcion" align="center" className='background-list-actions'>
        &nbsp;&nbsp;&nbsp; Los jugadores con instinto mejorado tienen reflejos tan afinados que responden a situaciones que no han tenido tiempo de interpretar.
        </article>
        <article align="center" className='background-list-actions'>
        &nbsp;&nbsp;&nbsp; El DM estará atento de avisar al jugador con puntos de instinto cuando se le active. Al tirar por instinto, se sabrá cómo reacciona
        el jugador y qué tipo de información obtiene.
        </article>
        <ul>
          <li><i className="fa-solid fa-arrows-up-down-left-right"></i> &nbsp;  Por cada punto de Instinto obtienes +2 en cada tirada de Instinto</li>
          <li><i className="fa-solid fa-arrows-up-down-left-right"></i>&nbsp;	 Cuando hay que reaccionar a una explosión, ataque sorpresa o algo repentino, aumenta la tirada de dados en 2 para la reacción deseada por cada punto de Instinto</li>
          <li><i className="fa-solid fa-arrows-up-down-left-right"></i>&nbsp;	 A mayor instinto, eres más capaz de detectar si la criatura a la que enfrentas es más fuerte o débil, peligrosa o inofensiva etc. </li>
          <li><i className="fa-solid fa-arrows-up-down-left-right"></i>&nbsp;		Los jugadores con <span style={{color:"rgb(250, 250, 0)"}}>Instinto</span>  que también tienen puntos en <span style={{color:"green"}}>Cinestesia</span>, pueden volver 
          hacer un ataque al esquivar un ataque por sorpresa o emboscada. También ayuda para iniciar el combate.</li>
          <li><i className="fa-solid fa-arrows-up-down-left-right"></i>&nbsp;		Los jugadores con <span style={{color:"rgb(250, 250, 0)"}}>Instinto</span>  que también tienen puntos en <span style={{color:"orange"}}>Percepción</span>, son capaces 
          de evitar ataques críticos sobre ellos o sus aliados anticipándose a los eventos.</li>
        </ul>
    </div>
  )
}

export default Instinct