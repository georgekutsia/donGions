import React, { useEffect, useState } from 'react'
import data from "../../data/dataPresentación"
import { SwordsBall } from '../../component'

function TrasteroScreen() {

  const [obs, setObs] = useState([])
  useEffect(() => {
    setObs(data)
  },[])

  return (
    <>
          <SwordsBall  ballDiv={"sky-sword"} ballImgs={"basic-basic"}/>
          <h5 className='title-shop big-armario'  >Objetos y útiles</h5>
          <div align="center">
              <div style={{borderColor:"olive"}} className='scrolling-space m-1'>
                    <div className="scrolling-wrapper">
                        {obs.map((ob) =>( 
                            <div key={ob.capa}  className="double-image-cards card"><h2><img className='img-card' width="405px" src={ob.trastero1} alt="En fabricación" /></h2>
                            </div>))}
                    </div>
              </div>
          </div>
          <h5 className='title-shop big-armario'  >Comida y bebida</h5>
          <div align="center">
              <div style={{borderColor:"olive"}} className='scrolling-space m-1'>
                    <div className="scrolling-wrapper">
                        {obs.map((ob) =>( 
                            <div key={ob.capa}  className="double-image-cards card"><h2><img className='img-card' width="405px" src={ob.trastero2} alt="En fabricación" /></h2>
                            </div>))}
                    </div>
              </div>
          </div>
    </>
  )
}

export default TrasteroScreen