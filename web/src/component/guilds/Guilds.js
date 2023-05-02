import { ListGuilds, SearchGuild } from "../../component";
// import React, { Component }  from 'react';
import React from "react";
import { useEffect, useState } from "react";
import FadeInOut from "../FadeInOut";
function Guilds() {
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    setShowPage(true);
  }, []);
  const [search, setSearch] = useState("");
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
  const [movimiento, setMovimiento] = useState(false);
  const [vida, setVida] = useState(false);
  const [mana, setMana] = useState(false);
  const [restore, setRestore] = useState(false);
  const [cards, setCards] = useState(false);
  const [gems, setGems] = useState(false);
  const [otro3, setOtro3] = useState(false);
  const [where, setWhere] = useState(false);
  const [comunicado, setComunicado] = useState(false);
  const [showTable, setShowTable] = useState(false);
  return (
    <div align="center">
      <FadeInOut show={true} duration={1000}>
        <div align="center">
          <div className="m-1">
            <SearchGuild
              setSearch={setSearch}
              search={search}
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
              filterMovimiento={setMovimiento}
              movimiento={movimiento}
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
              filterOtro3={setOtro3}
              otro3={otro3}
            />
          </div>
          {/* <div className="bubble-text">
            <img className="img-shop-info-creature" alt="Dude" />
            <div style={{ fontSize: "calc(12px + 0.5vw)" }}> {" "} <span style={{ color: "green" }}>verdes</span> indica que loconsiderais aliado</div>
            <div style={{ fontSize: "calc(12px + 0.5vw)" }}><span style={{ color: "red" }}>rojo</span> indican que loconsiderais enemigo</div>
            <div style={{ fontSize: "calc(12px + 0.5vw)" }}>El fondo{" "}<span style={{ backgroundColor: "purple", color: "black" }}>púrpura</span>{" "}significa que no estáis seguros
            </div>
          </div> */}
          <div className="div-list-creatures">
            <ListGuilds
              search={search}
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
              movimiento={movimiento}
              vida={vida}
              mana={mana}
              restore={restore}
              cards={cards}
              gems={gems}
              otro3={otro3}
            />
          </div>
        </div>
      </FadeInOut>
    </div>
  );
}

export default Guilds;
