import { ListGuilds, SearchGuild } from "..";
// import React, { Component }  from 'react';
import React from "react";
import { useEffect, useState } from "react";
import FadeInOut from "../FadeInOut";
function Guilds() {
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    setShowPage(true);
  }, []);
  const [showFilters, setShowFilters] = useState(false)
  const [search, setSearch] = useState("");
  const [place, setPlace] = useState("");
  const [food, setFood] = useState(false);
  const [character, setCharacter] = useState(false);
  const [damage, setDamage] = useState(false);
  const [potions, setPotions] = useState(false);
  const [explosives, setExplosives] = useState(false);
  const [distance, setDistance] = useState(false);
  const [mele, setMele] = useState(false);
  const [magic, setMagic] = useState(false);
  const [book, setBook] = useState(false);
  const [techno, setTechno] = useState(false);
  const [defence, setDefence] = useState(false);
  const [explor, setExplor] = useState(false);
  const [move, setMove] = useState(false);
  const [vida, setVida] = useState(false);
  const [mana, setMana] = useState(false);
  const [restore, setRestore] = useState(false);
  const [cards, setCards] = useState(false);
  const [gems, setGems] = useState(false);
  const [companion, setCompanion] = useState(false);
  const [gun, setGun] = useState(false);
  const [tatu, setTatu] = useState(false);
  const [throww, setThroww] = useState(false);
  const [action, setAction] = useState(false);
  const [ability, setAbility] = useState(false);
  const [light, setLight] = useState(false);
  const [dice, setDice] = useState(false);
  const [concent, setConcent] = useState(false);
  const [money, setMoney] = useState(false);
  const [maz, setMaz] = useState(false);
  const [mutate, setMutate] = useState(false);
  const [hit, setHit] = useState(false);
  const [heal, setHeal] = useState(false);
  const [weight, setWeight] = useState(false);
  const [esence, setEsence] = useState(false);
  const [objects, setObjects] = useState(false);
  const [maz3, setMaz3] = useState(false);
  const [maz4, setMaz4] = useState(false);
  const [nonDefined, setNonDefined] = useState(false);
  const [where, setWhere] = useState(false);

  const [comunicado, setComunicado] = useState(false);
  const [showTable, setShowTable] = useState(false);
  return (
    <div align="center">
      <FadeInOut show={true} duration={1000}>
        <div align="center">
          <div className="m-1">
          <button className="show-filters-guilds" onClick={() => setShowFilters(!showFilters) }> {showFilters? "Ocultar Filtros" : "Mostrar filtros"} </button>
          <FadeInOut show={showFilters} duration={500}>
          
          {showFilters && 
            <SearchGuild
              setSearch={setSearch}
              search={search}
              setPlace={setPlace}
              place={place}
              filterWhere={setWhere}
              where={where}
              filterFood={setFood}
              food={food}
              filterCharacter={setCharacter}
              character={character}
              filterDamage={setDamage}
              damage={damage}
              filterPotions={setPotions}
              potions={potions}
              filterExplosives={setExplosives}
              explosives={explosives}
              filterDistance={setDistance}
              distance={distance}
              filterMele={setMele}
              mele={mele}
              filterMagic={setMagic}
              magic={magic}
              filterBook={setBook}
              book={book}
              filterTechno={setTechno}
              techno={techno}
              filterDefence={setDefence}
              defence={defence}
              filterExplor={setExplor}
              explor={explor}
              filterMove={setMove}
              move={move}
              filterVida={setVida}
              vida={vida}
              filterMana={setMana}
              mana={mana}
              filterRestore={setRestore}
              restore={restore}
              filterCards={setCards}
              cards={cards}
              filterGems={setGems}
              gems={gems}
              filterCompanion={setCompanion}
              companion={companion}
              filterGun={setGun}
              gun={gun}
              filterTatu={setTatu}
              tatu={tatu}
              filterThroww={setThroww}
              throww={throww}
              filterAction={setAction}
              action={action}
              filterAbility={setAbility}
              ability={ability}
              filterLight={setLight}
              light={light}
              filterDice={setDice}
              dice={dice}
              filterConcent={setConcent}
              concent={concent}
              filterMoney={setMoney}
              money={money}
              filterMaz={setMaz}
              maz={maz}
              filterMutate={setMutate}
              mutate={mutate}
              filterHit={setHit}
              hit={hit}
              filterHeal={setHeal}
              heal={heal}
              filterWeight={setWeight}
              weight={weight}
              filterEsence={setEsence}
              esence={esence}
              filterObjects={setObjects}
              objects={objects}
              filterMaz3={setMaz3}
              maz3={maz3}
              filterMaz4={setMaz4}
              maz4={maz4}
              filterNonDefined={setNonDefined}
              nonDefined={nonDefined}
            />
          }
          </FadeInOut>
          </div>
          {/* <div className="bubble-text">
            <img className="img-shop-info-creature" alt="Dude" />
            <div > Puedes buscar por nombre o por ciudad. También puedes filtrar en base a qué te interesa que tenga el gremio. Puedes seleccionar varios filtros a la vez </div>
          </div> */}
          <div className="div-list-creatures">
            <ListGuilds
              search={search}
              place={place}
              food={food}
              character={character}
              damage={damage}
              where={where}
              potions={potions}
              explosives={explosives}
              distance={distance}
              mele={mele}
              magic={magic}
              book={book}
              techno={techno}
              defence={defence}
              explor={explor}
              move={move}
              vida={vida}
              mana={mana}
              restore={restore}
              cards={cards}
              gems={gems}
              companion={companion}
              gun={gun}
              tatu={tatu}
              throww={throww}
              action={action}
              ability={ability}
              light={light}
              dice={dice}
              concent={concent}
              money={money}
              maz={maz}
              mutate={mutate}
              hit={hit}
              heal={heal}
              weight={weight}
              esence={esence}
              objects={objects}
              maz3={maz3}
              maz4={maz4}
              nonDefined={nonDefined}
            />
          </div>
        </div>
      </FadeInOut>
    </div>
  );
}

export default Guilds;
