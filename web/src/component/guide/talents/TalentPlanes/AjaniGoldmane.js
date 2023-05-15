import React from 'react'
import { useState } from 'react'
import Talent from '../Talent'

function AjaniGoldmane() {
  const [on, setOn] = useState(false)
  return (
    <div>
      <Talent talentName="Ajani Goldmane" colorName={"yellow"}/>
    </div>
  )
}

export default AjaniGoldmane