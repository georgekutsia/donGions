import React from 'react'
import { useState } from 'react'
import TalentItem from './TalentItem'

function Talent({text1, text2, text3, talentfirs1, talentfirst2, talentfirst3, 
  talentSecond1, talentSecond2, talentSecond3, talentSecond4,
  talentSecond5, talentSecond6, talentSecond7, talentSecond8,
  talentSecond9, talentSecond10, talentSecond11, talentSecond12
}) {
  const [talFirstOne, setTalFirstOne] = useState(false)
  const [talFirstTwo, setTalFirstTwo] = useState(false)
  const [talFirstThree, setTalFirstThree] = useState(false)
  
  const handleFirstClick = () => {
    setTalFirstOne(!talFirstOne);
    setTalFirstTwo(false);
    setTalFirstThree(false);
  }
  const handleSecondClick = () => {
    setTalFirstOne(false);
    setTalFirstTwo(!talFirstTwo);
    setTalFirstThree(false);
  }
  const handleThirdClick = () => {
    setTalFirstOne(false);
    setTalFirstTwo(false);
    setTalFirstThree(!talFirstThree);
  }
  return (
    <div className='talent-div'>
      <div className='talent-first'>
        <button onClick={handleFirstClick} className={talFirstOne ? "talent-first-selected talent-items":'talent-first-1 talent-items'}>{talentfirs1}</button>
        <button onClick={handleSecondClick} className={talFirstTwo ? "talent-second-selected talent-items":'talent-first-2 talent-items' }>{talentfirst2}</button>
        <button onClick={handleThirdClick} className={talFirstThree ? "talent-third-selected talent-items":'talent-first-3 talent-items'}>{talentfirst3}</button>
      </div>
      <div >
          {talFirstOne &&  <article className='talent-text1'>{text1}</article>}
          <div className='talentSecond'>
            {talFirstOne && <TalentItem itemOption={talentSecond1}/>}
            {talFirstOne && <TalentItem itemOption={talentSecond2}/>}
            {talFirstOne && <TalentItem itemOption={talentSecond3}/>}
          </div>
          {talFirstTwo &&  <article className='talent-text1'>{text2}</article>}
          <div>
            {talFirstTwo && <TalentItem itemOption={talentSecond4}/>}
            {talFirstTwo && <TalentItem itemOption={talentSecond5}/>}
            {talFirstTwo && <TalentItem itemOption={talentSecond6}/>}
          </div>
          {talFirstThree &&  <article className='talent-text1'>{text3}</article>}
          <div>
            {talFirstThree && <TalentItem itemOption={talentSecond7}/>}
            {talFirstThree && <TalentItem itemOption={talentSecond8}/>}
            {talFirstThree && <TalentItem itemOption={talentSecond9}/>}
          </div>
      </div>
    </div>
  )
}

export default Talent