import React from 'react'
import ButtonCounts from './ButtonCounts'

function StatsDefence({dDodge, dBlock, dParry, dResist, dColor}) {
  return (
  <div >
    <div  style={{border:`3px ${dColor} solid`}}   className="stats-salud-block">
      <div  className="">
      <div className="stats-salud d-flex justify-content-between">Esquiva: <span style={{color:"rgb(0, 245, 0)"}}><ButtonCounts max={20} stat={dDodge} dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
      <div className="stats-salud d-flex justify-content-between">Resistencia: <span style={{color:"rgb(0, 245, 0)"}}><ButtonCounts max={20} stat={dResist} dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
      </div>
      <div   className="">
      <div className="stats-salud d-flex justify-content-between">Bloqueo: <span style={{color:"rgb(0, 245, 0)"}}><ButtonCounts max={20} stat={dBlock} dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
      <div className="stats-salud d-flex justify-content-between">Parada: <span style={{color:"rgb(0, 245, 0)"}}><ButtonCounts max={20} stat={dParry} dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>

      </div>
    </div>
  </div>
  )
}

export default StatsDefence