import React from 'react'
import { NavLink } from 'react-router-dom'

function BlackMirror({blackText, blackTo, blackClass, blackStyle}) {
  return (
    <div>
  <NavLink style={{color:`${blackStyle}`}} className={`${blackClass}`} to={blackTo}> <h5 className='black-mirror' data-text={blackText}><span>{blackText}</span></h5></NavLink>
    </div>
  )
}

export default BlackMirror