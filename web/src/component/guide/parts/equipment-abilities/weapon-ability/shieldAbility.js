import React from 'react'
import {EquipmentAbilities} from '../../../../../component'

function shieldAbility() {
  return (
    <div>
      <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Habilidades con Escudos</h1> 
      <div className='texto-resaltado-degradado'>Se tira por acierto con escudo, que es igual a tu bloqueo. Los escudos de baja calidad sólo pueden usar alguna habilidad y viene especificada. Si no, se puede usar cualquiera</div>
      <EquipmentAbilities titleEquip={"Lanzamiento brutal:"} textEquip={"triple del daño del arma al alcance. Aumenta la probabilidad de rotura igual al doble de la carga del arma."}/>
    </div>
  
  )
}

export default shieldAbility