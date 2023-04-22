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
    
    <div><h3 className='rules-show-shadow'> Enfoque</h3></div>
    <article>El enfoque añade + X a la tirada de concentración. Cada punto extra después de 12 se convierte en daño.</article>
</div>
  )
}

export default Enfoque