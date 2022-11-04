import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Notes, NoteForm, BackgroundFloatingBuble } from "../../component";
import FadeInOut from "../../component/FadeInOut";


function NotesScreen() {
  const[mode1, setMode1] = useState(true)
  const[mode2, setMode2] = useState(false)
  const[mode3, setMode3] = useState(false)
  const [dude, setDude] = useState(true)

  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
      setTimeout(() => {
        setDude(false)
      }, 6000)
  }, [])

  return (
    <div>
        <FadeInOut show={showPage} duration={1000}>
    {showPage && 
    <>
    <div className="ms-4">
      <Link  onClick={()=> setDude(!dude)}>
        {dude ?  
      <FadeInOut show={showPage} duration={200}>
            <i  className="button-show-dude-up fa-solid fa-user-tie fa-spin" style={{animationDuration: "1.3s", animationIterationCount:"forever"}}></i> 
        </FadeInOut>
            : 
            <FadeInOut show={showPage} duration={200}>
            <i className="button-show-dude-down fa-solid fa-user-tie fa-fade" style={{animationDirection: "reverse", animationDuration: "1.3s", animationIterationCount:"forever"}}></i> 
          </FadeInOut>
            }</Link>
      </div>
      {dude && 
        <>
        <FadeInOut show={showPage} duration={1000}>
          <div className="bubble-notes" >
              <img className="img-shop-info-notes" alt="Dude" />
              <div>&nbsp;&nbsp; Apunta las cosas importantes!! No necesitas añadir imágen ni descripción. Luego podrás pinchar en el icono superior derecho de cada nota para editarlo </div>
              <div>&nbsp;&nbsp;También tienes la opción de personalizar detalles visuales</div>
          </div>
        </FadeInOut>
        </>      
      }
      <BackgroundFloatingBuble floatingBalls=
      {"url(https://res.cloudinary.com/dfrda73uc/image/upload/v1665653141/donGions%20imgs/backgroundEffects/pngwing.com_70_czolhq.png)"} 
      widthBall={"50px"} heigthBall={"100px"} radiusBall={"2px"} idFlow={"square-flow"}/>
      <div className="ms-1">
      <div align="center"><NoteForm /></div>
      </div>
          <div className="d-flex">
            <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode1(true);setMode2(false);setMode3(false)}}>
            <span></span><span></span><span></span><span></span>Tabla pequeña
            </button>
            <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode2(true);setMode1(false);setMode3(false)}} >
            <span></span><span></span><span></span><span></span>Tabla Normal
            </button>
            <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode3(true);setMode2(false); setMode1(false)}} >
            <span></span><span></span><span></span><span></span>Tabla grande
            </button>
            {/* <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode2(true);setMode1(false);setMode3(false)}} >
            <span></span><span></span><span></span><span></span>Normal
            </button> */}
          </div>
        {mode1 && <Notes size={"calc(10px + 0.1vw)"} color={"blue"} width={"30%"} height={"250px"}  maxWidth={"170px"} imgWidth={"20%"}/>}
        {mode2 && <Notes size={"calc(14px + 0.5vw)"} color={"black"} width={"48%"} height={"300px"} maxWidth={"250px"} imgWidth={"23%"} />}
        {mode3 && <Notes size={"calc(16px + 0.5vw)"} color={"red"} width={"95%"} height={"400px"} maxWidth={"450px"} imgWidth={"27%"}/>}
          </>
        }
    </FadeInOut>
    </div>
  );
}

export default NotesScreen;
