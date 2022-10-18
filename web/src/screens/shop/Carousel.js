import React, { useEffect, useState } from 'react'
import data from "../../data/dataPresentación"
import Shelves from './Shelves'
function Carousel() {
  const [obs, setObs] = useState([])
  useEffect(() => {
    setObs(data)
  },[])

  return (
    <div align="center" >
        <div >
          <h5 className='title-shop big-armario'>Capas Hechizadas</h5>
          <div align="center" >
            <div>
                <div style={{borderColor:"maroon"}} className='scrolling-space m-1'>
                      <div className="scrolling-wrapper">
                          {obs.map((ob) =>( 
                              <div key={ob.capa}  className="mx-2 card"><h2><img className='img-card' width="205px" src={ob.capa} alt="dsa" /></h2>
                              </div>))}
                      </div>
                </div>
            </div>
        </div>
          </div>
          <h5 className='title-shop big-armario' style={{backgroundSize:"800px"}}>Botas y Cinturones Mágicos</h5>
          <div align="center">
              <div style={{borderColor:"olive"}} className='scrolling-space m-1'>
                    <div className="scrolling-wrapper">
                        {obs.map((ob) =>( 
                            <div key={ob.capa}  className="mx-2 card"><h2><img className='img-card' width="405px" src={ob.botas} alt="dsa" /></h2>
                            </div>))}
                    </div>
              </div>
          </div>
          <h5 className='title-shop big-armario'  style={{backgroundSize:"360px"}}>Artilugios </h5>
          <div align="center">
              <div style={{borderColor:"teal"}} className='scrolling-space m-1'>
                    <div className="scrolling-wrapper">
                        {obs.map((ob) =>( 
                            <div key={ob.capa}  className="mx-2 card"><h2><img className='img-card' width="205px" src={ob.random} alt="dsa" /></h2>
                            </div>))}
                    </div>
              </div>
          </div>
          <h5 className='title-shop big-armario'>Cascos Poderosos </h5>
          <div align="center">
            <div style={{borderColor:"cadetblue"}} className='scrolling-space m-1'>
                  <div className="scrolling-wrapper">
                      {obs.map((ob) =>( 
                            <div key={ob.capa}  className="mx-2 card"><h2><img className='img-card' width="205px" src={ob.casco} alt="dsa" /></h2>
                            </div>))}
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Carousel