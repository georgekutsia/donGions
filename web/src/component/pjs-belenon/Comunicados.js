import React from 'react'

function Comunicados() {
  return (
    <div>
          <div style={{border:"3px white solid", width:"800px"}}>
            <video 
            src="/videos/George3.mov" 
            width="500" controls ></video>
            <h1>Propuesta de George</h1>
          </div>
          <div style={{border:"3px white solid", width:"800px"}}>
            <video 
            src="/videos/EncargoDeAmian.mp4" 
            width="500" controls ></video>
            <h1>Encargo de Amian</h1>
          </div>
    </div>
  )
}

export default Comunicados