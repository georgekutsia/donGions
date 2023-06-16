import React from 'react'

function Npc() {
  return (
    <>
      <h1 id="s-tiempo" align="center" className='texto-resaltado-npc'> Recompensas</h1>
      <div className='nombre-npc-negro-titulo'> Criaturas y combate </div>
        <article>Cuando se mata a una criatura no aliada, se obtiene recompensa en esencia y maná igual a su coste, pero algunas criaturas,
        como las mecánicas, invocadas, ilusiones etc sólo otorgan un maná y una esencia, ya que no son realmente seres vivos. 
      <br /> Al matar criaturas de menos nivel que los personajes, se obtiene un maná y una esencia. Al matar criaturas del mismo nivel o superior, se obtiene lo que especifica el coste de la criatura.
</article>
      <h1 id="s-tiempo" align="center" className='texto-resaltado-npc'> Daño y efectos en NPCs</h1>
        <div className='nombre-npc-negro-titulo'> Ventajas en combate </div>
      <ul className='text-npc'>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682375627/donGions%20imgs/ruleImages/Vision_disminuida_uvu69y.jpg" alt="cegadas"/>
        <li>&nbsp;<span className='nombre-npc-negro'> Visión disminuida: </span>debe tirar por acierto para atacar y no puede bloquear ni parar ataques</li>
      </div>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682375628/donGions%20imgs/ruleImages/silenciada_l2yjsv.jpg" alt="silenciada"/>
        <li>&nbsp;<span className='nombre-npc-negro'> Silenciada</span>  no puede lanzar hechizos ni comunicarse</li>
      </div>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682375632/donGions%20imgs/ruleImages/atrapadas_mtbtrh.jpg" alt="inmovilizada"/>
        <li>&nbsp;<span className='nombre-npc-negro'> Inmovilizada, atrapada o derribada</span> +2 en acierto sobre esa criatura con cualquier ataque </li>
      </div>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682375627/donGions%20imgs/ruleImages/desorientada_lxlqta.jpg" alt="aturdida"/>
        <li>&nbsp;<span className='nombre-npc-negro'> Aturdida y desorientada</span> +3 en acierto sobre esa criatura con cualquier ataque </li>
      </div>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682375614/donGions%20imgs/ruleImages/ralentizadas_cbh6rp.webp" alt="ralentizada"/>
        <li>&nbsp;<span className='nombre-npc-negro'> Ralentizada o desequilibrada</span> les cuesta el doble de movimiento avanzar y precisión +1 con cualquier ataque</li>
      </div>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682375614/donGions%20imgs/ruleImages/lanzadas_i0ojg1.jpg" alt="elevada"/>
        <li>&nbsp;<span className='nombre-npc-negro'> Elevada o lanzada por los aires</span> +4 en acierto sobre esa criatura con hechizos o armas a distancia </li>
      </div>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682375614/donGions%20imgs/ruleImages/iluminadas_xsy8ko.jpg" alt="marcada"/>
        <li>&nbsp;<span className='nombre-npc-negro'> Marcadas o iluminadas</span> +3 en acierto de hechizos y reduce el coste de cada hechizo no básico 1 maná. Las criaturas iluminadas no pueden ocultarse ni volverse invisibles y algunos
                                                                                                      efectos de iluminación en área revelan las criaturas ocultas </li>
      </div>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682377009/donGions%20imgs/ruleImages/paralizadas_dqt3f0.jpg" alt="paralizadas"/>
        <li>&nbsp;<span className='nombre-npc-negro'>Paralizadas o incapacitadas</span> +3 en acierto y +1 en precisión con cualquier ataque</li>
      </div>
      </ul>
        <div className='nombre-npc-negro-titulo' >  Efectos perjudiciales </div>
      <ul className='text-npc'>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682383172/donGions%20imgs/ruleImages/veneno_gqdwg2.jpg" alt="veneno"/>
        <li>&nbsp;<span className='nombre-npc-negro'> Veneno: </span>hace daño a la criatura y dura tantos turnos como tu daño básico total (físico + distancia + hechizos). 
                                                                                                                      Si el daño no está especificado, es igual al daño mágico. Se puede acumular y reinician el contador de turnos. </li>
      </div>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682381523/donGions%20imgs/ruleImages/trampa_swbzsr.jpg" alt=""/>
        <li>&nbsp;<span className='nombre-npc-negro'> Trampas:</span> duran 3 rondas más uno por nivel. Inmovilizan a la criatura un turno más otro por nivel.</li>
      </div>
      <div className='d-flex'>
        <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682383149/donGions%20imgs/ruleImages/invisic%CC%A7_ggzeu6.jpg" alt=""/>
        <li>&nbsp;<span className='nombre-npc-negro'> Invisibilidad:</span> se rompe al hacer daño, usar habilidades o al interactuar con criaturas no aliadas. Su eficacia depende de tu nivel, 
                                                                                                                            de tu Presencia y tu devoción al color del hechizo o habilidad que dé invisibilidad   </li>
          </div>
          <div className='d-flex'>
            <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682381523/donGions%20imgs/ruleImages/quemado_cd0sj1.jpg" alt=""/>
            <li>&nbsp;<span className='nombre-npc-negro'> Quemadura:</span> Hace daño correspondiente el primer turno y la mitad del daño cada turno consiguiente hasta extinguirse, redondeado hacia abajo</li>
          </div>
          <div className='d-flex'>
            <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682383133/donGions%20imgs/ruleImages/miedo_vn2d7p.jpg" alt=""/>
            <li>&nbsp;<span className='nombre-npc-negro'> Miedo: </span> Corre despavorido 3 acciones + 1 por nivel. Se usa dado de 8 para indicar cada acción en qué dirección se mueve</li>
          </div>
          <div className='d-flex'>
            <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682381523/donGions%20imgs/ruleImages/herida_izxe0u.jpg" alt=""/>
            <li>&nbsp;<span className='nombre-npc-negro'> Heridas: </span>Los golpes críticos aplican heridas tantas rondas como el daño. La criatura pierde vidas igual al 20% del daño que se le hizo 
                                                                                                                    cada vez que se mueven o lo muevan. Se puede acumular y aumenta la duración de la herida. Es conveniente llevar contador de daño y de duración</li>
          </div>
          <div className='d-flex'>
            <img className='npc-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682383144/donGions%20imgs/ruleImages/electrocutado_byvzhx.jpg" alt=""/>
            <li>&nbsp;<span className='nombre-npc-negro'>Descarga eléctrica: </span> paraliza a la 6 acciones. Poco a poco recupera el control, pero la cantidad de metal que lleve encima aumenta la cantidad de acciones paralizadas y el tiempo de recuperación.</li>
          </div>
      </ul>
    </>
  )
}

export default Npc