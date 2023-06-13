import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
import {Actions, MovesPlus, Brake, Enfoque, Combat} from "..";

function EstadisticasPj() {
  const [actions, setActions] = useState(false)
  const [moves, setMoves] = useState(false)
  const [brake, setBrake] = useState(false)
  const [focus, setFocus] = useState(false)
  const [combat, setCombat] = useState(false)
  return (
    <>
      <h1 className="texto-resaltado-npc"> Estadísticas del personaje y las acciones que puede realizar</h1>
      <div className="background-rule-info">
          <div className="nombre-concepto-blanco" style={{color:"rgb(0, 245, 0)"}}><i className="fa-solid fa-heart-pulse fa-beat"></i> Vida:<span className="definicion-concepto">los puntos máximos que puedes tener. Al llegar a 0 mueres. No te puedes sanar por encima de esa cantidad.</span></div> 
          <div className="nombre-concepto-blanco" style={{color:"#00e5ff"}}><i className="fa-solid fa-droplet fa-fade"></i> Maná:<span className="definicion-concepto">se gasta para usar hechizos y habilidades. Al comienzo del turno del personaje, recuperas un punto.</span></div> 
          <div className="nombre-concepto-blanco" style={{color:"rgb(247, 0, 255)"}}><i className="fa-brands fa-cloudsmith fa-shake"></i> Esencia:<span className="definicion-concepto">se consigue al rematar una criatura. Sirve para gastar en hechizos y habilidades que requieren esencia</span></div> 
          <div className="nombre-concepto-blanco" id="s-salud"> <span className="texto-salud"><i className="fa-solid fa-heart-pulse fa-beat"></i><i className="fa-solid fa-droplet fa-fade"></i> <i className="fa-brands fa-cloudsmith fa-shake"></i>  Salud:</span><span className="definicion-concepto">es el total de vida, maná y esencia. Recuperar 1 punto de salud es recuperar 1 de cada.</span></div> 
          <div className="nombre-concepto-blanco" style={{color:"rgb(255, 255, 0)"}}><span>
          <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>setActions(!actions)}>
              <span></span><span></span><span></span><span></span><i className="fa-solid fa-person-running fa-flip"></i> Acciones: </button>
                  </span><span className="definicion-concepto">La cantidad de cosas que puedes hacer en la ronda. Se recarga al comienzo del turno y algunas acciones se pueden gastar 
                  en el turno del oponente (defensas). No puede usar el mismo jugador más de 1 ataque seguido con el personaje sin intercalar con otro jugador. Puedes usar hasta 2 acciones 
                  (concentración no cuenta) antes del otro.</span>
          </div> 
              {actions && <Actions/>}
              <div className="nombre-concepto-blanco" style={{color:"red"}}><i className="fa-solid fa-head-side-cough-slash fa-shake"></i> Daño:<span className="definicion-concepto" > Físico, mágico o a distancia. Lo marcan las estadísticas básicas del personaje más otros modificadores de equipo, arma, habilidad etc.</span></div> 
              <div className="nombre-concepto-negro" style={{color:"orange",}}><i className="fa-solid fa-weight-hanging"></i> Carga:<span className="definicion-concepto"> Es la cantidad de objetos que puede tener equipados a la vez. La mayoría de los objetos llevan un número que representa la carga que tiene. 
              La carga total de tu equipo no puede superar la carga de tu personaje. El resto puede ir en la mochila y ser re-equipados. También marca la cantidad de Hechizos que se pueden transportar y objetos de arma o armadura que se puede llevar en la mochila.</span></div> 

              <div className="nombre-concepto-negro" style={{color:"rgb(247, 0, 255)"}}> <span><i className="fa-solid fa-person-walking-dashed-line-arrow-right fa-shake"></i> Movimiento:</span><span className="definicion-concepto" id="s-acciones">
              Las cuadrículas que te puedes desplazar. A mayor cantidad de puntos de movimiento, mayor<button className='btn-rules-toggle nombre-concepto-blanco' onClick={()=>setMoves(!moves)}>
          <span></span><span></span><span></span><span></span>Velocidad
          </button></span></div> 
              {moves && <MovesPlus/>}
              <div className="nombre-concepto-blanco" style={{color:"rgb(255, 255, 0)"}}><span>
                  <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(220, 10, 90)"}} onClick={()=>setBrake(!brake)}>
              <span></span><span></span><span></span><span></span><i className="fa-solid fa-link-slash fa-shake"></i> Rotura: </button>
                  </span><span className="definicion-concepto">La mayoría de los objetos se pueden lanzar para intentar ocasionar daño u otros propósitos. Tienen probabilidad de romperse según las circunstancias.
                  </span>
                  </div> 
              {brake && <Brake/>}
              <div className="nombre-concepto-blanco" style={{color:"rgb(227, 182, 200)"}}><i className="fa-solid fa-crosshairs"></i> Acierto:<span className="definicion-concepto">Hay 3 tipos de acierto: cuerpo a cuerpo(físico), a distancia y mágico. Los aciertos marcan cuánto hace falta superar en una tirada de dados por acierto para impactar con el daño.</span>
                <a className='btn-rules-toggle nombre-concepto-blanco' style={{ fontSize:"20px"}} onClick={()=>setCombat(!combat)} href="#combat">
                <span></span><span></span><span></span><span></span> Mas detalle en la página de Combate</a>
              </div> 
              <div className="nombre-concepto-blanco" style={{color:"rgb(227, 182, 200)"}}><i className="fa-solid fa-shield-halved"></i> Defensas:<span className="definicion-concepto">Hay 4 tipos de defensa: esquiva, bloqueo, parada y resistencia. Las defensas marcan cuánto hace falta superar en una tirada de dados por acierto para evitar el daño. 
                <a className='btn-rules-toggle nombre-concepto-blanco' style={{ fontSize:"20px"}} onClick={()=>setCombat(!combat)} href="#combat">
                <span></span><span></span><span></span><span></span> Mas detalle en la página de Combate</a>
                </span></div> 
              
              <div className="nombre-concepto-blanco" style={{color:"rgb(255, 255, 0)"}}><span>
                <button id="s-concentracion" className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>setFocus(!focus)}>
                  <span></span><span></span><span></span><span></span><i className="fa-solid fa-brain fa-bounce"></i> Concentración: </button>
                  </span><span className="definicion-concepto">Se gasta una acción para aumentar el acierto de tu siguiente ataque o defensa</span>
              </div> 
              {focus && <Enfoque/>}
                        <div className="nombre-concepto-blanco" style={{color:"rgb(145, 45, 45)"}}><i className="fa-brands fa-connectdevelop"></i> Estadística básica:<span className="definicion-concepto">todos los puntos aportados por la rama de talentos más las estadísticas de tu Guía representan las Estadísticas Básicas del personaje. 
          El daño, las vidas, aciertos etc aportado por equipo, pociones, hechizos etc no cuentan para estadística básica. <br /> Ejemplo: si un hechizo hace tu daño de hechizos básico, solo se tiene en cuenta el de la rama de talentos + ficha de personaje y se ignora el aportado por el resto de objetos y efectos.
          <br /> Ejemplo: al sanar o dañar con un hechizo directo, se aplica la cantidad que dice el hechizo más el poder de hechizo básico del personaje. Si hay sanación o daño en tiempo, a menos que se indique, no se aplicará la estadística básica, si no la estadistica de Sanación. Cada 3 puntos de daño 
                de hechizos se obtiene 1 punto de Sanación. <br /> Ejemplo: si Nissa aplica una sanación en tiempo D4 y tiene Daño de hechizo +2, sólo sanará 1 vida por turno. Sin embargo, con daño de hechizos +7, ya que esto otorgaría 
                +2 en sanación, cada turno sanaría 1 + 2 vidas.</span></div> 
      </div>
              {combat && <Combat/>}
    </>
  );
} 

export default EstadisticasPj;
