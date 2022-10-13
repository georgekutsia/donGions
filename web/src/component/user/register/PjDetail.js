import React, { useState, useEffect } from 'react'
import {useParams, useNavigate} from "react-router-dom"
import pjs from '../../../data/pjs'


function PjDetail() {
  const navigate = useNavigate()
  const {id} = useParams();
  const [pj, setPj] = useState();
  
  useEffect(() => {
    const pj = pjs.find(pj => pj.id === id)
    if(pj){
      setPj(pj)
    } else {
      navigate("/pj")
    }
  }, [id])
  return (
    <div> nombre: {pj?.nombre}
    </div>
  )
}

export default PjDetail