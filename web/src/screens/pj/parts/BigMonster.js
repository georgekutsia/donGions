import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonMonstersCount from './ButtonMonstersCount'
import FadeInOut from "../../../component/FadeInOut";


  const a = Math.floor(Math.random() * 130)
  const b = Math.floor(Math.random() * 130)
  const c = Math.floor(Math.random() * 130)
  const d = Math.floor(Math.random() * 130)
  const e = Math.floor(Math.random() * 130)
  const f = Math.floor(Math.random() * 130)
  const g = Math.floor(Math.random() * 130)
  const h = Math.floor(Math.random() * 130)
  const i = Math.floor(Math.random() * 130)
  const j = Math.floor(Math.random() * 130)

function BigMonster({countMonster}) {
  const [showMonster1, setShowMonster1] = useState(false)
  const [showMonster2, setShowMonster2] = useState(false)
  const [showMonster3, setShowMonster3] = useState(false)
  const [showMonster4, setShowMonster4] = useState(false)
  const [showMonster5, setShowMonster5] = useState(false)




  return (
    <div className='d-flex' style={{width:"90%"}}>
        <div style={{borderRadius:"5px", backgroundColor: `rgb(${a}, ${j}, ${c})`, margin:"2px", }}>
            <Link  className='link-name-monster' onClick={()=> setShowMonster1(!showMonster1)}>Monstraco 1</Link>
              {showMonster1 &&
              <FadeInOut show={showMonster1} duration={1000}>
                <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
        <div style={{borderRadius:"5px", backgroundColor: `rgb(${b}, ${i}, ${d})`, margin:"2px"}}>
            <Link className='link-name-monster' onClick={()=> setShowMonster2(!showMonster2)}>Monstraco 2</Link>
              {showMonster2 &&
              <FadeInOut show={showMonster2} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
        <div style={{borderRadius:"5px", backgroundColor: `rgb(${c}, ${h}, ${e})`, margin:"2px"}}>
            <Link className='link-name-monster' onClick={()=> setShowMonster3(!showMonster3)}>Monstraco 3</Link>
              {showMonster3 &&
              <FadeInOut show={showMonster3} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
        <div style={{borderRadius:"5px", backgroundColor: `rgb(${d}, ${g}, ${f})`, margin:"2px"}}>
            <Link className='link-name-monster' onClick={()=> setShowMonster4(!showMonster4)}>Monstraco 4</Link>
              {showMonster4 &&
              <FadeInOut show={showMonster4} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
        <div style={{borderRadius:"5px", backgroundColor: `rgb(${e}, ${f}, ${g})`, margin:"2px"}}>
            <Link className='link-name-monster' onClick={()=> setShowMonster5(!showMonster5)}>Monstraco 5</Link>
              {showMonster5 &&
              <FadeInOut show={showMonster5} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
    </div>
  )
}

export default BigMonster 