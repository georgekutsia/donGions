import React from 'react'

function StatsDefence({dDodge, dBlock, dParry, dResist, dColor}) {
  return (
  <div >
    <div  style={{border:`3px ${dColor} solid`}}   className="stats-salud-block">
      <div  className="">
        <div className="stats-salud">Esquiva: <span style={{color:"darksalmon"}}>{dDodge}</span>  </div>
        <div className="stats-salud">Resistencia: <span style={{color:"darksalmon"}}>{dBlock}</span></div>
      </div>
      <div   className="">
        <div className="stats-salud">Bloqueo: <span style={{color:"darksalmon"}}>{dParry}</span></div>
        <div className="stats-salud">Parada: <span style={{color:"darksalmon"}}>{dResist}</span></div>
      </div>
    </div>
  </div>
  )
}

export default StatsDefence