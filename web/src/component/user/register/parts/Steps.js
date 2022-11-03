import React from "react";

function Steps({paso, pasoTexto, pasoTexto2}) {
  return (
    <div className="steps-margins">
        <div className="liquid">
            <h3>{paso}</h3>
            <h3>{paso}</h3>
            <h3>{paso}</h3>
            <h3>{paso}</h3>
        </div> 
        <div className="paso-description">{pasoTexto}</div>
        <div className="paso-description">{pasoTexto2}</div>
    </div>
  );
}

export default Steps;
