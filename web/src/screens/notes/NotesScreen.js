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
          <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode1(!mode1)}}>
          <span></span><span></span><span></span><span></span>Normal letterssss
          </button>
          <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode2(!mode2);setMode1(!mode1);}} >
          <span></span><span></span><span></span><span></span>Big letter
          </button>
          <button className='btn-rules-toggle nombre-concepto-blanco' style={{color:"rgb(20, 251, 190)"}} onClick={()=>{setMode3(!mode3);setMode2(!mode2); setMode1(!mode1)}} >
          <span></span><span></span><span></span><span></span>Big letter
          </button>
          
        </div>
      {mode1 && <Notes size={"14px"} color={"blue"}/>}
      {mode2 && <Notes size={"25px"} color={"red"}/>}
      {mode3 && <Notes size={"45px"} color={"yellow"}/>}
    </div>
  );
}

export default NotesScreen;
