import React from 'react'
import ArmorAbilities from '../ArmorAbilities'

function mediumArmour() {
  return (
    <>
    <br />
      <>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Armaduras ligera</h1>
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640467/donGions%20imgs/habilidadesarmaduras/media5_qx9qpr.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640471/donGions%20imgs/habilidadesarmaduras/media9_eprwus.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640462/donGions%20imgs/habilidadesarmaduras/media1_vkp3fy.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640465/donGions%20imgs/habilidadesarmaduras/media2_jvoq0c.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640471/donGions%20imgs/habilidadesarmaduras/media84_ohdqda.png" alt="armadura pesada" />
      </>
      <div className='texto-resaltado-degradado'>Las armaduras ligeras benefician a los hechiceros y los que quieren moverse con sigilo</div>
      <div className='texto-resaltado-degradado'>Aportan generalmente maná, poder de hechizos y resistencia. </div>
      <div className='texto-resaltado-degradado-subrayado'>Por lo contrario, aumenta el daño físico que recibes 20% y critico 50%</div>
      <ArmorAbilities titleEquip={"Propósito"} textEquip={`: Reequipar te cuesta 3 acciones menos y al reequiparte un arma, aumenta ese turno uno de tus aciertos (a tu elección) igual al doble de la carga del arma`} />
      <ArmorAbilities titleEquip={"Evasiva"} textEquip={`: Con menos de 30% de vida, obtienes reflejos igual a la carga de tus botas`} />
      <ArmorAbilities titleEquip={"Enfoque marcial"} textEquip={`: Al hacer daño físico a una criatura, aumenta tu enfoque igual al daño hecho para tu próximo ataque físico este turno`} />
    </>
  )
}

export default mediumArmour