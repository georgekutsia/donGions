import React from 'react'
import { Link } from 'react-router-dom'
import Creador from '../../component/creador/Creador'
import FadeInOut from "../../component/FadeInOut";

function FrontFrontpage() {
  return (
    <div align="center" className='frontfront-dongions'>
        <div align="center" style={{width:"500px"}}  id="text" className='div-neon frontfront-dongions'>
            <Link  style={{textDecoration:"none"}} to="/frontpage"> <h1 className='h1-neon'><span id='donset'> Don </span><span id="offset">Gio </span>ns</h1></Link>
        </div>
        <FadeInOut show duration={2000}>
          <Creador/>
        </FadeInOut>
    </div>
  )
}

export default FrontFrontpage