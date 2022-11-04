import React from "react";
import { Link } from "react-router-dom";

function Creador() {
  return (
    <div className="justify-content-evenly box-steps-creator-rules "  >
          <div>Tanto los personajes como parte del lore pertenecen a "Wizard Of The Coast LLC, subsidiario de Hashbro, Inc. Todos los derechos reservados"</div>
          <div>Esta página web no está afiliada ni respaldad por ellos, es un proyecto personal, no lucrativo y esta página web es solo una herramienta</div>
          <div>Este un proyecto personal de un juego de rol basado en el mundo de MTG para el que he usado imágenes, animaciones y formato del juego de Magic. </div>
          <div>Si Wizard Of The Coast LLC o algún otro artista o autor NO QUIERE que use las imágenes, puede contactar conmigo en <i className="fa-solid fa-envelope"> dongionscreator@gmail.com</i> </div>
          <div>Para más información sobre la naturaleza de esta página y del juego dejo aquí el link <Link to={"/dongionsdDetail"}> <i className="fa-regular fa-file-lines"></i></Link></div>
          
    </div>
  );
}

export default Creador;
