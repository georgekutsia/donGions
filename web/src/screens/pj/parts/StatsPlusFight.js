import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

function StatsPlusFight() {
  const stats = useContext(AuthContext)
  const st = stats.pj.stats
  const eq = stats.pj.equipped
  
  const speeded =  Math.trunc(eq.move / 3)
  const plusSpeed = st.speed + speeded
      let speedColor = "grey"
      if(plusSpeed > 0){
        speedColor = "green"
      }
  return (
    <div className='d-flex'>
      <div className="stats-damage-block">
          <div style={{color:`${speedColor}`}} className="stats-damage">Velocidad: <span >{plusSpeed}</span></div>
          <div className="stats-damage">Precisión: <span >{st.precision}</span></div>
          <div className="stats-damage">Marcialidad: <span>{st.marciality}</span></div>
      </div>
      <div className="stats-damage-block">
          <div className="stats-damage">Reflejos: <span>{st.reflex}</span>  </div>
          <div className="stats-damage">Firmeza: <span>{st.firm}</span></div>
          <div className="stats-damage">Temple: <span>{st.temple}</span></div>
      </div>
    </div>
  )
}

export default StatsPlusFight