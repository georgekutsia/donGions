import React from 'react'

function Combat() {
  return (
    <>
      <h1 id="combat" align="center" className='texto-resaltado-combate'> Combate</h1>
      <h1 id="s-cinestesia" align="center" className='texto-resaltado-combate-tiempo'> Tiempo de combate</h1>
      <article className="definicion-concepto"> &nbsp;&nbsp;&nbsp; Cuando el grupo ataque o sea atacado, empieza el combate, las rondas y las cuentas.
        Cada comienzo de combate reinicia los ataques, hechizos, habilidades etc que tengan usos limitados por combate. Mientras haya transcurrido suficiente tiempo
        entre un combate y otro, se reinician las mismas de nuevo, aunque haya pasado poco tiempo. 
        <br />
          &nbsp;&nbsp;&nbsp;   Los combates se componen de cualquier cantidad de rondas que hagan 
        falta hasta que haya alguna resolución. Las<span style={{color:"saddlebrown"}}> Rondas</span> se componen de 2 <span style={{color:"chocolate"}}> Turnos</span>: el turno de los jugadores y el turno de los PNJ. 
        Dependiendo de cómo empiece el combate, se determina quien va primero de los dos. Los jugadores pueden planificar su turno como prefieran, 
        jugando en el orden que mejor venga para su estrategia. Cada comienzo de turno de los jugadores los personajes reinician sus <span style={{color:"sandybrown"}}> Acciones</span> 
        y también recuperan un punto de maná. Cada personaje recupera la cantidad de <span style={{color:"sandybrown"}}> Acciones</span> que le corresponda, generalmente 5, y puede gastarlas como 
        prefiera durante toda la ronda, tanto en su turno como en el de los PNJ. Si se quiren usar acciones de defensa, hay que dejar algunas acciones para el turno de defensa
        <div align="center" className='texto-resaltado-degradado'>Los jugadores sólo pueden usar 2 acciones seguidas (concentración no cuenta). <br /> Esto se ve afectado por Velocidad de Movimiento.</div>
          &nbsp;&nbsp;&nbsp; En resumen: Combate consiste de<span style={{color:"saddlebrown"}}> x Rondas</span> Cada Ronda tiene <span style={{color:"chocolate"}}>2 Turnos</span>: de los jugadores o de los PNJ. 
        Cada comienzo de Ronda se recuperan todas las acciones y maná. No se acumulan. 
        Cada turno tiene <span style={{color:"sandybrown"}}>5 Acciones</span>. Las acciones se reparten entre los 2 turnos como se desee.
        </article>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-ataques'> Ataques básicos</h1>
        <article className="definicion-concepto">
        <div className='d-flex'>
          <img className='combat-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682263734/donGions%20imgs/ruleImages/ataque_fisico_tlsnmn.jpg" alt="Charisma"/>
          <div className="nombre-concepto-blanco" style={{color:"red"}}> Ataque físico: <span className="definicion-concepto"> El daño básico de la estadística del personaje más cualquier modificador del arma, 
            habilidad, hechizo, aura etc. Puede ser también sin armas(desarmado), pudiendo pelear con cualquier parte del cuerpo</span>
          </div> 
        </div>
        <div className='d-flex'>
          <img className='combat-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682263462/donGions%20imgs/ruleImages/ataque_distancia_ene3hc.jpg" alt="Charisma"/>
          <div className="nombre-concepto-blanco" style={{color:"red"}}> Ataque a distancia: <span className="definicion-concepto"> con armas arrojadizas o armas a distancia. Tienen una carga determinada
            de munición que obtienes al entrar en combate. Se puede disparar a una distancia mayor que la que indican las estadísticas del personaje, pero cada casilla adicional disminuye el acierto en 3. 
            Se usa la suma total del Ac. y daño a distancia. Lanzar el arma es un ataque a distancia.</span>
          </div> 
        </div>
        </article>

        <h1 id="s-cinestesia" align="center" className='texto-resaltado-defensas'> Defensas básicas</h1>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
      <div>Combat</div>
    </>
  )
}

export default Combat