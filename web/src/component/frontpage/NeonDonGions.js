import React from 'react'
import { Link } from 'react-router-dom'

function NeonDonGions() {
  return (
    <>
        <div className='div-neon'>
        <Link style={{textDecoration:"none"}} to="/register"> <div className='h1-neon'><span id='donset'> Crear </span><span id="offset">Nuevo </span>Personaje</div></Link>
        </div>
    </>
  )
}

export default NeonDonGions