import React from 'react'
import { Link } from 'react-router-dom'

function NeonDonGions() {
  return (
    <>
        <div id="text" className='div-neon'>
        <Link style={{textDecoration:"none"}} to="/register"> <h1 className='h1-neon'><span id='donset'> Crear </span><span id="offset">Nuevo </span>Personaje</h1></Link>
        </div>
    </>
  )
}

export default NeonDonGions