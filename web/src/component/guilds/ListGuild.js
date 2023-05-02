import Creature from "./Guild"
import React  from 'react';
import data from "../../data/guildsPactsData.json"
import {useEffect, useState} from "react"
import FadeInOut from "../FadeInOut";

function ListGuild({search, food, character, damage, where, potions, explosives, distance, mele, magic, book, techno, defence, explor, movimiento, otro4 }) {
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
                                                                            .filter((pact) => (movimiento ? pact.movimiento : true))
                                                                                .filter((pact) => (otro4 ? pact.otro4 : true))
                                                                                    .map((guilds) =>
                                                                                        <Creature key={guilds.name} {...guilds}/>)}
                </tbody>
        </table>
        </FadeInOut>
    </div>
   )
}

export default ListGuild