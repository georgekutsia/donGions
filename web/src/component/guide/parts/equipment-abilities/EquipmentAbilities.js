import React from 'react'

function EquipmentAbilities({imageAbility, equipCost,equipCostAlt, titleEquip, textEquip}) {
  return (
    <>
      <ul className='text-npc'>
        <div className='d-flex'>
        <img className='ability-images' src={imageAbility} alt="" />
        <li>&nbsp;<span className='nombre-npc-negro' style={{color:"darkkhaki", borderBottom:"none"}}> {titleEquip} <img src={equipCost} alt={equipCostAlt} width="18vw"/> </span>{textEquip}</li>
        </div>
      </ul>
    </>
  )
}

export default EquipmentAbilities