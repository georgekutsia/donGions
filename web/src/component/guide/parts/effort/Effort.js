import React from 'react'

function effort() {
  return (
    <>
      <div style={{backgroundColor:"rgb(2, 12, 5)"}} className='background-rule-info'>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-esfuerzo'> Esfuerzo</h1> 
        <img className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682214408/donGions%20imgs/characters/2ae9b3fd2ac21fc31bf24dd8c7a030fb_besi5u.png" alt="Charisma"/>
      <div className='d-flex justify-content-evenly'>
        <div><span className='texto-resaltado-suerte-stats'> Puedes hacer simple,  doble o incluso triple esfuerzo, dependiendo de tu nivel</span>
      </div>
      </div>
          <article  align="center" className='background-list-actions'>
          &nbsp;&nbsp;&nbsp; El esfuerzo amplifica el efecto de cualquier acción básica, cuesta 1 esencia y no consume acciones. Debajo del 50% de vida consumen 2 esencias y por debajo de 20%, consume 3 esencias.
          </article>
          
          <ul>
            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"lime", borderBottom:"none"}}><i className="fa-solid fa-shield"></i> Esquiva con esfuerzo <span style={{fontStyle:"italic"}}>(Rodamiento): </span> </span>D6 incrementa la esquiva y ruedas a una casilla cercana. </li>
            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"lime", borderBottom:"none"}}><i className="fa-solid fa-shield"></i> Parada con esfuerzo <span style={{fontStyle:"italic"}}>(Rechazo): </span> </span> D6 incrementa la parada y con el impacto los desequilibras y dejas vulnerables.</li>
            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"lime", borderBottom:"none"}}><i className="fa-solid fa-shield"></i> Bloqueo con esfuerzo <span style={{fontStyle:"italic"}}>(Levantamiento): </span> </span> D6 incrementa el bloqueo y aprovecha la inercia para lanzarlo en alguna dirección. </li>
            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"lime", borderBottom:"none"}}><i className="fa-solid fa-shield"></i> Resistencia con esfuerzo <span style={{fontStyle:"italic"}}>(Absorción): </span> </span> D6 incrementa la resistencia y se absorbe una parte del hechizo, incrementando tu poder de hechizos en proporción durante la ronda.</li>
            <br />
            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"deepskyblue", borderBottom:"none"}}><i className="fa-solid fa-khanda"></i> Físico con esfuerzo <span style={{fontStyle:"italic"}}>(Atravesar): </span> </span> D6 incrementa el acierto físico. Según las propiedades del arma y la intención del portador, los efectos varían, pero generalmente las armas contundentes desplazan, las afiladas seccionan partes y las de cuerda inmovilizan y derriban.</li>
            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"deepskyblue", borderBottom:"none"}}><i className="fa-solid fa-khanda"></i> A distancia con esfuerzo <span style={{fontStyle:"italic"}}>(Calma): </span> </span> D6 incrementa el acierto a distancia o de lanzamiento de armas. El tiempo se ralentiza para ti y encuentras el punto débil para ocasionar el mayor daño posible.</li>
            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"deepskyblue", borderBottom:"none"}}><i className="fa-solid fa-khanda"></i> Hechizo con esfuerzo <span style={{fontStyle:"italic"}}>(Caos): </span> </span> D6 incrementa el acierto de hechizos. Aumenta el tamaño de tu hechizo básico y siempre hace el efecto especial del anillo.</li>
            <br />

            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"magenta", borderBottom:"none"}}><i className="fa-solid fa-person-walking-dashed-line-arrow-right"></i> Movimiento con esfuerzo: </span>Puede implicar cargar con peso(tipo cargar con un compañero herido) moverse al doble de velocidad, tener cuidado con las pisadas etc. depende de la intención del jugador, pero cada 3 metros/casillas de distancia (depende de las circunstancias) cuesta 1 esencia. </li>
            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"magenta", borderBottom:"none"}}> <i className="fa-solid fa-person-walking-dashed-line-arrow-right "></i><i className="fa-solid fa-shield"></i> Defensa en movimiento: </span> Intervenir sobre aliados que estén lejos, a punto de morir etc. Cualquier bloqueo o parada que se quiera usar también en movimiento, mientas escapas de un enemigo o te acercas a otro, requerirá esfuerzo</li>
            <li>&nbsp;<span className='nombre-concepto-negro' style={{color:"magenta", borderBottom:"none"}}> <i className="fa-solid fa-person-walking-dashed-line-arrow-right "></i><i className="fa-solid fa-khanda"></i> Ataque en movimiento: </span> Se pueden hacer ataques especiales también en movimiento (incluidos saltos o caída), con cripsis (desde oculto), inmovilizados (agarrados por un enemigo o atrapados etc)</li>
          </ul>
      </div>
    </>
  )
}

export default effort