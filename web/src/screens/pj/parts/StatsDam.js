import React from 'react'

function StatsDam({ddFis, ddMag, ddDist, daFis, daMag, daDist}) {
  return (
    <div>
      <div className="stats-damage-block">
          <div className="stats-damage">D. físico: <span style={{color:"red"}}>{ddFis}</span>  </div>
          <div className="stats-damage">D. mágico: <span style={{color:"red"}}>{ddMag}</span></div>
          <div className="stats-damage">D. a distancia: <span style={{color:"red"}}>{ddDist}</span></div>
      </div>
      <div className="stats-damage-block">
          <div className="stats-damage">Ac físico: <span style={{color:"darksalmon"}}>{daFis}</span>  </div>
          <div className="stats-damage">Ac mágico: <span style={{color:"darksalmon"}}>{daMag}</span></div>
          <div className="stats-damage">Ac a distancia: <span style={{color:"darksalmon"}}>{daDist}</span></div>
      </div>
    </div>
  )
}

export default StatsDam