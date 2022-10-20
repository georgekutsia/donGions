import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Notes, NoteForm, BackgroundFloatingBuble } from "../../component";

function NotesScreen() {
  const[mode1, setMode1] = useState(true)
  const[mode2, setMode2] = useState(false)
  const[mode3, setMode3] = useState(false)
  return (
    <div>
    <div className="ms-5">
    <BackgroundFloatingBuble floatingBalls=
    {"url(https://res.cloudinary.com/dfrda73uc/image/upload/v1665653141/donGions%20imgs/backgroundEffects/pngwing.com_70_czolhq.png)"} 
    widthBall={"50px"} heigthBall={"100px"} radiusBall={"2px"} idFlow={"square-flow"}/>
    <center><NoteForm /></center>
      
    </div>
        <div className="d-flex">
          <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode1(true);setMode2(false);setMode3(false)}}>
          <span></span><span></span><span></span><span></span>En pequeño
          </button>
          <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode2(true);setMode1(false);setMode3(false)}} >
          <span></span><span></span><span></span><span></span>Normal
          </button>
          <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode3(true);setMode2(false); setMode1(false)}} >
          <span></span><span></span><span></span><span></span>Letras grandes
          </button>
          
        </div>
      {mode1 && <Notes size={"14px"} color={"blue"} width={"200px"} height={"300px"}/>}
      {mode2 && <Notes size={"25px"} color={"black"}/>}
      {mode3 && <Notes size={"45px"} color={"red"}/>}
    </div>
  );
}

export default NotesScreen;
