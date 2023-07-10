import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ButtonMonstersCount from './ButtonMonstersCount'
import FadeInOut from "../../../component/FadeInOut";

function Monsters() {
  const [showMonster1, setShowMonster1] = useState(false)
  const [showMonster2, setShowMonster2] = useState(false)
  const [showMonster3, setShowMonster3] = useState(false)
  const [showMonster4, setShowMonster4] = useState(false)
  const [showMonster5, setShowMonster5] = useState(false)
  const [showMonster6, setShowMonster6] = useState(false)
  const [showMonster7, setShowMonster7] = useState(false)
  const [showMonster8, setShowMonster8] = useState(false)

  return (
    <div className='monster-scroller'>
          <div className='div-counter-monster'>
            <Link className='link-name-monster' onClick={()=> setShowMonster1(!showMonster1)}>Criatura 1</Link>
              {showMonster1 &&
              <FadeInOut show={showMonster1} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
          </div>
          <div className='div-counter-monster'>
            <Link className='link-name-monster' onClick={()=> setShowMonster2(!showMonster2)}>Criatura 2</Link>
              {showMonster2 &&
              <FadeInOut show={showMonster2} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
        <div  className='div-counter-monster'>
            <Link className='link-name-monster' onClick={()=> setShowMonster3(!showMonster3)}>Criatura 3</Link>
              {showMonster3 &&
              <FadeInOut show={showMonster3} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
        <div  className='div-counter-monster'>
            <Link className='link-name-monster' onClick={()=> setShowMonster4(!showMonster4)}>Criatura 4</Link>
              {showMonster4 &&
              <FadeInOut show={showMonster4} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
        <div className='div-counter-monster'>
            <Link className='link-name-monster' onClick={()=> setShowMonster5(!showMonster5)}>Criatura 5</Link>
              {showMonster5 &&
              <FadeInOut show={showMonster5} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>          
        <div className='div-counter-monster'>
            <Link className='link-name-monster' onClick={()=> setShowMonster6(!showMonster6)}>Criatura 6</Link>
              {showMonster6 &&
              <FadeInOut show={showMonster6} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
        <div className='div-counter-monster'>
            <Link className='link-name-monster' onClick={()=> setShowMonster7(!showMonster7)}>Criatura 7</Link>
              {showMonster7 &&
              <FadeInOut show={showMonster7} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
        <div className='div-counter-monster'>
            <Link className='link-name-monster' onClick={()=> setShowMonster8(!showMonster8)}>Criatura 8</Link>
              {showMonster8 &&
              <FadeInOut show={showMonster8} duration={1000}>
              <ButtonMonstersCount  dead="fa-skull"  colorDead="grey" colorText={"rgb(238, 173, 173)"} cTurn={0} tu0={"fa-hourglass"}/>
            </FadeInOut>
          }
        </div>
    </div>
  )
}

export default Monsters 