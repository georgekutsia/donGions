import Creature from "./Guild"
import React  from 'react';
import data from "../../data/guildsPactsData.json"
import {useEffect, useState} from "react"
import FadeInOut from "../FadeInOut";

function ListGuild({search, food, character, damage, where, potions, explosives, distance, mele, 
    magic, book, techno, defence, explor, move, vida, mana, restore, cards, gems, companion, 
    gun, tatu, throww, action, ability, light, dice, concent, money, maz, mutate, hit, heal, 
    weight,maz1,maz2,maz3,maz4, nonDefined }) {
    const [guild, setGuild] = useState([])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setGuild(data)
        }, 2000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    if (guild.length === 0){
        return <center className="mt-5"><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682904601/donGions%20imgs/loading2_s9mu8u.gif" width="200px" alt="Loading img" /></center>
    }
  return(
    <div>
        <FadeInOut show={guild} duration={500}>
        <table className="table-event-creature">
            <tbody>
                {guild
                    .filter((pact) => pact.name.toLowerCase().includes(search.toLowerCase()))
                    .filter((pact) => (food ? pact.food : true))
                    .filter((pact) => (character ? pact.character : true))
                    .filter((pact) => (damage ? pact.damage : true))
                    .filter((pact) => (where ? pact.where : true))
                    .filter((pact) => (potions ? pact.potions : true))
                    .filter((pact) => (explosives ? pact.explosives : true))
                    .filter((pact) => (distance ? pact.distance : true))
                    .filter((pact) => (mele ? pact.mele : true))
                    .filter((pact) => (magic ? pact.magic : true))
                    .filter((pact) => (book ? pact.book : true))
                    .filter((pact) => (techno ? pact.techno : true))
                    .filter((pact) => (defence ? pact.defence : true))
                    .filter((pact) => (explor ? pact.explor : true))
                    .filter((pact) => (move ? pact.move : true))
                    .filter((pact) => (vida ? pact.vida : true))
                    .filter((pact) => (mana ? pact.mana : true))
                    .filter((pact) => (restore ? pact.restore : true))
                    .filter((pact) => (cards ? pact.cards : true))
                    .filter((pact) => (gems ? pact.gems : true))
                    .filter((pact) => (companion ? pact.companion : true))
                    .filter((pact) => (gun ? pact.gun : true))
                    .filter((pact) => (tatu ? pact.tatu : true))
                    .filter((pact) => (throww ? pact.throww : true))
                    .filter((pact) => (action ? pact.action : true))
                    .filter((pact) => (ability ? pact.ability : true))
                    .filter((pact) => (light ? pact.light : true))
                    .filter((pact) => (dice ? pact.dice : true))
                    .filter((pact) => (concent ? pact.concent : true))
                    .filter((pact) => (money ? pact.money : true))
                    .filter((pact) => (maz ? pact.maz : true))
                    .filter((pact) => (mutate ? pact.mutate : true))
                    .filter((pact) => (hit ? pact.hit: true))
                    .filter((pact) => (heal ? pact.heal : true))
                    .filter((pact) => (weight ? pact.weight : true))
                    .filter((pact) => (maz1 ? pact.maz1 : true))
                    .filter((pact) => (maz2 ? pact.maz2 : true))
                    .filter((pact) => (maz3 ? pact.maz3 : true))
                    .filter((pact) => (maz4 ? pact.maz4 : true))
                    .filter((pact) => (nonDefined ? pact.nonDefined : true))
                        .map((guilds) =>
                                <Creature key={guilds.name} {...guilds}/>)}
                </tbody>
        </table>
        </FadeInOut>
    </div>
   )
}

export default ListGuild