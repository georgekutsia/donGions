import React from "react";

function Steps({paso, pasoTexto, pasoTexto2}) {
  return (
    <div className="steps-margins">
        <div className="liquid">
            <h2>{paso}</h2>
            <h2>{paso}</h2>
            <h2>{paso}</h2>
            <h2>{paso}</h2>
        </div> 
        <h3 className="mt-4">{pasoTexto}</h3>
        <h3 className="mt-4">{pasoTexto2}</h3>
    </div>
  );
}

export default Steps;
