import React from 'react'
import { WeaponAbility, ShieldAbility, WeaponDistanceAbility, WeaponThrowAbility } from '../../component'
function Equipment() {
  return (
    <div>
      <WeaponAbility/>
      <ShieldAbility/>
      <WeaponDistanceAbility/>
      <WeaponThrowAbility/>
    </div>
  )
}

export default Equipment