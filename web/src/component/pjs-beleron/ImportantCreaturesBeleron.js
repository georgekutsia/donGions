import Creatures from "./ListCreature"
import React, { Component }  from 'react';
import Searchbar from "./searchbar"
import {useEffect, useState} from "react"
import FadeInOut from "../FadeInOut";
import Comunicados from "./Comunicados";

function ImportantCreaturesBeleron() {
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
  }, [])

  const [search, setSearch] = useState('')
  const [enemies, setEnemies] = useState(false)
  const [alies, setAlies] = useState(false)
  const [weird, setWeird] = useState(false)
  const [comunicado, setComunicado] = useState(false)

  const[showTable, setShowTable] = useState(false);
  
  return(
      <div align="center">
          <div  className="d-flex justify-content-evenly">
              <h1><button onClick={() => setShowTable(!showTable)} 
              className="btn btn-round b-level-2 b-type-show-creatures">Criaturas  de Beleron</button>
              </h1>
            </div>
                {comunicado && 
                  <FadeInOut show={showPage} duration={1000}>
                        <div>
                                <Comunicados/>
                        </div>
                </FadeInOut>
                }
                <FadeInOut show={showPage} duration={1000}>
                    <div align="center">
                <FadeInOut show={showTable} duration={1300}>
                    {showTable && 
                    <div className="m-1">
                        <Searchbar  search={search} setSearch={setSearch} filterEnemies={setEnemies} enemies={enemies} filterAlies={setAlies} alies={alies} filterWeird={setWeird} weird={weird} />
                    </div> 
                    }
                <div className="bubble-text">
                  <img className="img-shop-info-creature" alt="Dude" />
                  <div style={{fontSize:"calc(12px + 0.5vw)"}}> <span style={{color: "green"}}>verdes</span>  indica que lo considerais aliado</div>
                  <div style={{fontSize:"calc(12px + 0.5vw)"}}><span style={{color: "red"}}>rojo</span> indican que lo considerais enemigo</div>
                  <div style={{fontSize:"calc(12px + 0.5vw)"}}>El fondo <span style={{backgroundColor: "purple", color: "black"}}>púrpura</span> significa que no estáis seguros</div>
              </div>
                </FadeInOut>
              <div className="pt-5">
                    {showTable && <Creatures search={search} enemies={enemies} alies={alies}  weird={weird}/>}
              </div>
          </div>
                </FadeInOut>
    </div>
  )
}

export default ImportantCreaturesBeleron