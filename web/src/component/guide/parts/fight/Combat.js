import React from 'react'

function Combat() {
  return (
    <>
      <h1 id="combat" align="center" className='texto-resaltado-combate'> Combate</h1>
      <h1 id="s-tiempo" align="center" className='texto-resaltado-combate-tiempo'> Tiempo de combate</h1>
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
        <div className='componente-ataque'>
          <h1 id="s-ataques" align="center" className='texto-resaltado-ataques'> Ataques básicos</h1>
          <div align="center"><span className='texto-resaltado-suerte-stats'>Se lanza un dado de 20 caras y se debe superar el acierto para que el daño impacte </span></div>
            <article className="definicion-concepto">
            <div className='combat-separation'>
              <div className='d-flex'>
                <img className='combat-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682263734/donGions%20imgs/ruleImages/ataque_fisico_tlsnmn.jpg" alt="Ataque físico"/>
                <div className="definicion-concepto"> <span className="nombre-concepto-blanco" style={{color:"red"}}>Ataque físico:</span>   El daño básico de la estadística del personaje más cualquier modificador del arma, 
                  habilidad, hechizo, aura etc. Puede ser también sin armas(desarmado), pudiendo pelear con cualquier parte del cuerpo. <br />&nbsp;&nbsp;&nbsp;	Todas las armas de dos manos se pueden sujetar con una, pero disminuye el acierto total en 1 por cada carga de cada arma y todos los golpes fallidos cuentan como contundentes
                </div> 
              </div>
              <div className='d-flex'>
                  <img className='combat-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682263462/donGions%20imgs/ruleImages/ataque_distancia_ene3hc.jpg" alt="Ataque a distancia"/>
                  <div className="definicion-concepto"> <span className="nombre-concepto-blanco" style={{color:"red"}}>Ataque a distancia:</span>  <span> con armas arrojadizas o armas a distancia. Tienen una carga determinada
                  de munición que obtienes al entrar en combate. Se puede disparar a una distancia mayor que la que indican las estadísticas del personaje, pero cada casilla adicional disminuye el acierto en 3. 
                  Lanzar el arma es un ataque a distancia.</span>
                </div> 
              </div>
              <div className='d-flex'>
                  <img className='combat-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682263462/donGions%20imgs/ruleImages/hechizos_p2nupz.jpg" alt="Ataque de hechizos"/>
                  <div className="definicion-concepto"> <span className="nombre-concepto-blanco" style={{color:"red"}}>Ataque con hechizos:</span>  <span> Necesitas objetos mágicos que te permitan lanzar 
                  tu hechizo básico o puedes usar cartas de hechizos. Los hechizos que no son básicos tienen acierto incrementado en 10.</span>
                </div> 
              </div>
              <div className='ataque-potenciado'>
                <h1 id="s-potenciados" align="center" className='texto-resaltado-ataques-potenciados'> Ataques básicos potenciados:</h1>
                <div>
                  <div className='d-flex'>
                    <div className='ataque-potenciado-titulo'>Precisión:</div>
                    <div className='ataque-potenciado-texto'>&nbsp;&nbsp;&nbsp;La cantidad de dados que se lanzan para el acierto. Con precisión +2 se lanzan 3 dados de 20 para el acierto y se elige el resultado más conveniente para la situación</div>
                  </div>
                  <div className='d-flex'>
                    <div className='ataque-potenciado-titulo'>Velocidad:</div>
                    <div className='ataque-potenciado-texto'>&nbsp;&nbsp;&nbsp;La cantidad de dados que cuentan para el daño en el acierto. De nada sirve ser rápido si no tienes precisión en los ataques. Si un jugador tiene 3 en precisión y 2 en velocidad, de los 4 dados que se lancen
                    para el acierto, puede elegir hasta 2 adicionales que le contarán como daño acertado.</div>
                  </div>
                  <div className='d-flex'>
                    <div className='ataque-potenciado-titulo'>Marcialidad:</div>
                    <div className='ataque-potenciado-texto'>&nbsp;&nbsp;&nbsp;Al luchar desarmado, obtienes un D4 para incrementar la esquiva. D6 en el nivel 2. D8 en el 3. 
                    Tras una esquiva crítica o por encima de 23, puedes contraatacar con ataque físico gratuito.</div>
                  </div>
                </div>
              </div>
            </div>
            </article>
        </div>
        <div className='componente-defensa'>
        <h1 id="s-defensas" align="center" className='texto-resaltado-defensas'> Defensas básicas</h1>
          <div align="center"><span className='texto-resaltado-suerte-stats'>Se lanza un dado de 20 caras y se debe superar el defensa correspondiente para defenderte con éxito</span></div>
            <article className="definicion-concepto">
            <div className='combat-separation'>
              <div className='d-flex'>
                <img className='combat-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682286161/donGions%20imgs/ruleImages/esquiva_btlgi3.png" alt="Esquiva"/>
                <div className="definicion-concepto"> <span className="nombre-concepto-blanco" style={{color:"green"}}>Esquiva:</span> Eludes completamente el daño. 
                  Con esquiva crítica puedes empujar un aliado cercano. Tras usar la esquiva (en caso de que falles) puedes usar una habilidad de parada, resistencia o bloqueo con acierto penalizado en 3
                </div> 
              </div>
              <div className='d-flex'>
                  <img className='combat-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682285955/donGions%20imgs/ruleImages/bloqueo_qso5e1.jpg" alt="Bloqueo"/>
                  <div className="definicion-concepto"> <span className="nombre-concepto-blanco" style={{color:"green"}}>Bloqueo:</span>  <span> Con escudos. Reduce el daño físico o de armas a distancia recibido
                  en porcentaje, indicado sobre los escudos. Si no está indicado, reduce 60% del daño. 
                  En bloqueo crítico reduce el daño otro 40%. El bloqueo que mitiga daño por encima del 100%, devuelve el daño extra mitigado a la criatura. No puedes bloquear por la espalda sin <span style={{color:"lime"}}> Cinestesia</span></span>
                </div> 
              </div>
              <div className='d-flex'>
                  <img className='combat-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682285953/donGions%20imgs/ruleImages/parada_drexs7.jpg" alt="Parada"/>
                  <div className="definicion-concepto"> <span className="nombre-concepto-blanco" style={{color:"green"}}>Parada:</span>  <span> sólo con armas cuerpo a cuerpo. Paras el ataque de un arma a distancia o 
                  cuerpo a cuerpo y reduces el daño en el porcentaje indicado sobre el arma. 
                  </span>
                </div> 
              </div>
              <div className='d-flex'>
                  <img className='combat-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682286156/donGions%20imgs/ruleImages/resistencia_hp4imw.jpg" alt="Resistencia"/>
                  <div className="definicion-concepto"> <span className="nombre-concepto-blanco" style={{color:"green"}}>Resistencia:</span>  <span> requiere capa o casco que otorgue la habilidad. Mitiga daño mágico equivalente
                  a tu daño mágico y disminuye tu acierto en la siguiente tirada en proporción al daño resistido. Algunos ataques mágicos se pueden esquivar.
                  </span>
                </div> 
              </div>
              <div className='ataque-potenciado'>
                <h1 id="s-potenciados" align="center" className='texto-resaltado-defensas-potenciados'> Defensas básicas potenciadas:</h1>
                <div>
                  <div className='d-flex'>
                    <div className='ataque-potenciado-titulo'>Reflejos:</div>
                    <div className='ataque-potenciado-texto'>la cantidad de dados que se tiran por esquiva y tus habilidades de movimiento</div>
                  </div>
                  <div className='d-flex'>
                    <div className='ataque-potenciado-titulo'>Firmeza:</div>
                    <div className='ataque-potenciado-texto'>la cantidad de dados que se tiran por bloqueo y parada y algunas habilidades de armas y escudos</div>
                  </div>
                  <div className='d-flex'>
                    <div className='ataque-potenciado-titulo'>Temple:</div>
                    <div className='ataque-potenciado-texto'>la cantidad de dados que se tiran por resistencia y el efecto que tienen</div>
                  </div>
                </div>
              </div>
            </div>
            </article>
        </div>
    </>
  )
}

export default Combat