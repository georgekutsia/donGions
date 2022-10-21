import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Notes, NoteForm, BackgroundFloatingBuble } from "../../component";
import FadeInOut from "../../component/FadeInOut";


function NotesScreen() {
  const[mode1, setMode1] = useState(false)
  const[mode2, setMode2] = useState(true)
  const[mode3, setMode3] = useState(false)
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
  }, [])
  return (
    <div>
        <FadeInOut show={showPage} duration={1000}>
    {showPage && 
    <>
      <div className="bubble-notes" >
      <img className="img-shop-info-notes" alt="Dude" />
      <h6> Apunta las cosas importantes!! No necesitas añadir imágen ni descripción. Luego podrás pinchar en el icono superior derecho de cada nota para editarlo </h6>
      <h6>También tienes la opción de personalizar detalles visuales</h6>
      </div>
      <div className="ms-5">
      <BackgroundFloatingBuble floatingBalls=
      {"url(https://res.cloudinary.com/dfrda73uc/image/upload/v1665653141/donGions%20imgs/backgroundEffects/pngwing.com_70_czolhq.png)"} 
      widthBall={"50px"} heigthBall={"100px"} radiusBall={"2px"} idFlow={"square-flow"}/>
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
        {mode1 && <Notes size={"10px"} color={"blue"} width={"220px"} height={"310px"}/>}
        {mode2 && <Notes size={"14px"} color={"black"} width={"300px"} height={"400px"}/>}
        {mode3 && <Notes size={"19px"} color={"red"}/>}
          </>
        }
    </FadeInOut>
    </div>
  );
}

export default NotesScreen;
