import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

function Character() {
  const stats = useContext(AuthContext)
  const st = stats.pj.character
  
  return (
    <div className='d-flex stats-chars-box'>
        <div>
            <div style={{color:"rgb(237, 0, 254)"}} className="stats-chars">Suerte: <span >{st.luck}</span>  </div>
            <div  style={{color:"rgb(0, 246, 254)"}} className="stats-chars">Carisma: <span>{st.charisma}</span></div>
        </div>
        <div>
            <div style={{color:"rgb(255, 157, 0)"}}  className="stats-chars">Percepción: <span>{st.perception}</span></div>
            <div style={{color:"red"}} className="stats-chars">Presencia: <span>{st.presence}</span></div>
        </div>
        <div>
            <div style={{color:"rgb(4, 186, 4)"}} className="stats-chars">Cinestesia: <span>{st.kinesthesia}</span></div>
            <div style={{color:"rgb(20, 86, 214)"}} className="stats-chars">Algo: <span>{st.kinesthesia}</span></div>
        </div>
    </div>
  )
}

export default Character