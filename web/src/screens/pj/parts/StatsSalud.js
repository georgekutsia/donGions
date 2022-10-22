import React from "react";

function StatsSalud({dLevel, dLife, dMana, dMove, dActions, dReach, dWeight, dName, dSurname, dColor}) {
  return (
    <div style={{border:`3px ${dColor} solid`}}>
    <h5 className="position-relative d-flex flex-row-reverse" >Nivel: {dLevel}</h5>
      <h2 > {dName} {dSurname}  </h2>
      <div style={{border:`3px ${dColor} solid`}} className="stats-salud-block">
        <div className="">
          <div className="stats-salud">Vida: <span style={{color:"rgb(0, 245, 0)"}}>{dLife}</span>  </div>
          <div className="stats-salud">Carga: <span style={{color:"orange"}}>{dWeight}</span></div>
          <div className="stats-salud">Movimiento: <span style={{color:"rgb(247, 0, 255"}}>{dMove}</span></div>
        </div>
        <div className="">
          <div className="stats-salud">Maná: <span style={{color:"#00e5ff"}}>{dMana}</span></div>
          <div className="stats-salud">Acciones: <span style={{color:"yellow"}}>{dActions}</span></div>
          <div className="stats-salud">Alcance:  <span style={{color:"burlywood"}}>{dReach}</span></div>
        </div>
      </div>
    </div>
  );
}
export default StatsSalud;
