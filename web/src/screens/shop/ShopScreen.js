import React from 'react'
import {BackgroundImagesSetInterval, Shop, SwordsBall, WordCloud} from '../../component'

function ShopScreen() {
  return (
    <div>
    <BackgroundImagesSetInterval/>
    {/* <SwordsBall ballDiv={"sky-ball"} ballImgs={"ball-ball"}/> */}
    <SwordsBall ballDiv={"sky-plan"} ballImgs={"plan-plan"}/>
    {/* <SwordsBall ballDiv={"sky-sword"} ballImgs={"sword-sword"}/> */}
      <Shop></Shop>
      <WordCloud/>
    </div>
  )
}

export default ShopScreen