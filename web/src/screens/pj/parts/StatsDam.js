import React from 'react'
import ButtonCounts from "./ButtonCounts";

function StatsDam({ddFis, ddMag, ddDist, daFis, daMag, daDist}) {
  return (
    <div>
      <div className="stats-damage-block">
          <div className="stats-damage d-flex justify-content-between">Daño Físico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={ddFis} dead="fa-0"  colorDead="grey" colorText={"red"}/></span>  </div>
          <div className="stats-damage d-flex justify-content-between">Daño Mágico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={ddMag} dead="fa-0"  colorDead="grey" colorText={"red"}/></span>  </div>
          <div className="stats-damage d-flex justify-content-between">Daño Distan: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={ddDist} dead="fa-0"  colorDead="grey" colorText={"red"}/></span>  </div>
      </div>
    <div className="stats-damage-block">
    <div className="stats-damage d-flex justify-content-between">Ac Físico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={daFis} dead="fa-0"  colorDead="grey" colorText={"darksalmon"}/></span>  </div>
          <div className="stats-damage d-flex justify-content-between">Ac Mágico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={daMag} dead="fa-0"  colorDead="grey" colorText={"darksalmon"}/></span>  </div>
          <div className="stats-damage d-flex justify-content-between">Ac Distan: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={daDist} dead="fa-0"  colorDead="grey" colorText={"darksalmon"}/></span>  </div>
      </div>
    </div>
  )
}

export default StatsDam