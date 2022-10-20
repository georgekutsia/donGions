import React from 'react'
import "./die.css"

const Die = ({face, rolling}) =>{
  return <i  className={`die-1 fas fa-spin slow-spin fa-dice-${face} ${rolling && "shaking1"}` }></i>
}
export default Die;