import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

function Materials() {
  const mats = useContext(AuthContext)
  const mat = mats.pj.mats
  return (
    <div >
        <div className='d-flex'>
            <div className='material-item-bag'>
              <ul className='material-item-ul'>
                    <li className='material-item'>      
                    <div>Lana <span className='mats-items'> {mat.Lana}</span></div> 
                    </li>
                    <li className='material-item'>
                    <div>Cuero <span className='mats-items'> {mat.Cuero}</span></div> 
                    </li>
                    <li className='material-item'>
                    <div>Seda <span className='mats-items'> {mat.Seda}</span></div> 
                    </li>
                    <li className='material-item'>
                    <div>Lingotes <span style={{fontSize:"13px"}}>(metal)</span>  <span className='mats-items'> {mat.Lingotes}</span></div> 
                    </li>
                    <li className='material-item'>
                    <div>Gemas <span style={{fontSize:"10px"}}>(bruta)</span> <span className='mats-items'> {mat.Gema}</span></div> 
                    </li>
                </ul>
            </div>
            <div className='material-item-bag'>
              <ul className='material-item-ul'>
                    <li className='material-item'>
                    <div>Engranajes  <span className='mats-items'> {mat.Engranajes}</span></div> 
                    </li>
                    <li className='material-item'>
                    <div>Pintura <span style={{fontSize:"10px"}}>(Mágica)</span> <span className='mats-items'> {mat.Pintura}</span></div> 
                    </li>
                    <li className='material-item'>
                    <div>Tierra <span style={{fontSize:"10px"}}>(Mágica)</span> <span className='mats-items'> {mat.Tierra}</span></div> 
                    </li>
                    <li className='material-item'>
                    <div>Entantamiento <span className='mats-items'> {mat.Encantamiento}</span></div> 
                    </li>
                    <li className='material-item'>
                    <div>Pólvora <span style={{fontSize:"10px"}}>(500gr)</span> <span className='mats-items'> {mat.Pólvora}</span></div> 
                    </li>
                    <li className='material-item'>
                    <div>Infusión <span className='mats-items'> {mat.Infusión}</span></div> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Materials