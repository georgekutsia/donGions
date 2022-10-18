import React, { useEffect, useState } from 'react'
import data from "../../data/dataPresentación"

function Shelves({vendingobject}) {
  const [obs, setObs] = useState([])
  useEffect(() => {
    setObs(data)
  },[])

  return (
    <div>
        <h5 className='title-shop'>Cascos Poderosos </h5>
        <div align="center">
          <div style={{borderColor:"cadetblue"}} className='scrolling-space m-1'>
                <div className="scrolling-wrapper">
                    {obs.map((ob) =>( 
                              <div key={ob.capa}  className="mx-2 card"><h2><img className='img-card' width="205px" src={`${vendingobject}`} alt="dsa" /></h2></div>
                    ))}
                </div>
          </div>
      </div>
    </div>
  )
}

export default Shelves