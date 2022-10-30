import React from 'react'

function ExtraInfo() {
  return (
    <div>
      <div id='extra-list'>
        <h5>Estadísticas que atectan a otras</h5>
        <ul className='float-start'>
          <li><i className="fa-solid fa-hand-point-right"></i>Cada 3 puntos de movimiento adicionales obtienes 1 velocidad de movimiento</li>
          <li><i className="fa-solid fa-hand-point-right"></i>Cada 3 puntos adicionales de rotura disminuidas que tengas aumentan el daño del arma lanzada 50%</li>
          <li><i className="fa-solid fa-hand-point-right"></i>Cada 3 tatuajes te mejoran el carisma 1 punto</li>
          <li><i className="fa-solid fa-hand-point-right"></i>Disparar a más distancia que el alcance del personaje disminuye el acierto en 3</li>
          <li><i className="fa-solid fa-hand-point-right"></i>Tras fracasar en la esquiva, puedes usar las otras defensas disminuidas en 3</li>
          <li><i className="fa-solid fa-hand-point-right"></i>Todas las armas de dos manos se pueden sujetar con una, pero disminuye el acierto total en 
              1 por cada carga de cada arma y todos los golpes fallidos cuentan como contundentes</li>
        </ul>
      </div>
    </div>
  )
}

export default ExtraInfo