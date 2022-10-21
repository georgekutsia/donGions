import React from "react";

function StatsSalud({dLife, dMana, dMove, dActions, dReach, dWeight}) {
  return (
    <div className="stats-salud-block">
      <div className="">
        <div className="stats-salud">Vida: {dLife}</div>
        <div className="stats-salud">Carga: {dWeight}</div>
        <div className="stats-salud">Movimiento: {dMove}</div>
      </div>
      <div className="">
        <div className="stats-salud">Maná: {dMana}</div>
        <div className="stats-salud">Acciones: {dActions}</div>
        <div className="stats-salud">Alcance: {dReach}</div>
      </div>
    </div>
  );
}

export default StatsSalud;
