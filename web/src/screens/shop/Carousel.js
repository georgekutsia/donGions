import React, { useEffect, useState } from 'react'
import data from "../../data/dataPresentación"
function Carousel() {
  const [obs, setObs] = useState([])
  useEffect(() => {
    setObs(data)
  },[])

  return (
    <>
<div className='scrolling-space'>
    <div className="scrolling-wrapper">
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
      <div className="card"><h2>Card</h2></div>
    </div>
</div>
    <div className='d-flex' align="center">
        {obs.map((ob) =>( 
          <div key={ob.capa} className='scrolling-space m-1'>
                <div  key={ob.capa} className="scrolling-wrapper">
                  <div className="card"><h2><img src={ob.capa} alt="dsa" /></h2></div>
                </div>
            </div>
        ))}
        <div align="center">

</div>
    </div>
    </>
  )
}

export default Carousel