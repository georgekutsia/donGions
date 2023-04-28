import React from 'react'
import { WeaponAbility, ShieldAbility, WeaponDistanceAbility, WeaponThrowAbility } from '../../component'
function EquipmentScreen() {
  return (
    <div>
      <WeaponAbility/>
      <ShieldAbility/>
      <WeaponDistanceAbility/>
      <WeaponThrowAbility/>
    </div>
  )
}

export default EquipmentScreen