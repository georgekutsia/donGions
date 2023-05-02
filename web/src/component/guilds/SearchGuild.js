import React from 'react';
function SearchGuild({ search, food, character, damage, where, potions, explosives, distance, mele, magic, book, techno, defence, explor, movimiento, vida, mana, restore, cards, gems, otro3, setSearch, filterCharacter, filterDamage, filterFood, filterWhere, filterPotions, filterExplosives, filterDistance, filterMele, filterMagic, filterBook, filterTechno, filterDefence,filterExplor,filterMovimiento,filterVida,filterMana, filterRestore,filterCards,filterGems,filterOtro3}) {
  return(
    <div>
        <div>
          <input  type="text" className="search-bar-creatures-beleron" placeholder="Buscar por nombre" value={search} onChange={(event) => setSearch(event.target.value)}/>
        </div>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={where} onChange={(event) =>filterWhere(event.target.checked)} id="where"/>
        <label htmlFor="where">Lugar</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={food} onChange={(event) =>filterFood(event.target.checked)} id="food"/>
        <label htmlFor="food">Comida</label>
        <input type="checkbox" className="form-checkbox-input" checked={character} onChange={(event) =>filterCharacter(event.target.checked)} id="character"/>
        <label  htmlFor="character">Character</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={damage} onChange={(event) =>filterDamage(event.target.checked)} id="damage"/>
        <label htmlFor="damage">Daño</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={potions} onChange={(event) =>filterPotions(event.target.checked)} id="potions"/>
        <label htmlFor="potions">Pociones</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={explosives} onChange={(event) =>filterExplosives(event.target.checked)} id="explosives"/>
        <label htmlFor="explosives">Explosivos</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={distance} onChange={(event) =>filterDistance(event.target.checked)} id="distance"/>
        <label htmlFor="distance">Lucha a distancia</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={mele} onChange={(event) =>filterMele(event.target.checked)} id="mele"/>
        <label htmlFor="mele">Lucha cuerpo a cuerpo</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={magic} onChange={(event) =>filterMagic(event.target.checked)} id="magic"/>
        <label htmlFor="magic">Lucha mágica</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={book} onChange={(event) =>filterBook(event.target.checked)} id="book"/>
        <label htmlFor="book">Libros</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={techno} onChange={(event) =>filterTechno(event.target.checked)} id="techno"/>
        <label htmlFor="techno">Tecnología</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={defence} onChange={(event) =>filterDefence(event.target.checked)} id="defence"/>
        <label htmlFor="defence">defensas</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={explor} onChange={(event) =>filterExplor(event.target.checked)} id="explor"/>
        <label htmlFor="explor">explorar</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={movimiento} onChange={(event) =>filterMovimiento(event.target.checked)} id="movimiento"/>
        <label htmlFor="movimiento">movimiento</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={vida} onChange={(event) =>filterVida(event.target.checked)} id="vida"/>
        <label htmlFor="vida">vida</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={mana} onChange={(event) =>filterMana(event.target.checked)} id="mana"/>
        <label htmlFor="mana">mana</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={restore} onChange={(event) =>filterRestore(event.target.checked)} id="restore"/>
        <label htmlFor="restore">restore</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={cards} onChange={(event) =>filterCards(event.target.checked)} id="cards"/>
        <label htmlFor="cards">cards</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={gems} onChange={(event) =>filterGems(event.target.checked)} id="gems"/>
        <label htmlFor="gems">gems</label>
        <input type="checkbox" className="form-checkbox-input ms-2" checked={otro3} onChange={(event) =>filterOtro3(event.target.checked)} id="otro3"/>
        <label htmlFor="otro3">otro3</label>
    </div>
  )
}

export default SearchGuild