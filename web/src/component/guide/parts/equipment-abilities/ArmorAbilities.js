import React from 'react'

function ArmorAbilities({  equipCostAlt, titleEquip, textEquip, textEquip1, textEquip2, textEquip3}) {
  return (
    <>
      <ul className='text-npc'>
        <div className='d-flex'>
        <li className='ability-background-text-size'>&nbsp;<span className='nombre-npc-negro' style={{color:"darkkhaki", borderBottom:"none"}}> {titleEquip} </span>{textEquip} <u>{textEquip1}</u> {textEquip2} </li>
        </div>
      </ul>
    </>
  )
}
export default ArmorAbilities