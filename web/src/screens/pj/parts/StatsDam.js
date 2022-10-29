import React, { useContext } from 'react'
import ButtonCounts from "./ButtonCounts";
import { AuthContext } from '../../../context/AuthContext'


function StatsDam() {
  const stats = useContext(AuthContext)
  const st = stats.pj.stats
  const eq = stats.pj.equipped

    const dFis = st.damFis + +eq.damFis
    let dDisFis = "white"
    if(dFis > st.damFis){
      dDisFis = "orangered"
    }

    const dDist = st.damDist + +eq.damDist
    let dDisDist = "white"
    if(dDist > st.damDist){
      dDisDist = "orangered"
    }
    
    const dMag = st.damMag + +eq.damMag
    let dDisMag = "white"
    if(dMag > st.damMag){
      dDisMag = "orangered"
    }

    const aFis = st.acFis - eq.acFis
    let acmag = "white"
    if(aFis < st.acFis){
      acmag = "darksalmon"
    }

    const aDist = st.acDist - eq.acDist
    let acdist = "white"
    if(aDist < st.acDist){
      acdist = "darksalmon"
    }

    const aMag = st.acMag - eq.acMag
    let acMag = "white"
    if(aMag < st.acMag){
      acMag = "darksalmon"
    }

  return (
    <div>
      <div className="stats-damage-block">
          <div className="stats-damage d-flex justify-content-between" style={{color:`${dDisFis}`}}>Daño Físico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={dFis} dead="fa-0"  colorDead="grey" colorText={"red"}/></span>  </div>
          <div className="stats-damage d-flex justify-content-between" style={{color:`${dDisDist}`}}>Daño Mágico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={dMag} dead="fa-0"  colorDead="grey" colorText={"red"}/></span>  </div>
          <div className="stats-damage d-flex justify-content-between" style={{color:`${dDisMag}`}}>Daño Distan: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={dDist} dead="fa-0"  colorDead="grey" colorText={"red"}/></span>  </div>
      </div>
    <div className="stats-damage-block">
    <div className="stats-damage d-flex justify-content-between" style={{color:`${acmag}`}}>Ac Físico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={aFis} dead="fa-0"  colorDead="grey" colorText={"darksalmon"}/></span>  </div>
          <div className="stats-damage d-flex justify-content-between" style={{color:`${acdist}`}}>Ac Mágico: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={aMag} dead="fa-0"  colorDead="grey" colorText={"darksalmon"}/></span>  </div>
          <div className="stats-damage d-flex justify-content-between" style={{color:`${acMag}`}}>Ac Distan: <span style={{transform: "scale(0.7)"}}><ButtonCounts max={20} stat={aDist} dead="fa-0"  colorDead="grey" colorText={"darksalmon"}/></span>  </div>
      </div>
    </div>
  )
}

export default StatsDam