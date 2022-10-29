import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

function Materials() {
  const mats = useContext(AuthContext)
  const mat = mats.pj.mats
  return (
    <div className='material-item-bag'>
      <ul style={{padding:"1px"}}>
            <h3 className='material-item-title'>Materiales </h3> 
            <li className='material-item'>      
            <h5>Lana <span className='mats-items'> {mat.Lana}</span></h5> 
            </li>
            <li className='material-item'>
            <h5>Cuero <span className='mats-items'> {mat.Cuero}</span></h5> 
            </li>
            <li className='material-item'>
            <h5>Sana <span className='mats-items'> {mat.Seda}</span></h5> 
            </li>
            <li className='material-item'>
            <h5>Lingotes <span style={{fontSize:"13px"}}>(metal)</span>  <span className='mats-items'> {mat.Lingotes}</span></h5> 
            </li>
            <li className='material-item'>
            <h5>Gemas <span style={{fontSize:"13px"}}>(sin encantar)</span>   <span className='mats-items'> {mat.Gema}</span></h5> 
            </li>
            <li className='material-item'>
            <h5>Engranajes  <span className='mats-items'> {mat.Engranajes}</span></h5> 
            </li>
            <li className='material-item'>
            <h5>Pintura mágica <span className='mats-items'> {mat.Pintura}</span></h5> 
            </li>
            <li className='material-item'>
            <h5>Tierra mágica <span className='mats-items'> {mat.Tierra}</span></h5> 
            </li>
            <li className='material-item'>
            <h5>Entantamiento <span className='mats-items'> {mat.Encantamiento}</span></h5> 
            </li>
            <li className='material-item'>
            <h5>Pólvora(500gr) <span className='mats-items'> {mat.Pólvora}</span></h5> 
          </li>
        </ul>
    </div>
  )
}

export default Materials