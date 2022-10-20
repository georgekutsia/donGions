import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { BackgroundFloatingBuble, CarouselImgs1, Creator, Liliana, Register } from '../../component'
import VideoComp from '../../component/videos/VideoComp';

function RegisterScreen() {
  const [showInfo, setShowInfo] = useState(false)
  const [showVid, setShowVid] = useState(false)

  return (
    <div align="center">
        <div className='m-5'>
        <BackgroundFloatingBuble
            floatingBalls={
              "url(https://res.cloudinary.com/dfrda73uc/image/upload/v1666052942/donGions%20imgs/balllOfThings/pngwing.com_75_dvpaei.png)"
            }
            widthBall={"20px"}
            heigthBall={"20px"}
            idFlow={"circle-container"}
          />
          <CarouselImgs1/>
          <Link className='btn-rules-toggle' style={{color:"rgb(20, 21, 190)", fontSize:"30px", textDecoration:"none" }} onClick={()=>setShowVid(!showVid)}>
              <span></span><span></span><span></span><span></span>Ver archivos recuperados de Biblioplex
          </Link>
        </div>
    {showVid &&  <VideoComp/>}
    <Link className='btn-rules-toggle' style={{color:"rgb(190, 251, 190)", fontSize:"40px", textDecoration:"none"}} onClick={()=>setShowInfo(!showInfo)}>
          <span></span><span></span><span></span><span></span>Comenzar con el Registro
      </Link>
        <div className='mt-5'>
        {showInfo &&  <Register/>}
              <Creator/>
        </div>
    </div>
  )
}

export default RegisterScreen