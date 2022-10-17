import React from 'react'

function Enfoque() {
  return (
    <div align="center"  className='background-list-actions'>
    <div className='texto-resaltado-degradado'>Algunos objetos, pactos o habilidades te ayudan a usar concentración también en el daño.</div>
    <div className='d-flex justify-content-evenly'>
      <div><h4 className='rules-show-shadow'>De 1-6</h4> <span className='texto-resaltado-concentracion'>Ac + 2/ Dñ +20%</span></div>
      <div><h4 className='rules-show-shadow'>De 7-9</h4> <span className='texto-resaltado-concentracion'>Ac + 4/ Dñ +50%</span></div>
      <div><h4 className='rules-show-shadow'>De 10-11</h4> <span className='texto-resaltado-concentracion'>Ac + 5/ Dñ +70%</span></div>
      <div><h4 className='rules-show-shadow'>12</h4> <span className='texto-resaltado-concentracion'>Crítico</span></div>
    </div>
    
    <div><h3 className='rules-show-shadow'> Rotura de las armas</h3></div>
    <article> Las armas cuerpo a cuerpo marcan su probabilidad de romperse si fallas. Debes superar con el dado lo que marca el arma para que no se rompa al impactar.
      Las flechas también pueden romperse, pero normalmente recargan al comienzo de cada combate automágicamente (algunas armas tienen su propia forma de recarga)</article>
</div>
  )
}

export default Enfoque