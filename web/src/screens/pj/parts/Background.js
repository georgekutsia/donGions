import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'

function Background() {
const info = useContext(AuthContext)

  return (
    <div className='background-pj-text-area'>
        <h2>Tu historia</h2>
        <article>{info.pj.background}</article>
    </div>
    
  )
}

export default Background