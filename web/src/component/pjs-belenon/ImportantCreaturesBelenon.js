import Creatures from "./ListCreature"
import Searchbar from "./searchbar"
import {useEffect, useState} from "react"
import FadeInOut from "../../component/FadeInOut";
import Comunicados from "./Comunicados";

function ImportantCreaturesBelenon() {
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
  }, [])

  const [search, setSearch] = useState('')
  const [enemies, setEnemies] = useState(false)
  const [alies, setAlies] = useState(false)
  const [weird, setWeird] = useState(false)
  const [comunicado, setComunicado] = useState(true)

  const[showTable, setShowTable] = useState(false);
  
  return(
      <div align="center">
          <div  className="d-flex">
              <h1><button onClick={() => setShowTable(!showTable)} 
              className="btn btn-round b-level-2 b-type-show-creatures">Criaturas importantes de Belenon</button>
                </h1>
              <h1 ><button onClick={() => setComunicado(!comunicado)} 
              className="btn btn-round b-level-2 b-type-show-creatures">Comunicados de George</button>
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
                    <div className="m-3">
                        <Searchbar  search={search} setSearch={setSearch} filterEnemies={setEnemies} enemies={enemies} filterAlies={setAlies} alies={alies} filterWeird={setWeird} weird={weird} />
                    </div> 
                    }
                <div className="bubble-text">
                  <img className="img-shop-info-creature" alt="Dude" />
                  <h5>
                  El nombre y reborde  <span style={{color: "green"}}>verdes</span>  indican que lo considerais un aliado
                  </h5>
                  <h5>
                  El nombre y reborde <span style={{color: "red"}}>rojo</span> indican que lo considerais un enemigo
                  </h5>
                  <h5>
                  El fondo <span style={{backgroundColor: "purple", color: "black"}}>púrpura</span> significa que no lo veis claro o aún no sabéis 
                  </h5>
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

export default ImportantCreaturesBelenon