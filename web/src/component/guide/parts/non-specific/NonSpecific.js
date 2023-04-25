import React from 'react'

function NonSpecific() {
  return (
    <>
      <div style={{backgroundColor:"rgb(2, 12, 5)"}} className='background-rule-info'>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Otros conceptos</h1> 
          <ul className="definicion-concepto">
            <li>&nbsp; <span className='nombre-stat-negro' style={{color:"burlywood", borderBottom:"none"}}><i className="fa-solid fa-circle-check"></i> Crítico: </span>
            Un efecto crítico puede ser cualquier tirada de dados natural que obtenga la máxima puntuación del dado. Puede ser para acierto, daño, defensa etc. 
            <br />
            &nbsp;&nbsp;&nbsp; Para que un jugador sufra daño crítico, debe recibir daño igual a al menos la mitad de su vida. 
            <br />
            &nbsp;&nbsp;&nbsp;Acierto crítico otorga 2 dados de 4 a jugadores de nivel 0, que incrementa en 1 dado adicional por nivel.
            <br />
            &nbsp;&nbsp;&nbsp;Daño crítico con armas cuerpo a cuerpo y a distancia causa heridas y/o daños graves en las criaturas 
            </li>
            <li>&nbsp; <span className='nombre-stat-negro' style={{color:"burlywood", borderBottom:"none"}}><i className="fa-solid fa-circle-check"></i> Velocidad de movimiento: </span>
            La velocidad de movimiento es útil para alcanzar a enemigos que huyen o escapar de los que te persiguen. Cada punto de velocidad de movimiento aumenta en 1 la cantidad de veces 
            que puedes repetir el mismo tipo de ataque durante el turno (físico, a distancia o de hechizo). El ataque debe ser una acción seguida de tu ataque y es gratuita. 
            </li>
          </ul>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-no-especificados'> Datos no especificados</h1> 
        <ul className="definicion-concepto">
          <li>&nbsp; <i style={{color:"turquoise"}} className="fa-solid fa-circle-check"></i> Armas que no especifican su carga de munición o forma de obtenerla, tienen carga de munición 5 </li>
          <li>&nbsp; <i style={{color:"turquoise"}} className="fa-solid fa-circle-check"></i>	Cualquier efecto que no especifique su duración, durará 1 turno. </li>
          <li>&nbsp; <i style={{color:"turquoise"}} className="fa-solid fa-circle-check"></i>	Cualquier redondeo o porcentaje siempre es mínimo 1. Si algo dice "20% de la vida total" y la vida son 3, sigue siendo 1 ya que se redondea siempre hacia arriba </li>
          <li>&nbsp; <i style={{color:"turquoise"}} className="fa-solid fa-circle-check"></i>	Cuando algo dice “de forma gratuita” o “es gratuito”, se refiere a que no cuesta maná, ni esencia, ni acción </li>
          <li>&nbsp; <i style={{color:"turquoise"}} className="fa-solid fa-circle-check"></i>	Si algo dura una ronda, significa que dura hasta el final del siguiente turno, lo que implica que si una ronda
            empieza en la fase de los jugadores, acaba cuando vuelve a tocarles, pero si empieza en el turno de los NPC, acabará al final del siguiente turno de los jugadores</li>
          <li>&nbsp; <i style={{color:"turquoise"}} className="fa-solid fa-circle-check"></i>	Cualquier capa, casco etc. que no especifique su absorción de daño mágico, absorbe daño igual al poder mágico del invocador. </li>
          <li>&nbsp; <i style={{color:"turquoise"}} className="fa-solid fa-circle-check"></i>	Armas y escudos que no especifican rotura y el porcentaje de daño reducido tienen: <span style={{color:"turquoise"}}> Rotura 1-5     Bloqueo o parada 60%</span></li>
        </ul>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Estadísticas que modifican otras estadísticas</h1> 
          <ul className="definicion-concepto">
            <li>&nbsp; <span className='nombre-stat-negro' style={{color:"burlywood", borderBottom:"none"}}><i className="fa-solid fa-circle-check"></i> Cada 3 puntos de <span style={{fontStyle:"italic", color:"violet"}}>movimiento </span> adicionales</span> obtienes 1 Velocidad de movimiento </li>
            <li>&nbsp; <span className='nombre-stat-negro' style={{color:"burlywood", borderBottom:"none"}}><i className="fa-solid fa-circle-check"></i> Cada punto de <span style={{fontStyle:"italic", color:"yellow"}}>velocidad de movimiento </span> </span> te permite repetir un tipo de ataque básico y es gratuito</li>
            <li>&nbsp; <span className='nombre-stat-negro' style={{color:"burlywood", borderBottom:"none"}}><i className="fa-solid fa-circle-check"></i> Cada 3 puntos de <span style={{fontStyle:"italic", color:"aquamarine"}}>rotura </span> disminuidas</span> aumentan el daño del arma lanzada 50%</li>
            <li>&nbsp; <span className='nombre-stat-negro' style={{color:"burlywood", borderBottom:"none"}}><i className="fa-solid fa-circle-check"></i> Cada 3 <span style={{fontStyle:"italic", color:"cornflowerblue"}}>tatuajes </span> </span> aumentan tu carisma +1</li>
          </ul>
      </div>
    </>
  )
}

export default NonSpecific