import React from 'react'
import { Shop, SwordsBall, WordCloud} from '../../component'
import Carousel from './Carousel'

function ShopScreen() {
  return (
    <div>
    <Carousel></Carousel>
    {/* <SwordsBall ballDiv={"sky-ball"} ballImgs={"ball-ball"}/> */}
    <SwordsBall ballDiv={"sky-plan"} ballImgs={"plan-plan"}/>
    {/* <SwordsBall ballDiv={"sky-sword"} ballImgs={"sword-sword"}/> */}
      <Shop></Shop>
      <WordCloud/>
    </div>
  )
}

export default ShopScreen