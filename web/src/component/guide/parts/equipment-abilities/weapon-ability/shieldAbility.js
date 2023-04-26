import React from 'react'
import {EquipmentAbilities} from '../../../../../component'

function shieldAbility() {
  return (
    <div>
      <>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Habilidades con Escudos</h1> 
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682462395/donGions%20imgs/habilidades%20con%20armas/escudios_ndl2sa.jpg" alt="Escudo" />
      </>
      <div className='texto-resaltado-degradado'>Sólo se puede usar al llevar escudo o algo similar. Se tira por acierto con escudo, que es igual a tu bloqueo. Los escudos de baja calidad sólo pueden usar alguna habilidad y vienen especificadas. Si no vienen especificadas, se pueden usar cualquiera.</div>
      <EquipmentAbilities imageAbility={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682462401/donGions%20imgs/habilidades%20con%20armas/Embate_jl7xqm.jpg"}  equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} titleEquip={"Embate:"} textEquip={"Golpeas con el escudo. No ocasiona daño, pero desequilibra ligeramente a la criatura, lo que aumenta el acierto en el próximo ataque de todos tus aliados esa ronda sobre la criatura igual a tu bloqueo adicional."}/>
      <EquipmentAbilities imageAbility={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682463374/donGions%20imgs/habilidades%20con%20armas/Acometida_f5ic3l.jpg"}  equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} titleEquip={"Acometida:"} textEquip={"Ocasionas daño igual a la carga del escudo. Interrumpe lanzamiento de hechizos (silencia a la criatura ese turno) y/o la desorienta durante las próximas acciónes. Si pagas el doble del coste de esta habilidad, también aumenta tu daño sobre esa criatura igual a un D4 por nivel este turno."}/>
      <EquipmentAbilities imageAbility={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682462402/donGions%20imgs/habilidades%20con%20armas/Choque_e7alf3.jpg"}  equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} titleEquip={"Choque:"} textEquip={"Chocas el escudo con la criatura. Ocasiona daño igual a tu bloqueo adicional. Si usas choque después de bloquear la criatura, aumenta el daño en D4 por cada nivel que tengas"}/>
      <EquipmentAbilities imageAbility={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682468123/donGions%20imgs/habilidades%20con%20armas/postura_defens_gzdhp7.jpg"}   equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} titleEquip={"Pose defensiva:"} textEquip={"Dobla la estadística de defensa otorgada por el escudo y el daño mitigado. Cualquier criatura detrás de ti está protegida contra el daño de las armas a distancia mientras dure"}/>
    </div>
  
  )
}

export default shieldAbility