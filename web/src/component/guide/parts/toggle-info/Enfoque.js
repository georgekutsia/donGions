import React from 'react'

function Enfoque() {
  return (
    <div align="center"  className='background-list-actions'>
    <div className='texto-resaltado-degradado'>Algunos objetos, pactos o habilidades te ayudan a usar concentración también en el daño.</div>
    <div className='d-flex justify-content-evenly concentration-results'>
      <div><div className='rules-show-shadow'>De 1-6</div> <span className='texto-resaltado-concentracion'><i className="fa-solid fa-crosshairs"></i> + 2 <br /> <i className="fa-solid fa-head-side-cough-slash"></i> +20%</span></div>
      <div><div className='rules-show-shadow'>De 7-9</div> <span className='texto-resaltado-concentracion'><i className="fa-solid fa-crosshairs"></i> + 4 <br /> <i className="fa-solid fa-head-side-cough-slash"></i>  +50%</span></div>
      <div><div className='rules-show-shadow'>De 10-11</div> <span className='texto-resaltado-concentracion'><i className="fa-solid fa-crosshairs"></i> + 5 <br /> <i className="fa-solid fa-head-side-cough-slash"></i>  +70%</span></div>
      <div><div className='rules-show-shadow'>12</div> <span className='texto-resaltado-concentracion'><i className="fa-solid fa-crosshairs"></i> + 10 <br /> <i className="fa-solid fa-head-side-cough-slash"></i>  +100%</span></div>
    </div>
    
    <div><h3 className='rules-show-shadow'> Enfoque</h3></div>
    <article className="definicion-concepto">El enfoque añade + X a la tirada de concentración. Cada punto extra después de 12 se convierte en daño.</article>
</div>
  )
}

export default Enfoque