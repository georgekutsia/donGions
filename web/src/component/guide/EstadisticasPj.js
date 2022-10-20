import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {Actions, MovesPlus, Brake, Enfoque, Combat} from "..";

function EstadisticasPj() {
  const [actions, setActions] = useState(false)
  const [moves, setMoves] = useState(false)
  const [brake, setBrake] = useState(false)
  const [focus, setFocus] = useState(false)
  const [combat, setCombat] = useState(false)
  return (
    <>
      <div className="gran-div background-rule-info">
          <div className="nombre-concepto-blanco" style={{color:"rgb(0, 245, 0)"}}> Vida:<span className="definicion-concepto">los puntos máximos que puedes tener. Al llegar a 0 mueres. No te puedes sanar por encima de esa cantidad.</span></div> 
          <div className="nombre-concepto-blanco" style={{color:"#00e5ff"}}> Maná:<span className="definicion-concepto">se gasta para usar hechizos y habilidades. Al comienzo del turno del personaje, se recupera un punto de maná. </span></div> 
          <div className="nombre-concepto-blanco" style={{color:"rgb(247, 0, 255)"}}> Esencia:<span className="definicion-concepto">se consigue al rematar una criatura. Sirve para gastar en hechizos y habilidades que requieren esencia</span></div> 
          <div className="nombre-concepto-blanco" id="s-salud"> <span className="texto-salud">Salud:</span><span className="definicion-concepto">es el total de vida, maná y esencia. Recuperar 1 punto de salud es recuperar 1 de cada.</span></div> 
          <div className="nombre-concepto-blanco" style={{color:"rgb(255, 255, 0)"}}><span>
          <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>setActions(!actions)}>
              <span></span><span></span><span></span><span></span>Acciones: </button>
                  </span><span className="definicion-concepto">La cantidad de cosas que puedes hacer en la ronda. Se recarga al comienzo del turno y algunas acciones se pueden gastar 
                  en el turno del oponente (defensas). No puede usar el mismo jugador más de 1 ataque seguido con el personaje sin intercalar con otro jugador. Puedes usar hasta 2 acciones 
                  (concentración no cuenta) antes del otro.</span>
          </div> 
              {actions && <Actions/>}
              <div className="nombre-concepto-blanco" style={{color:"red"}}> Daño:<span className="definicion-concepto" > Físico, mágico o a distancia. Lo marcan las estadísticas básicas del personaje más otros modificadores de equipo, arma, habilidad etc.</span></div> 
              <div className="nombre-concepto-negro" style={{color:"orange",}}> Carga:<span className="definicion-concepto"> Es la cantidad de objetos que puede tener equipados a la vez. La mayoría de los objetos llevan un número que representa la carga que tiene. 
              La carga total de tu equipo no puede superar la carga de tu personaje. El resto puede ir en la mochila y ser re-equipados. También marca la cantidad de Hechizos que se pueden transportar y objetos de arma o armadura que se puede llevar en la mochila.</span></div> 
          
              <div className="nombre-concepto-negro" style={{color:"rgb(247, 0, 255)"}}> <span>Movimiento:</span><span className="definicion-concepto" id="s-acciones">
              Las cuadrículas que te puedes desplazar. A mayor cantidad de puntos de movimiento, mayor<button className='btn-rules-toggle nombre-concepto-blanco' style={{ fontSize:"20px"}} onClick={()=>setMoves(!moves)}>
          <span></span><span></span><span></span><span></span>Velocidad
          </button></span></div> 

              {moves && <MovesPlus/>}
              
              <div className="nombre-concepto-blanco" style={{color:"rgb(255, 255, 0)"}}><span>
                  <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(220, 10, 90)"}} onClick={()=>setBrake(!brake)}>
              <span></span><span></span><span></span><span></span>Rotura: </button>
                  </span><span className="definicion-concepto">La mayoría de los objetos se pueden lanzar para intentar ocasionar daño u otros propósitos. Tienen probabilidad de romperse según las circunstancias.
                  </span>
                  </div> 
              {brake && <Brake/>}
              <div className="nombre-concepto-blanco" style={{color:"rgb(227, 182, 200)"}}> Acierto:<span className="definicion-concepto">Hay 3 tipos de acierto: cuerpo a cuerpo(físico), a distancia y mágico. Los aciertos marcan cuánto hace falta superar en una tirada de dados por acierto para impactar con el daño. Más detalle en la página de Combate</span></div> 
              <div className="nombre-concepto-blanco" style={{color:"rgb(227, 182, 200)"}}> Defensas:<span className="definicion-concepto">Hay 4 tipos de defensa: esquiva, bloqueo, parada y resistencia. Las defensas marcan cuánto hace falta superar en una tirada de dados por acierto para evitar el daño. 
                </span></div> 
                <a className='btn-rules-toggle nombre-concepto-blanco' style={{ fontSize:"20px"}} onClick={()=>setCombat(!combat)} href="#combat">
          <span></span><span></span><span></span><span></span> Mas detalle en la página de Combate</a>
              
              <div className="nombre-concepto-blanco" style={{color:"rgb(255, 255, 0)"}}><span>
                <button id="s-concentracion" className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>setFocus(!focus)}>
                  <span></span><span></span><span></span><span></span>Concentración: </button>
                  </span><span className="definicion-concepto">Se gasta una acción para aumentar el acierto de tu siguiente ataque o defensa</span>
              </div> 
              {focus && <Enfoque/>}
      </div>
              {combat && <Combat/>}
    </>
  );
}

export default EstadisticasPj;
