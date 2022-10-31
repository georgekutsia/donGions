import React, { useContext } from "react";
import ButtonCounts from "./ButtonCounts";
import { AuthContext } from '../../../context/AuthContext'

function StatsSalud() {
  const stats = useContext(AuthContext)
  const st = stats.pj.stats 
  const eq = stats.pj.equipped


  const tLife = st.life + +eq.life
  let tlcolor = "white"
  if(tLife > st.life){
    tlcolor = "lightgreen"
  }
  const tMana = st.mana + +eq.mana
  let tmcolor = "white"
  if(tMana > st.mana){
    tmcolor = "rgb(0, 229, 255)"
  }
  const tWeight = st.weight + +eq.weight
  let twcolor = "white"
  if(tWeight > st.weight){
    twcolor = "chocolate"
  }
  const tActions = st.actions + +eq.actions
  let tacolor = "white"
  if(tActions > st.actions){
    tacolor = "yellow"
  }
  const tMove = st.move + +eq.move
  let tmocolor = "white"
  if(tMove > st.move){
    tmocolor = "violet"
  }
  const tReach = st.reach + +eq.reach
  let trcolor = "white"
  if(tReach > st.reach){
    trcolor = "burlywood"
  }




  return (
    <div >
      <h6 className="d-flex flex-row-reverse" >Nivel: {stats.pj.character.level}</h6>
      <div className="plans-name"> {st.name} {st.surname} </div>
      <div  className="stats-salud-block">
        <div>
          <div className="stats-salud justify-content-between" style={{color:`${tlcolor}`}}>Vida: <span><ButtonCounts stat={tLife} dead="fa-skull-crossbones"  colorDead="red" colorText={"rgb(0, 245, 0)"}/></span>  </div>
          <div className="stats-salud justify-content-between" style={{color:`${twcolor}`}}>Carga: <span><ButtonCounts  stat={tWeight} dead="fa-weight-hanging" colorDead="grey" colorText={"orange"}/></span></div>
          <div className="stats-salud justify-content-between" style={{color:`${tmocolor}`}}>Mov.: <span style={{color:"rgb(247, 0, 255"}}><ButtonCounts stat={tMove} dead="fa-shoe-prints" colorDead="grey" colorText={"rgb(247, 0, 255"}/></span></div>
        </div>
        <div>
          <div className="stats-salud justify-content-between" style={{color:`${tmcolor}`}}>Maná: <span style={{color:"#00e5ff"}}><ButtonCounts stat={tMana} dead="fa-droplet-slash" colorDead="lightblue" colorText={"#00e5ff"}/></span></div>
          <div className="stats-salud justify-content-between" style={{color:`${tacolor}`}}>Acciones: <span style={{color:"yellow"}}><ButtonCounts stat={tActions} dead="fa-bolt" colorDead="grey" colorText={"yellow"}/></span></div>
          <div className="stats-salud justify-content-between"  style={{color:`${trcolor}`}}>Alcance:  <span style={{color:"burlywood"}}><ButtonCounts stat={st.reach} dead="fa-hands" colorDead="grey" colorText={"burlywood"}/></span></div>
        </div>
      </div>
    </div>
  );
}
export default StatsSalud;
