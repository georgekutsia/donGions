import React, { useState } from 'react'
import { CarouselImgs1, Liliana, Register } from '../../component'

function RegisterScreen() {
  const [showInfo, setShowInfo] = useState(true)
  const handleShowInfo = () => setShowInfo(!showInfo)

  return (
    <>
    <div className='m-5'>
    <CarouselImgs1/>
    </div>
    <button className='btn-rules-toggle' style={{color:"rgb(20, 251, 190)"}} onClick={()=>setShowInfo(!showInfo)}>
          <span></span><span></span><span></span><span></span>Estadísticas del personaje
      </button>
    <div className='mt-5'>
    {showInfo &&  <Register/>}
   
    </div>
    </>
    
  )
}

export default RegisterScreen