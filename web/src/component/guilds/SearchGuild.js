import React, { useState } from 'react';
import FadeInOut from "../FadeInOut";

function SearchGuild({ search, place, food, character, damage, where, potions, explosives, distance, mele, magic, book, techno, defence, explor, move, 
  vida, mana, restore, cards, gems, companion, gun, tatu, throww, action, ability, light, dice, concent, money, maz, mutate, hit, heal, weight,
  esence, objects, maz3, maz4, nonDefined, 
  setSearch,setPlace, filterCharacter, filterDamage, filterFood, filterWhere, filterPotions, filterExplosives, filterDistance, filterMele, filterMagic, 
  filterBook, filterTechno, filterDefence,filterExplor,filterMove, filterVida,filterMana, filterRestore,filterCards,filterGems, filterCompanion,
  filterGun, filterTatu, filterThroww, filterAction, filterAbility, filterLight, filterDice, filterConcent, filterMoney, filterMaz, filterMutate, 
  filterHit, filterHeal, filterWeight,filterEsence,filterObjects,filterMaz3,filterMaz4, filterNonDefined})
  {
  const [showFilters, setShowFilters] = useState(false)

  return(
    <div>
        <button className="show-filters-guilds" onClick={() => setShowFilters(!showFilters) }> {showFilters? "Ocultar Filtros" : "Mostrar filtros"} </button>
          <div className='justify-content-evenly'>
          <input  type="text" className="search-bar-creatures-beleron" placeholder="Buscar por nombre de Gremio" value={search} onChange={(event) => setSearch(event.target.value)}/>
          <input  type="text" className="search-bar-creatures-beleron" placeholder="Buscar por ubicación" value={place} onChange={(event) => setPlace(event.target.value)}/>
        </div>
          <FadeInOut show={showFilters} duration={500}>
        {showFilters && 
      <div>
        <label htmlFor="food" className={food ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterFood(!food)}>Alimentos y consumibles</label>
        <label htmlFor="character" className={character ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterCharacter(!character)}>Carácter y personalidad</label>
        <label htmlFor="damage" className={damage ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterDamage(!damage)}>Daño en combate</label>
        <label htmlFor="potions" className={potions ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterPotions(!potions)}>Pociones y elixires</label>
        <label htmlFor="explosives" className={explosives ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterExplosives(!explosives)}>Explosivos</label>
        <label htmlFor="mele" className={mele ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterMele(!mele)}>Combate cuerpo a cuerpo</label>
        <label htmlFor="distance" className={distance ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterDistance(!distance)}>Combate a distancia</label>
        <label htmlFor="defence" className={defence ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterDefence(!defence)}>Combate con hechizos</label>
        <label htmlFor="magic" className={magic ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterMagic(!magic)}>Uso de magia</label>
        <label htmlFor="book" className={book ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterBook(!book)}>Libros y palabras inspiradoras</label>
        <label htmlFor="techno" className={techno ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterTechno(!techno)}>Tecnología y cachivaches </label>
        <label htmlFor="explor" className={explor ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterExplor(!explor)}>Exploración del mundo</label>
        <label htmlFor="move" className={move ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterMove(!move)}>Movimiento y velocidad</label>
        <label htmlFor="vida" className={vida ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterVida(!vida)}>Vida y Sanación</label>
        <label htmlFor="mana" className={mana ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterMana(!mana)}>Maná y Recuperación</label>
        <label htmlFor="esence" className={esence ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterEsence(!esence)}>Esencias</label>
        <label htmlFor="restore" className={restore ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterRestore(!restore)}>Salud</label>
        <label htmlFor="cards" className={cards ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterCards(!cards)}>Loot y cartas de hechizos</label>
        <label htmlFor="gems" className={gems ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterGems(!gems)}>Gemas y Joyas</label>
        <label htmlFor="companion" className={companion ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterCompanion(!companion)}>Compañeros y ayudas</label>
        <label htmlFor="gun" className={gun ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterGun(!gun)}>Armas de fuego</label>
        <label htmlFor="tatu" className={tatu ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterTatu(!tatu)}>Tatuajes y Sellos</label>
        <label htmlFor="throww" className={throww ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterThroww(!throww)}>Lanzamiento y Arrojadizas</label>
        <label htmlFor="action" className={action ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterAction(!action)}>Acciones en combate</label>
        <label htmlFor="ability" className={ability ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterAbility(!ability)}>Habilidades únicas</label>
        <label htmlFor="light" className={light ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterLight(!light)}>Iluminación</label>
        <label htmlFor="dice" className={dice ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterDice(!dice)}>Dados especiales</label>
        <label htmlFor="concent" className={concent ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterConcent(!concent)}>Concentración y Enfoque</label>
        <label htmlFor="money" className={money ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterMoney(!money)}>Comercio y riqueza</label>
        <label htmlFor="maz" className={maz ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterMaz(!maz)}>Mazmorra y exploración</label>
        <label htmlFor="mutate" className={mutate ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterMutate(!mutate)}>Mutaciones y transformaciones</label>
        <label htmlFor="hit" className={hit ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterHit(!hit)}>Acierto, precisión y velocidad</label>
        <label htmlFor="heal" className={heal ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterHeal(!heal)}>Sanación y supervivencia</label>
        <label htmlFor="weight" className={weight ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterWeight(!weight)}>weight</label>
        <label htmlFor="objects" className={objects ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterObjects(!objects)}>Objetos especiales</label>
        {/* <label htmlFor="maz3" className={maz3 ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterMaz3(!maz3)}>maz3</label>
        <label htmlFor="maz4" className={maz4 ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterMaz4(!maz4)}>maz4</label> */}
        <label htmlFor="nonDefined" className={nonDefined ? "selectedGuild" : "notSelectedGuild"} onClick={() => filterNonDefined(!nonDefined)}>Gremios de carácter especial</label>
      </div>
      }
      </FadeInOut>
    </div>
  )
}

export default SearchGuild