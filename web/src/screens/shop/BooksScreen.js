import React, { useEffect, useState } from 'react'
import { SwordsBall } from '../../component'
import data from "../../data/dataPresentación"
function Books() {
  const [obs, setObs] = useState([])
  useEffect(() => {
    setObs(data)
  },[])
  return (
    <div align="center" >
        <SwordsBall  ballDiv={"sky-sword"} ballImgs={"book-book"}/>
        <h5 className='title-shop' >Libros de Inspiración</h5>
          <div align="center" >
            <div>
                <div style={{borderColor:"maroon"}} className='scrolling-space m-1'>
                      <div className="scrolling-wrapper">
                          {obs.map((ob) =>( 
                              <div key={ob.capa}  className="mx-2 card"><h2><img className='img-card' width="205px" src={ob.libros1} alt="En fabricación" /></h2>
                              </div>))}
                      </div>
                </div>
            </div>
        </div>
        <h5 className='title-shop'>Páginas malditas</h5>
          <div align="center" >
            <div>
                <div style={{borderColor:"maroon"}} className='scrolling-space m-1'>
                      <div className="scrolling-wrapper">
                          {obs.map((ob) =>( 
                              <div key={ob.capa}  className="mx-2 card"><h2><img className='img-card' width="205px" src={ob.libros2} alt="En fabricación" /></h2>
                              </div>))}
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Books