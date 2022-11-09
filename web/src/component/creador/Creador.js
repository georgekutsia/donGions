import React from "react";
import { Link } from "react-router-dom";

function Creador() {
  return (
    <div className="justify-content-evenly box-steps-creator-rules "  >
          <div>Tanto los personajes como parte del lore pertenecen a "Wizard Of The Coast LLC, subsidiario de Hashbro, Inc. Todos los derechos reservados"</div>
          <div>Esta página web no está afiliada ni respaldada por ellos, es un proyecto personal no lucrativo</div>
          <div>Si Wizard Of The Coast LLC o algún otro artista o autor no quiere que use las imágenes, puede contactar conmigo en <i className="fa-solid fa-envelope"> dongionscreator@gmail.com</i> </div>
          <div>Para más información sobre la naturaleza de esta página y del juego dejo aquí el link <Link to={"/dongionsdDetail"}>&nbsp;&nbsp; <i style={{fontSize:"calc(20px + 0.5vw)"}} className="fa-regular fa-file-lines"></i></Link></div>
    </div>
  );
}

export default Creador;
