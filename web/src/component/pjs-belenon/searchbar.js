function Searchbar({enemies, alies, search, setSearch, filterEnemies, filterAlies}) {
  return(
    <div>
        <input  type="text" className="search-bar-creatures-belenon" value={search} onChange={(event) => setSearch(event.target.value)}/>
        <input type="checkbox" className="form-checkbox-input" checked={enemies} onChange={(event) =>filterEnemies(event.target.checked)} id="enemies"/>
        <label htmlFor="enemies">Enemigos</label>
        <input type="checkbox" className="form-checkbox-input" checked={alies} onChange={(event) =>filterAlies(event.target.checked)} id="alies"/>
        <label htmlFor="alies">Aliados</label>

    </div>
  )
}

export default Searchbar