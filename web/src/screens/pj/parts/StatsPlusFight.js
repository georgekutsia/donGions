import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

function StatsPlusFight({dSpeed, dPrecision, dReflex, dFirm, dTemple, dMarciality}) {
  const stats = useContext(AuthContext)
  const st = stats.pj.stats

  return (
    <div>
      <div className="stats-damage-block">
          <div className="stats-damage">Velocidad: <span style={{color:"grey"}}>{st.speed}</span>  </div>
          <div className="stats-damage">Precisión: <span style={{color:"grey"}}>{st.precision}</span></div>
          <div className="stats-damage">Marcialidad: <span style={{color:"grey"}}>{st.marciality}</span></div>
      </div>
      <div className="stats-damage-block">
          <div className="stats-damage">Reflejos: <span style={{color:"grey"}}>{st.reflex}</span>  </div>
          <div className="stats-damage">Firmeza: <span style={{color:"grey"}}>{st.firm}</span></div>
          <div className="stats-damage">Temple: <span style={{color:"grey"}}>{st.temple}</span></div>
      </div>
    </div>
  )
}

export default StatsPlusFight