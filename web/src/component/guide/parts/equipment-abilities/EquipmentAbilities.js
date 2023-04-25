import React from 'react'

function EquipmentAbilities({equipImage, titleEquip, textEquip}) {
  return (
    <>
      <ul className='text-npc'>
        <div className='d-flex'>
          <li>&nbsp;<span className='nombre-npc-negro' style={{color:"darkkhaki", borderBottom:"none"}}> {titleEquip} </span>{textEquip}</li>
        </div>
      </ul>
    </>
  )
}

export default EquipmentAbilities