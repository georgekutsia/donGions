import React from 'react'
import { useState } from 'react'
import Talent from '../Talent'
import TalentItem from '../TalentItem'
import TalentText from '../TalentText'

function SorinMarkov() {
  const [active, setActive] = useState(false)
  
  return (
    <div>
      <Talent talentfirs1={"Sangromante"} talentfirst2={"Luchador"} talentfirst3={"arquero"} 
        text1={"Obtienes +2 en daño de hechizos y adquieres las habilidades de Sangromancia"} 
        text2={"Puedes tirar concentración para daño y aprendes una habilidad adicional de Sorín"} 
        text3={"Obtienes +D4 para daño a distancia y un dado de Aptitud"}
        talentSecond1={"Daño incrementado"} talentSecond2={"al fin"} talentSecond3={"al fin"} talentSecond4={"al fin"}
        talentSecond5={"al fin"} talentSecond6={"al fin"} talentSecond7={"al fin"} talentSecond8={"al fin"}
        talentSecond9={"al fin"} talentSecond10={"al fin"} talentSecond11={"al fin"} talentSecond12={"al fin"}
      />
    </div>
  )
}

export default SorinMarkov