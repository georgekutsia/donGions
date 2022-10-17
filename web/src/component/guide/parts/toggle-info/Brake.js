import React from 'react'

function Brake() {
  return (
    <div align="center"  className='background-list-actions'>
        <div className='texto-resaltado-degradado'>Cada 3 puntos adicionales de rotura, aumenta el daño de armas lanzadas 50%</div>
        <center><h3 className='rules-show-shadow'>Rotura de las armas</h3></center>
        <article> Las armas cuerpo a cuerpo marcan su probabilidad de romperse si fallas. Debes superar con el dado lo que marca el arma para que no se rompa al impactar.
          Las flechas también pueden romperse, pero normalmente recargan al comienzo de cada combate automágicamente (algunas armas tienen su propia forma de recarga)</article>
    </div>
  )
}

export default Brake