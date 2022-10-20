import Creatures from "./ListCreature"
import Searchbar from "./searchbar"
import {useState} from "react"

function ImportantCreaturesBelenon() {
  const [search, setSearch] = useState('')
  const [enemies, setEnemies] = useState(false)
  const [alies, setAlies] = useState(false)

  const[showTable, setShowTable] = useState(false);
  
  return(
      <div>
          <div align="center">
              <h1><button onClick={() => setShowTable(!showTable)} 
              class="btn btn-round b-level-2 b-type-show-creatures">Criaturas importantes de Belenon</button>
            </h1>
          </div>
          <div align="center"> 
              <Searchbar  search={search} setSearch={setSearch} filterEnemies={setEnemies} enemies={enemies} filterAlies={setAlies} alies={alies} />
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
              <div className="pt-5">
                {showTable && <Creatures search={search} enemies={enemies} alies={alies}/>}
              </div>
          </div>
    </div>
  )
}

export default ImportantCreaturesBelenon