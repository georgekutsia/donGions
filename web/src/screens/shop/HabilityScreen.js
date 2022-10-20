import React, { useEffect, useState } from 'react'
import { SwordsBall } from '../../component'
import data from "../../data/dataPresentación"
import Shelves from './Shelves'
function HabilityScreen() {
  const [obs, setObs] = useState([])
  useEffect(() => {
    setObs(data)
  },[])
  return (
    <div align="center" >
        <div >
        <SwordsBall  ballDiv={"sky-sword"} ballImgs={"ball-ball"}/>
          <h5 className='title-shop big-armario'  style={{backgroundSize:"60px"}}>Habilidades compartidas</h5>
          <div align="center">
              <div style={{borderColor:"teal", height:"700px"}} className='scrolling-space m-1'>
                  <div className="scrolling-wrapper" style={{height:"700px"}}>
                      {obs.map((ob) =>( 
                        <div key={ob.capa}  className="mx-2 card">
                            <h2>
                                <img className='img-card' width="205px" src={ob.hab1} alt="En fabricación"/>
                                <img className='img-card' width="205px" src={ob.hab2} alt="En fabricación"/>
                                <img className='img-card' width="205px" src={ob.hab3} alt="En fabricación"/>
                                <img className='img-card' width="205px" src={ob.hab4} alt="En fabricación"/>
                            </h2>
                        </div>))}
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default HabilityScreen