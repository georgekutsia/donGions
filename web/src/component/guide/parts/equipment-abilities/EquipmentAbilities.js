import React from 'react'

function EquipmentAbilities({imageAbility, equipCost,equipCostAlt, titleEquip, textEquip, textEquip1, textEquip2, textEquip3}) {
  return (
    <>
      <ul className='text-npc'>
        <div className='d-flex'>
        <img className='ability-images' src={imageAbility} alt="" />
        <li>&nbsp;<span className='nombre-npc-negro' style={{color:"darkkhaki", borderBottom:"none"}}> {titleEquip} <img src={equipCost} alt={equipCostAlt} width="18vw"/> </span>{textEquip} <u>{textEquip1}</u> {textEquip2} <br /> &nbsp;&nbsp;&nbsp;{textEquip3}</li>
        </div>
      </ul>
    </>
  )
}

export default EquipmentAbilities