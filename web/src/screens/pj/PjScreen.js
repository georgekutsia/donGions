import React, { useContext, useEffect, useState } from 'react'
import { Character, Materials, StatsSalud, StatsPlusFight, StatsDam, StatsDefence} from '../../screens';
import { AuthContext } from '../../context/AuthContext'
import FadeInOut from "../../component/FadeInOut";
import { Link } from 'react-router-dom';
import Monsters from './parts/Monsters';
import BigMonster from './parts/BigMonster';
import Background from './parts/Background';

function PjScreen({counterForMonster}) {
const info = useContext(AuthContext)
const statis = info.pj.stats
const [pj, setPj] = useState(JSON.parse(localStorage.getItem("pj"))); 

function login(pj){
  setPj(pj);
  localStorage.setItem("pj", JSON.stringify(pj))
}

const value = {
  pj,
  setPj: login,
}
console.log("valor", value)

  const [showPage, setShowPage] = useState(false)
  const [showPlusStats, setShowPlusStats] = useState(false)
  const [char, setChar] = useState(false)
  const [dispStats, setDispStats] = useState(false)
  const [back, setBack] = useState(false)
  const [dude, setDude] = useState(true)
  const [showMonster1, setShowMonster1] = useState(true)
  const [chest, setChest] = useState(false)
  const [smoller, setSmoller] = useState(true)
  const [background, setBackground] = useState(false)
  const [showBigMonster, setShowBigMonster] = useState(false)
  const [showMonster, setShowMonster] = useState(false)
  const [sideBar, setSideBar] = useState(false)

  useEffect(() => {
    setShowPage(true)
    setDude(true)

    setTimeout(() => {
      setDude(false)
    }, 8000)
  }, [])
  return (
    <FadeInOut show={showPage} duration={800}>
        <div className={back ? "moving-background-scenary" : "moving-background-part"} id='profile-size-box'>
            <div className= {sideBar ?  "nav-items-pj-long":"nav-items-pj"}    >
                <Link className='nav-items-pj-item' style={{color:"grey"}} onClick={()=> setBack(!back)}>{back ?<i className="fa-solid fa-moon"></i>: <i className="fa-solid fa-mountain-sun"></i>} </Link>
                <Link className='nav-items-pj-item' onClick={()=> setDude(!dude)}>{dude ? <i className="fa-solid fa-user-tie fa-spin" style={{color:"green"}}></i>: <i className="fa-solid fa-user-tie"></i>}</Link>
                <Link className='nav-items-pj-item' onClick={()=> setShowBigMonster(!showBigMonster)}>{showBigMonster ? <i className="fa-solid fa-spaghetti-monster-flying fa-spin" style={{color:"chocolate"}}></i>: <i className="fa-solid fa-spaghetti-monster-flying"></i>}</Link>
                <Link className='nav-items-pj-item' onClick={()=> setShowMonster(!showMonster)}>{showMonster ? <i className="fa-solid fa-ghost fa-spin" style={{color:"teal"}}></i>: <i className="fa-solid fa-ghost"></i>}</Link>
                <Link className='nav-items-pj-item' onClick={()=> setBackground(!background)}>{background ? <i className="fa-solid fa-book-open fa-spin" style={{color:"red"}}></i>: <i className="fa-solid fa-book-open "></i>}</Link>
                <Link className="nav-items-pj-item" onClick={() => setSmoller(!smoller)}>{smoller? <i className="fa-solid fa-down-left-and-up-right-to-center"></i>:<i className="fa-solid fa-down-left-and-up-right-to-center fa-spin" style={{color:"yellow"}}></i>}</Link>
                <Link className='nav-items-pj-item' onClick={()=> setChest(!chest)}>{chest ? <i className="fa-solid fa-toolbox fa-spin" style={{color:"violet"}}></i>: <i className="fa-solid fa-toolbox"></i>}</Link>
                <Link className='nav-items-pj-item' to={`/profile/${info.pj.id}`} ><i className="fa-solid fa-person-booth"></i></Link>
                <Link className='nav-items-pj-item-long' onClick={()=> setSideBar(!sideBar)}>{sideBar ? <i className="fa-solid fa-x" style={{color:"white"}}></i>: <i className="fa-solid fa-angles-down"></i>}</Link>
            </div>
            {showBigMonster && 
            <FadeInOut show={showBigMonster} duration={400}>
              <div>
                  <BigMonster/>
              </div>
            </FadeInOut>}
          {showMonster && 
            <div >
                <Link className='link-name-monster-show' onClick={() => setShowMonster1(!showMonster1)}>Fijar</Link>
                <div className={showMonster1 ? 'monsters-counter-pj': "monsters-counter-pjs"}>
                      <Monsters mc={counterForMonster}/>
                </div>
            </div>
          }
        <FadeInOut show={showPage} duration={1000}>
          <FadeInOut show={dude} duration={400}>
                {dude?
                    <div className="bubble-text-pj" >
                        <img className="img-shop-info-pj" alt="Dude" />
                        <div> ¡Ya estás aquí! </div>
                        <div>En tu perfil puedes llevar las cuentas de tu personaje, el inventario y algunas cosas mas. 
                            Verás una lista de los materiales que tienes y podrás añadir otras.</div>
                            <div>También podrás llevar las cuentas de algunos monstrous con los que luchas</div>
                    </div>: ""
                }
          </FadeInOut>
        </FadeInOut>
                <FadeInOut show={showPage} duration={400}>
          <div className="box-img-planeswalker">
                <Link onClick={() => setDispStats(!dispStats)}> 
                <img className={smoller ?'profile-image-css':"profile-image-css-smoll"} style={{border:`${statis.style} 3px solid`}}  src={statis.image} alt="dasda" />
                </Link>
          </div>
            {dispStats &&
          <div  className={smoller ? "box-big-stats-div":"box-small-stats-div"}>
            <FadeInOut show={showPage} duration={1200}>
              <div align="center">
                  <div className='inner-box-stats' style={{ border :`2px ${statis.style} ridge`}}>
                        <Link onClick={() => setShowPlusStats(!showPlusStats)} className='button-mostrar-mejoradas mx-4'>Estadísticas Mejoradas</Link>
                        <Link onClick={() => setChar(!char)} className='button-mostrar-mejoradas'>Carácter</Link>
                        {showPlusStats && 
                          <FadeInOut show={showPage} duration={1000}>
                            <StatsPlusFight/>
                          </FadeInOut>
                        }
                        {char && 
                          <FadeInOut show={showPage} duration={1000}>
                            <Character/>
                          </FadeInOut>
                        }
                        <StatsSalud/>
                        <StatsDam />
                        <StatsDefence/>
                  </div>
              </div>
            {/* <h5>Lugar {info.pj.place}</h5> */}
              </FadeInOut>
            </div>
            }
            {chest &&
            <FadeInOut show duration={1000}>
                    <div className='material-container'>
                            <Materials/> 
                    </div>
            </FadeInOut> 
          }        
          <FadeInOut show={background} duration={400}>
              <div align="center">
                      <Background/>
              </div>
              </FadeInOut>
        </FadeInOut>
      </div>
    </FadeInOut> 
  )
}

export default PjScreen