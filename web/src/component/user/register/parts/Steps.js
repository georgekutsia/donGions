import React from "react";

function Steps({paso, pasoTexto}) {
  return (
    <div className="steps-margins">
        <div className="liquid">
            <h2>{paso}</h2>
            <h2>{paso}</h2>
            <h2>{paso}</h2>
            <h2>{paso}</h2>
        </div> 
        <h3 className="mt-4">{pasoTexto}</h3>
    </div>
  );
}

export default Steps;
