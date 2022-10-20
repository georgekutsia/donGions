function Searchbar({enemies, alies, weird,  search, setSearch, filterEnemies, filterAlies, filterWeird}) {
  return(
    <div>
        <div>
            <input  type="text" className="search-bar-creatures-belenon" placeholder="Buscar por nombre" value={search} onChange={(event) => setSearch(event.target.value)}/>
        </div>
        <input type="checkbox" className="form-checkbox-input" checked={enemies} onChange={(event) =>filterEnemies(event.target.checked)} id="enemies"/>
        <label  htmlFor="enemies">Enemigos</label>
        <input type="checkbox" className="form-checkbox-input ms-5" checked={alies} onChange={(event) =>filterAlies(event.target.checked)} id="alies"/>
        <label htmlFor="alies">Aliados</label>
        <input type="checkbox" className="form-checkbox-input ms-5" checked={weird} onChange={(event) =>filterWeird(event.target.checked)} id="weird"/>
        <label htmlFor="weird">Neutral/No se sabe</label>
    </div>
  )
}

export default Searchbar