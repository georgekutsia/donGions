import React from 'react'
import {EquipmentAbilities} from '../../../../../component'

function weaponThrowAbility() {
  return (
    <div>
    <br />
      <>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Armas arrojadizas</h1> 
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682471966/donGions%20imgs/habilidades%20con%20armas/Arrojadiza_kx4xvi.jpg" alt="Escudo" />
      </>
      <div className='texto-resaltado-degradado'>Puedes lanzar tantas armas arrojadizas con una sola acción como movimiento adicional tengas.</div>
      <EquipmentAbilities imageAbility={""} titleEquip={"Euforia:"} equipCost={""} 
      textEquip={" cada vez que impactes, aumenta el acierto de la siguiente arma lanzada +1. Todas las armas que tienen euforia, tras acertar con ella, aumentan el acierto +1 para el siguiente ataque que hagas ese turno con la misma arma. Cada punto de Cinestesia aumenta en 1 el acierto otorgado por euforia y puedes lanzar 2 armas arrojadizas a la vez. "}/>
    </div>
  )
}

export default weaponThrowAbility