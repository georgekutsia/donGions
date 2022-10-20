import React from "react";


function NavbarVertical({ statistics, stkinesthesia,stperception, stluck, stcharisma, stpresence,stconcentracion}) {
  return (
    <div>
      <div className="iconBar">
        <a className="active" href="/rules">
        <i className="fa-solid fa-folder-tree"></i>
        </a>
        <a onClick={statistics} href="#s-acciones"> Acciones</a>
        <a onClick={statistics} href="#s-salud"> Salud</a>
        <a onClick={stpresence} href="#s-presencia"> Presencia</a>
        <a onClick={stcharisma} href="#s-carisma"> Carisma</a>
        <a onClick={stluck} href="#s-suerte"> Suerte</a>
        <a onClick={stperception} href="#s-percepcion"> Percepción</a>
        <a onClick={stkinesthesia} href="#s-cinestesia"> Cinestesia</a>
        <a onClick={statistics} href="#s-concentracion"> Concentración</a>
      </div>
    </div>
  );
}

export default NavbarVertical;
