import Creature from "./CreatureBeleron"
import React  from 'react';
import data from "../../data/beleronCreaturesData.json"
import {useEffect, useState} from "react"
import FadeInOut from "../FadeInOut";

function ListCreatures({search, enemies, alies, weird}) {
    const [NPC, setNPC] = useState([])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setNPC(data)
        }, 500)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    if (NPC.length === 0){
        return <center className="mt-5"><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666263239/donGions%20imgs/loading-62_jrtslx.gif" width="300px" alt="Loading img" /></center>
    }
  return(
    <div>
        <FadeInOut show={NPC} duration={500}>
        <table className="table-event-creature">
            <tbody>
                {NPC
                    .filter((creat) => creat.name.toLowerCase().includes(search.toLowerCase()))
                        .filter((creat) => (enemies ? creat.enemies : true))
                            .filter((creat) => (alies ? creat.alies : true))
                                .filter((creat) => (weird ? creat.weird : true))
                                    .map((creaturesNpc) =>
                                        <Creature key={creaturesNpc.img} {...creaturesNpc}/>)}
                    {console.log(NPC.length)}
                </tbody>
        </table>
        </FadeInOut>
    </div>
   )
}

export default ListCreatures