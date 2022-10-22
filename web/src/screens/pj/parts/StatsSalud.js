import React from "react";
import ButtonCounts from "./ButtonCounts";

function StatsSalud({dLevel, dLife, dMana, dMove, dActions, dReach, dWeight, dName, dSurname, dColor, hand}) {
  return (
    <div style={{border:`3px ${dColor} solid`}}>
      <h5 className="position-relative d-flex flex-row-reverse" >Nivel: {dLevel}</h5>
      <h2 > {dName} {dSurname}  </h2>
      <div style={{border:`3px ${dColor} solid`}} className="stats-salud-block">
        <div className="">
          <div className="stats-salud d-flex justify-content-between">Vida: <span style={{color:"rgb(0, 245, 0)"}}><ButtonCounts max={dLife} stat={dLife} dead="fa-skull-crossbones"  colorDead="red" colorText={"rgb(0, 245, 0)"}/></span>  </div>
          <div className="stats-salud d-flex justify-content-between">Carga: <span style={{color:"orange"}}><ButtonCounts max={20} stat={dWeight} dead="fa-weight-hanging" colorDead="grey" colorText={"orange"}/></span></div>
          <div className="stats-salud d-flex justify-content-between">Mov.: <span style={{color:"rgb(247, 0, 255"}}><ButtonCounts max={20} stat={dMove} dead="fa-shoe-prints" colorDead="grey" colorText={"rgb(247, 0, 255"}/></span></div>
        </div>
        <div className="">
          <div className="stats-salud d-flex justify-content-between">Maná: <span style={{color:"#00e5ff"}}><ButtonCounts max={dMana} stat={dMana} dead="fa-droplet-slash" colorDead="lightblue" colorText={"#00e5ff"}/></span></div>
          <div className="stats-salud d-flex justify-content-between">Acciones: <span style={{color:"yellow"}}><ButtonCounts max={20} stat={dActions} dead="fa-bolt" colorDead="grey" colorText={"yellow"}/></span></div>
          <div className="stats-salud d-flex justify-content-between">Alcance:  <span style={{color:"burlywood"}}><ButtonCounts max={dMana} stat={dReach} dead="fa-hands-clapping" colorDead="grey" colorText={"burlywood"}/></span></div>
        </div>
      </div>
    </div>
  );
}
export default StatsSalud;
