import React from 'react'

function StatsPlusFight({dSpeed, dPrecision, dReflex, dFirm, dTemple}) {
  return (
    <div>
      <div className="stats-damage-block">
          <div className="stats-damage">Velocidad: <span style={{color:"grey"}}>{dSpeed}</span>  </div>
          <div className="stats-damage">Precisión: <span style={{color:"grey"}}>{dPrecision}</span></div>
      </div>
      <div className="stats-damage-block">
          <div className="stats-damage">Reflejos: <span style={{color:"grey"}}>{dReflex}</span>  </div>
          <div className="stats-damage">Firmeza: <span style={{color:"grey"}}>{dFirm}</span></div>
          <div className="stats-damage">Temple: <span style={{color:"grey"}}>{dTemple}</span></div>
      </div>
    </div>
  )
}

export default StatsPlusFight