import React from 'react'
import ArmorAbilities from '../ArmorAbilities'


function lightArmour() {
  return (
    <>
    <br />
      <>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Armaduras ligera</h1>
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682642328/donGions%20imgs/habilidadesarmaduras/ligera1_tvu1fs.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640464/donGions%20imgs/habilidadesarmaduras/ligera_dwfpz1.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682642449/donGions%20imgs/habilidadesarmaduras/ligera3113_irffps.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682642504/donGions%20imgs/habilidadesarmaduras/ligera4_dwcxgm.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640472/donGions%20imgs/habilidadesarmaduras/ligera3_farog9.png" alt="armadura pesada" />
      </>
      <div className='texto-resaltado-degradado'>Las armaduras ligeras benefician a los hechiceros y los que quieren moverse con sigilo</div>
      <div className='texto-resaltado-degradado'>Aportan generalmente maná, poder de hechizos y resistencia. </div>
      <div className='texto-resaltado-degradado-subrayado'>Por lo contrario, aumenta el daño físico que recibes 20% y critico 50%</div>
      <ArmorAbilities titleEquip={"Gámbito de hechizos"} textEquip={`: Lanzar un hechizo no básico disminuye el coste de tu hechizo básico 1 ese turno`} />
      <ArmorAbilities titleEquip={"Reverberación"} textEquip={`: Al lanzar un hechizo no básico, obtienes un escudo que te absorbe daño igual a su coste hasta tu próximo turno`} />
      <ArmorAbilities titleEquip={"Sobrecarga"} textEquip={`: Al hacer daño con hechizos básicos, aumenta tu daño con hechizos igual al daño hecho para tu próximo hechizo este turno`} />
    </>
  )
}

export default lightArmour