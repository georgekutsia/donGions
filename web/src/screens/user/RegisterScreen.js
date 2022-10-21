import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {CSSTransition, SwitchTransition} from "react-transition-group"
import { BackgroundFloatingBuble, CarouselImgs1, Creator, Liliana, Register } from '../../component'
import VideoComp from '../../component/videos/VideoComp';

function RegisterScreen() {
  const [showInfo, setShowInfo] = useState(false)
  const [showVid, setShowVid] = useState(false)
  const [showCarousel, setShowCarousel] = useState(false)
  const [showVideosBiblioplex, setShowVideosBiblioplex] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [intro, setIntro] = useState(true)
  const [buttonSkip, setButtonSkip] = useState(true)

 const handleSkip = () => {
      setIntro(false)
      setShowCarousel(true);
      setShowVideosBiblioplex(true);
      setShowRegister(true);
  }

  setTimeout(() => {
      setShowCarousel(true);
  }, 17000); 
  setTimeout(() => {
      setShowVideosBiblioplex(true);
  }, 21000); 
  setTimeout(() => {
      setShowRegister(true);
      setButtonSkip(false)
      setIntro(false)
  }, 41000); 

  return (
    <div align="center" style={{paddingBottom:"129px"}}>
            <div className='d-flex position-fixed'>
                <Link className='btn-rules-toggle ' to="/frontpage" style={{color:"rgb(143, 201, 190)", fontSize:"16px", textDecoration:"none" }} onClick={handleSkip}>
                                <span></span><span></span><span></span><span></span>Regresar a la página de inicio
                </Link>
            </div>
        <div className='d-flex p-5 flex-row-reverse'>
            {buttonSkip && 
              <Link className='btn-rules-toggle' style={{color:"rgb(143, 21, 190)", fontSize:"16px", textDecoration:"none" }} onClick={handleSkip}>
                              <span></span><span></span><span></span><span></span>Saltar el video de introducción
              </Link>
            }
        </div>
                {intro &&
          <video 
                src="https://res.cloudinary.com/dfrda73uc/video/upload/v1666304598/videos/Grabacio%CC%81n_de_pantalla_2022-10-21_a_las_0.21.07_qlg8jm.mov"
                width="500" autoPlay muted >
        </video> }
        <div >
                      {showVideosBiblioplex && 
                        <Link className='btn-rules-toggle' style={{color:"rgb(201, 21, 190)", fontSize:"25px", textDecoration:"none" }} onClick={()=>setShowVid(!showVid)}>
                            <span></span><span></span><span></span><span></span>Archivos recuperados de Alberignos
                        </Link>
                      }
                  </div>
        <div className='m-5'>


        <BackgroundFloatingBuble
            floatingBalls={
              "url(https://res.cloudinary.com/dfrda73uc/image/upload/v1666052942/donGions%20imgs/balllOfThings/pngwing.com_75_dvpaei.png)"
            }
            widthBall={"20px"}
            heigthBall={"20px"}
            idFlow={"circle-container"}
          />
                  <div>
                        {showCarousel && <CarouselImgs1/>}
                  </div>

        </div>
    {showVid &&  <VideoComp/>}
            {showRegister &&     <Link className='btn-rules-toggle' style={{color:"rgb(190, 251, 190)", fontSize:"30px", textDecoration:"none"}} onClick={()=>setShowInfo(!showInfo)}>
          <span></span><span></span><span></span><span></span>Comenzar con el Registro
      </Link>}
        <div className='mt-5'>
        {showInfo &&  <Register/>}
              <Creator/>
        </div>
    </div>
  )
}

export default RegisterScreen