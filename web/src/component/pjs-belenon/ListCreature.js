import Creature from "./CreatureBelenon"
import data from "../../data/belenonCreaturesData.json"
import {useEffect, useState} from "react"

function ListCreature({search, enemies, alies, weird}) {
    const [productsToShow, setProductsToShow] = useState([])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setProductsToShow(data)
        }, 2000)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    if (productsToShow.length === 0){
        return <center className="mt-5"><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666263239/donGions%20imgs/loading-62_jrtslx.gif" width="300px" alt="Loading img" /></center>
    }
  return(
    <div>
        <table className="table"  style={{color:"white", width:"1200px"}}>
            <thead style={{color:"white", fontSize:"30px"}}>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Imágen</th>
                </tr>
            </thead>
            <tbody>
                {productsToShow
                    .filter((prod) => prod.name.toLowerCase().includes(search.toLowerCase()))
                        .filter((prod) => (enemies ? prod.enemies : true))
                            .filter((prod) => (alies ? prod.alies : true))
                                .filter((prod) => (weird ? prod.weird : true))
                                    .map((product) =>
                                        <Creature key={product.img} {...product}/>)}
                </tbody>
        </table>
    </div>
   )
}

export default ListCreature