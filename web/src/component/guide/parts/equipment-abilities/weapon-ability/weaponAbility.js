import React from 'react'
import {EquipmentAbilities} from '../../../../../component'
function weaponAbility() {
  return (
    <div>
    <br />
      <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Habilidades con armas</h1> 
      <div className='texto-resaltado-degradado'>Todas las armas de dos manos se pueden sujetar con una, pero disminuye el acierto -1 por cada carga del arma y todos los golpes fallidos cuentan como contundentes</div>
      <EquipmentAbilities titleEquip={"Lanzamiento brutal:"} textEquip={"triple del daño del arma al alcance. Aumenta la probabilidad de rotura igual al doble de la carga del arma."}/>
      <EquipmentAbilities titleEquip={"Desarme:"} textEquip={"sólo tras parar un ataque o de que te paren. requiere superar a la otra criatura en lanzamiento de dados de 20 y tienes acierto incrementado igual al daño que has bloqueado"}/>
      <EquipmentAbilities titleEquip={"Contundencia:"} textEquip={"el próximo golpe dobla daño y acierto del arma, pero no puedes usarlo el próximo turno. Las armas arrojadizas sí se pueden usar el próximo turno, pero no en el mismo. Los látigos y cuerdas envuelven a la persona u objeto para tirar de ellas."}/>
      <EquipmentAbilities titleEquip={"Barrido frontal:"} textEquip={"hace el daño en un cono. La primera criatura en la dirección recibe todo el daño y el resto la mitad. Disminuye el acierto en 1 por cada criatura en la trayectoria. En acierto o daño alto, empuja."}/>
      <EquipmentAbilities titleEquip={"Barrido circular"} textEquip={"gasta dos acciones para completar el giro. Daño de barrido a todas las criaturas alrededor. Disminuye tu acierto 1 punto por criatura cercana y debes tirar por acierto por cada criatura"}/>
      <EquipmentAbilities titleEquip={"Aguzar el arma"} textEquip={"Aumenta el acierto del lanzamiento del arma +3 ese turno y disminuye la rotura en 5"}/>
    </div>
  )
}

export default weaponAbility