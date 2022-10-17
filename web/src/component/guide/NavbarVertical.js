import React from "react";


function NavbarVertical({ showTheInfo }) {
  return (
    <div>
      <div className="iconBar">
        <a className="active" href="/rules">
        <i className="fa-solid fa-folder-tree"></i>
        </a>
        <a onClick={showTheInfo} href="#guia-acciones"> Acciones</a>
      </div>
    </div>
  );
}

export default NavbarVertical;
