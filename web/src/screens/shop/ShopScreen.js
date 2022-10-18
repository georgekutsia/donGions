import React, { useState } from 'react'
import { Shop, SwordsBall, WordCloud} from '../../component'
import Carousel from './Carousel'

function ShopScreen() {

  const [armeria, setArmeria] = useState(false)
  const showArm = () => setArmeria(true)
  const hideArm = () => setArmeria(false)


  return (
    <div align="center">
    <SwordsBall  ballDiv={"sky-sword"} ballImgs={"sword-sword"}/>
    <div>
        <Shop  arm={showArm} armOff={hideArm}/>
      <h1 align="center" className='name-shop' >Tienda de Patek el Ruinafortunas</h1>
    </div>
    <SwordsBall  ballDiv={"sky-sword-1"} ballImgs={"sword-sword-1"}/>
    <SwordsBall  ballDiv={"sky-sword-2"} ballImgs={"sword-sword-2"}/>


   {armeria && <Carousel/>}
    



    {/* <SwordsBall ballDiv={"sky-ball"} ballImgs={"ball-ball"}/> */}
    {/* <SwordsBall ballDiv={"sky-plan"} ballImgs={"plan-plan"}/> */}
      {/* <WordCloud/> */}
    </div>
  )
}

export default ShopScreen