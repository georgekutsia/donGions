import React from 'react'
import ArmorAbilities from '../ArmorAbilities'

function heavyArmor() {
  return (
    <>
    <br />
      <>
        <h1 id="s-cinestesia" align="center" className='texto-resaltado-modifican'> Armaduras pesadas</h1>
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640469/donGions%20imgs/habilidadesarmaduras/pesada3_hy6nmb.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640468/donGions%20imgs/habilidadesarmaduras/pesada52_poprm6.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640463/donGions%20imgs/habilidadesarmaduras/pesada910_krukp6.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640463/donGions%20imgs/habilidadesarmaduras/pesada4_inv985.png" alt="armadura pesada" />
        <img  className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682640754/donGions%20imgs/habilidadesarmaduras/pesada31_rysabv.png" alt="armadura pesada" />
      </>
      <div className='texto-resaltado-degradado'>Las armaduras pesadas sirven para aguantar el daño físico y a distancia en combate.</div>
      <div className='texto-resaltado-degradado'>Algunas habilidades y hechizos se benefician de la carga, defensas y vida adicional de esas armaduras. Suelen ayudar con el uso de escudos para defensa.  </div>
      <div className='texto-resaltado-degradado-subrayado'>Por lo contrario, disminuyen la esquiva igual a la carga y afectan a las habilidades de sigilo</div>
      <ArmorAbilities titleEquip={"Represalias"} textEquip={`: Tras recibir daño, todas las habilidades con el escudo hacen daño igual a su carga. `} />
      <ArmorAbilities titleEquip={"Supervivencia"} textEquip={`: Si fueras a morir, puedes destruir esta armadura y pagar 1 maná para sobrevivir y ser inmune al daño 1 turno.`} />
      <ArmorAbilities titleEquip={"Coraje"} textEquip={`: Al recibir daño aumentan tus defensas +1 hasta que te defiendes con éxito`} />
    </>
  )
}

export default heavyArmor