import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {CSSTransition, SwitchTransition} from "react-transition-group"
import { BackgroundFloatingBuble, CarouselImgs1, Creator, Liliana, Register } from '../../component'
import FadeInOut from '../../component/FadeInOut';
import VideoComp from '../../component/videos/VideoComp';

function RegisterScreen() {
  const [showInfo, setShowInfo] = useState(false)
  const [showVid, setShowVid] = useState(false)
  const [showCarousel, setShowCarousel] = useState(false)
  const [showVideosBiblioplex, setShowVideosBiblioplex] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [intro, setIntro] = useState(true)
  const [buttonSkip, setButtonSkip] = useState(true)
  const [buttons, setButtons] = useState(false)
  const [inspi1, setInpsi1] = useState(false)
  const [inspi2, setInpsi2] = useState(false)
  const [inspi3, setInpsi3] = useState(false)
  useEffect(() => {
      setButtons(true)
  }, []);

 const handleSkip = () => {
      setIntro(false)
      setShowCarousel(true);
      setShowVideosBiblioplex(true);
      setShowRegister(true)
  }
  const handelInspi = () => {
    setTimeout(() => {
       setInpsi1(!inspi1)
     }, 300)
     setTimeout(() => {
       setInpsi2(!inspi2)
     }, 500)
     setTimeout(() => {
       setInpsi3(!inspi3)
     }, 700)
   }
  setTimeout(() => {
      setShowCarousel(true);
  }, 17000); 
  setTimeout(() => {
      setShowVideosBiblioplex(true);
  }, 21000); 
  setTimeout(() => {
    setShowRegister(true)
  }, 30000); 

  setTimeout(() => {
      setButtonSkip(false)
      setIntro(false)
  }, 41000); 

  return (
    <div align="center" style={{paddingBottom:"129px"}}>
    <FadeInOut show={buttons} duration={2500}>
    {buttons &&
        <div className='d-flex'>
            <Link className='btn-rules-toggle' to="/frontpage" style={{color:"rgb(143, 201, 190)", fontSize:"16px", textDecoration:"none" }} onClick={handleSkip}>
                            <span></span><span></span><span></span><span></span>Regresar a la página de inicio
            </Link>
        </div>
    }
        <div className='d-flex p-5 flex-row-reverse'>
            {buttons && buttonSkip &&
              <Link className='btn-rules-toggle' style={{color:"rgb(143, 21, 190)", fontSize:"16px", textDecoration:"none" }} onClick={handleSkip}>
                              <span></span><span></span><span></span><span></span>Saltar el video de introducción
              </Link>
            }
        </div>
      </FadeInOut>
                {intro &&
          <video 
                src="https://res.cloudinary.com/dfrda73uc/video/upload/v1666304598/videos/Grabacio%CC%81n_de_pantalla_2022-10-21_a_las_0.21.07_qlg8jm.mov"
                width="500" autoPlay muted >
        </video> }
      <FadeInOut show={showVideosBiblioplex} duration={5000}>
                {showVideosBiblioplex && 
                  <div >
                  <Link className='btn-rules-toggle' style={{color:"rgb(201, 21, 190)", fontSize:"25px", textDecoration:"none" }} onClick={()=>setShowVid(!showVid)}>
                      <span></span><span></span><span></span><span></span>Archivos recuperados de Alberignos
                  </Link>
                    </div>
                }
      </FadeInOut>
      
        <div className='m-5'>
        <BackgroundFloatingBuble
            floatingBalls={
              "url(https://res.cloudinary.com/dfrda73uc/image/upload/v1666052942/donGions%20imgs/balllOfThings/pngwing.com_75_dvpaei.png)"
            }
            widthBall={"20px"}
            heigthBall={"20px"}
            idFlow={"circle-container"}
          />
    <FadeInOut show={showCarousel} duration={5000}>
                  <div>
                        {showCarousel && <CarouselImgs1/>}
                  </div>
      </FadeInOut>
        </div>
        {showVideosBiblioplex && 
        <button className='btn-rules-toggle' style={{color:"blue"}} onClick={handelInspi}>
                  <span></span><span></span><span></span><span></span>Inspírate un poco más...
              </button>
        }
        <div>
        <FadeInOut show={inspi1} duration={200}>
            {inspi1 &&
            <img className='m-2' width="900px" src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666698260/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_13.42.46_dl8bcg.png" alt="inspire 1" />
            }
        </FadeInOut>
      <FadeInOut show={inspi2} duration={200}>
            {inspi2 &&
            <img className='m-2' width="900px" src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666698261/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_13.43.02_gpniud.png" alt="inspire 2" />
              }
            </FadeInOut>
      <FadeInOut show={inspi3} duration={200}>
            {inspi3 &&

            <img className='m-2' width="900px" src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666698260/donGions%20imgs/rules%2B/Captura_de_pantalla_2022-10-25_a_las_13.43.10_qvo0xf.png" alt="inspire 3" />
            }
        </FadeInOut>
        </div>
            {showVid &&  <VideoComp/>}
    <FadeInOut show={showRegister} duration={5000}>
          <div>
                  {showRegister &&  <Link className='btn-rules-toggle' style={{color:"rgb(190, 251, 190)", fontSize:"30px", textDecoration:"none"}} onClick={()=>setShowInfo(!showInfo)}>
                  <span></span><span></span><span></span><span></span>Comenzar con el Registro
              </Link>}
          </div>
      </FadeInOut>

        <div className='mt-5'>
        <FadeInOut show={showInfo} duration={1500}>
        {showInfo &&  <Register/>}
      </FadeInOut>
        </div>
        <FadeInOut show="buttons" duration={16000}>
              <Creator/>
        </FadeInOut>
    </div>
  )
}

export default RegisterScreen