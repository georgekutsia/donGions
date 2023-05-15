import React from 'react'
import { useState } from 'react'

function TalentItem({itemOption}) {
  const [one, setOne] = useState(false)
  return (
    <button onClick={()=> setOne(!one)} className={one? 'button-talent-item-selected':'button-talent-item'}>{itemOption}</button>
  )
}

export default TalentItem