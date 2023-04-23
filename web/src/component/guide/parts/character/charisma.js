import React from 'react'

function Charisma() {
  return (
      <div style={{backgroundColor:"rgb(3, 2, 13)"}} className='background-rule-info'>
        <h1 id="s-carisma" align="center" className='texto-resaltado-carisma'>Carisma</h1> 
        <img className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682213943/donGions%20imgs/characters/charisma_rhhckb.png" alt="Charisma"/>
      <div className='d-flex justify-content-evenly'>
        <div><span className='texto-resaltado-suerte-stats'>Cada 3 tatuajes te mejoran el carisma 1 punto</span> </div>
      </div>
          <article  align="center" className='background-list-actions'>
          &nbsp;&nbsp;&nbsp; Los jugadores con Carisma tienene incrementadas las pruebas de inspiración, intimidación, engaño, negociación, distracción etc. 
          </article>
          <ul>
            <li><i className="fa-solid fa-head-side-cough"></i>&nbsp; Aumenta en 1 ronda la duración de tus frases inspiradoras</li>
            <li><i className="fa-solid fa-head-side-cough"></i>&nbsp; Tantas veces como puntos de carisma tengas por combate, puedes inventar tus propias frases inspiradoras para volver a usar el efecto de algún libro gastado.</li>
            <li><i className="fa-solid fa-head-side-cough"></i>&nbsp; Aumenta el valor de los objetos vendidos 10% y disminuye los comprados 10% por cada punto de carisma, máxima 30% </li>
            <li><i className="fa-solid fa-head-side-cough"></i>&nbsp; Las ilusiones, distracciones, manipulaciones etc. tienen incremento en tirada de 2 puntos</li>
            <li><i className="fa-solid fa-head-side-cough"></i>&nbsp; Aumenta tus efectos de provocación</li>
            <li><i className="fa-solid fa-head-side-cough"></i>&nbsp; Disminuye algunos requisitos para formar parte de los gremios </li>
          </ul>
      </div>
  )
}

export default Charisma