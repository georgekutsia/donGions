import React from 'react'
import ArmorAbilities from '../ArmorAbilities'

function mediumArmour() {
  return (
    <>
    <br />
      <>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Armaduras media</h1>
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640467/donGions%20imgs/habilidadesarmaduras/media5_qx9qpr.png" alt="armadura media" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640471/donGions%20imgs/habilidadesarmaduras/media9_eprwus.png" alt="armadura media" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640462/donGions%20imgs/habilidadesarmaduras/media1_vkp3fy.png" alt="armadura media" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640465/donGions%20imgs/habilidadesarmaduras/media2_jvoq0c.png" alt="armadura media" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640471/donGions%20imgs/habilidadesarmaduras/media84_ohdqda.png" alt="armadura media" />
      </>
      <div className='texto-resaltado-degradado'>Las armaduras medias son para valientes incautos que quieren una lucha ariesgada</div>
      <div className='texto-resaltado-degradado'>Están diseñadas para ayudar a esquivar ataques, atacar cuerpo a cuerpo y cambiarte mucho de equipo. </div>
      <div className='texto-resaltado-degradado-subrayado'>Debido a la complejidad del labrado de los atuendos, reequiparte te cuesta 3 acciones adicionales </div>
      <ArmorAbilities titleEquip={"Propósito"} textEquip={`: Reequipar te cuesta 3 acciones menos y al reequiparte un arma, aumenta ese turno uno de tus aciertos (a tu elección) igual al doble de la carga del arma`} />
      <ArmorAbilities titleEquip={"Evasiva"} textEquip={`: Con menos de 30% de vida, obtienes reflejos igual a la carga de tus botas`} />
      <ArmorAbilities titleEquip={"Enfoque marcial"} textEquip={`: Al hacer daño físico a una criatura, aumenta tu enfoque igual al daño hecho para tu próximo ataque físico este turno`} />
    </>
  )
}

export default mediumArmour