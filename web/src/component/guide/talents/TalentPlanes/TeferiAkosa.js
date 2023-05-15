import React from 'react'
import { useState } from 'react'
import Talent from '../Talent'

function TeferiAkosa() {
  const [on, setOn] = useState(false)
  return (
    <div>
      <Talent talentName="Teferi Akosa" colorName={"moccasin"}/>
    </div>
  )
}

export default TeferiAkosa