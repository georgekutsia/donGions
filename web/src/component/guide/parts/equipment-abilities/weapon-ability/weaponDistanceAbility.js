import React from 'react'
import {EquipmentAbilities} from '../../../../../component'


function weaponDistanceAbility() {
  return (
    <div>
    <br />
      <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Habilidades con armas a distancia</h1> 
      <div className='texto-resaltado-degradado'>El arma especifica cuál de las habilidades se puede usar y se gastas 1 punto de maná para activarlo.</div>
      <EquipmentAbilities  titleEquip={"Recarga"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": Obtienes 2 cargas de munición "}/>
      <EquipmentAbilities  titleEquip={"Apuntar"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": Aumenta el acierto a distancia +2 hasta el final del turno"}/>
      <EquipmentAbilities  titleEquip={"Mira telescópica"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": Aumenta la precisión y alcance a distancia +1"}/>
      <EquipmentAbilities  titleEquip={"Tensar"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": Aumenta el alcance a distancia +1 por nivel"}/>
      <EquipmentAbilities  titleEquip={"Gatillo rápido"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": aumenta la velocidad a distancia +1 para el siguiente disparo  "}/>
      <EquipmentAbilities  titleEquip={"Bala de fragmentación"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": El siguiente disparo hace daño en cono 2x3 todas las criaturas"}/>
      <EquipmentAbilities  titleEquip={"Bala de punta sólida"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": El siguiente disparo atraviesa a todas las criaturas en línea. Se tira por acierto a distancia por todas"}/>
      <EquipmentAbilities  titleEquip={"Bala explosiva"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": El siguiente disparo aumenta el daño 50% y expulsa a la criatura hacia atrás"}/>
      <EquipmentAbilities  titleEquip={"Bala de esencias"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": El siguiente disparo roba una esencia a la criatura a la que daña"}/>
      <EquipmentAbilities  titleEquip={"Bala mágica"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": El siguiente disparo también hace daño mágico igual a tu daño de hechizos"}/>
      <EquipmentAbilities  titleEquip={"Bala de aturdimiento"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": Bala no letal que incapacita a la criatura tantos turnos como daño fuera a hacer"}/>
      <EquipmentAbilities  titleEquip={"Bala con carga"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": Explota al impactar sobre el objetivo, haciendo el mismo daño sobre él y todas las criaturas cercanas"}/>
      <EquipmentAbilities  titleEquip={"Bala PEM"} equipCost={"https://res.cloudinary.com/dfrda73uc/image/upload/v1682456317/donGions%20imgs/costes/Captura_de_pantalla_2023-04-25_a_las_21.55.03_h7drgx.png"} textEquip={": Silencia a la criatura una ronda y le quita 3 puntos de maná +1 por nivel"}/>
    </div>
  )
}

export default weaponDistanceAbility