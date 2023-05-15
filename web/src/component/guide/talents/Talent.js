import React from 'react'
import { useState } from 'react'
import TalentItem from './TalentItem'

function Talent({text1, text2, text3, talentfirst1, talentfirst2, talentfirst3, 
  talSecond1, talSecond2, talSecond3, talSecond4,talSecond5, talSecond6,
  talThird1,talThird2, talThird3, talThird4, talThird5, talThird6, talThird7, talThird8, talThird9
}) {
  const [talFirstOne, setTalFirstOne] = useState(false)
  const [talFirstTwo, setTalFirstTwo] = useState(false)
  const [talFirstThree, setTalFirstThree] = useState(false)
  
  const [talThirdOne, setTalThirdOne] = useState(false)
  const [talThirdTwo, setTalThirdTwo] = useState(false)
  const [talThirdThree, setTalThirdThree] = useState(false)
  const [talThirdFour, setTalThirdFour] = useState(false)
  const [talThirdFive, setTalThirdFive] = useState(false)
  const [talThirdSix, setTalThirdSix] = useState(false)

  const [talFourthOne, setTalFourthOne] = useState(false)
  const [talFourthTwo, setTalFourthTwo] = useState(false)
  const [talFourthThree, setTalFourthThree] = useState(false)
  const [talFourthFour, setTalFourthFour] = useState(false)
  const [talFourthFive, setTalFourthFive] = useState(false)
  const [talFourthSix, setTalFourthSix] = useState(false)
  const [talFourthSeven, setTalFourthSeven] = useState(false)
  const [talFourthEight, setTalFourthEight] = useState(false)
  const [talFourthNine, setTalFourthNine] = useState(false)
  
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
  const handleTalentItemClick1 = () => {setTalThirdOne(!talThirdOne)};
  const handleTalentItemClick2 = () => {setTalThirdTwo(!talThirdTwo)};
  const handleTalentItemClick3 = () => {setTalThirdThree(!talThirdThree)};
  const handleTalentItemClick4 = () => {setTalThirdFour(!talThirdFour)};
  const handleTalentItemClick5 = () => {setTalThirdFive(!talThirdFive)};
  const handleTalentItemClick6 = () => {setTalThirdSix(!talThirdSix)};

  const handleTalentItemClick7 = () => {setTalFourthOne(!talFourthOne)};
  const handleTalentItemClick8 = () => {setTalFourthTwo(!talFourthTwo)};
  const handleTalentItemClick9 = () => {setTalFourthThree(!talFourthThree)};
  const handleTalentItemClick10 = () => {setTalFourthFour(!talFourthFour)};
  const handleTalentItemClick11 = () => {setTalFourthFive(!talFourthFive)};
  const handleTalentItemClick12 = () => {setTalFourthSix(!talFourthSix)};
  const handleTalentItemClick13 = () => {setTalFourthSeven(!talFourthSeven)};
  const handleTalentItemClick14 = () => {setTalFourthEight(!talFourthEight)};
  const handleTalentItemClick15 = () => {setTalFourthNine(!talFourthNine)};


  return (
    <div className='talent-div'>
      <div className='talent-first'>
        <button onClick={handleFirstClick} className={talFirstOne ? "talent-first-selected talent-items":'talent-first-1 talent-items'}>{talentfirst1}</button>
        <button onClick={handleSecondClick} className={talFirstTwo ? "talent-second-selected talent-items":'talent-first-2 talent-items' }>{talentfirst2}</button>
        <button onClick={handleThirdClick} className={talFirstThree ? "talent-third-selected talent-items":'talent-first-3 talent-items'}>{talentfirst3}</button>
      </div>
      <div >
          {talFirstOne &&  <article className='talent-text1'>{text1}</article>}
          <div className='talentSecond'>
            {talFirstOne && <TalentItem onItemClick={handleTalentItemClick1}  itemOption={talSecond1}/>}
            {talFirstOne && <TalentItem onItemClick={handleTalentItemClick2}   itemOption={talSecond2}/>}
          </div>
          {talFirstTwo &&  <article className='talent-text1'>{text2}</article>}
          <div className='talentSecond'>
            {talFirstTwo && <TalentItem onItemClick={handleTalentItemClick3}   itemOption={talSecond3}/>}
            {talFirstTwo && <TalentItem onItemClick={handleTalentItemClick4}   itemOption={talSecond4}/>}
          </div>
          {talFirstThree &&  <article className='talent-text1'>{text3}</article>}
          <div className='talentSecond'>
            {talFirstThree && <TalentItem onItemClick={handleTalentItemClick5}   itemOption={talSecond5}/>}
            {talFirstThree && <TalentItem onItemClick={handleTalentItemClick6}   itemOption={talSecond6}/>}
          </div>
      </div>
      <div className='talentSecond'>
          {(talThirdOne || talThirdTwo )&& <TalentItem onItemClick={handleTalentItemClick7}   itemOption={talThird1}/>}
          {(talThirdOne || talThirdTwo)  && <TalentItem onItemClick={handleTalentItemClick8}   itemOption={talThird2}/>}
          {(talThirdOne || talThirdTwo)  && <TalentItem onItemClick={handleTalentItemClick9}   itemOption={talThird3}/>}
      </div>
      <div className='talentSecond'>
          {(talThirdThree || talThirdFour) && <TalentItem onItemClick={handleTalentItemClick10}   itemOption={talThird4}/>}
          {(talThirdThree || talThirdFour) && <TalentItem onItemClick={handleTalentItemClick11}   itemOption={talThird5}/>}
          {(talThirdThree || talThirdFour) && <TalentItem onItemClick={handleTalentItemClick12}   itemOption={talThird6}/>}
      </div>
      <div className='talentSecond'>
          {(talThirdFive || talThirdSix) && <TalentItem onItemClick={handleTalentItemClick13}   itemOption={talThird7}/>}
          {(talThirdFive || talThirdSix)  && <TalentItem onItemClick={handleTalentItemClick14}   itemOption={talThird8}/>}
          {(talThirdFive || talThirdSix)  && <TalentItem onItemClick={handleTalentItemClick15}   itemOption={talThird9}/>}
      </div>

    </div>
  )
}

export default Talent