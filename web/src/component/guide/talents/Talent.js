import React from 'react'
import { useState } from 'react'
import TalentItem from './TalentItem'
import LineConect from './../../../component/extra/buttons/LineConect'

function Talent({
  positionLine1,colorLine1, heightLine1, widthLine1,
  text1, text2, text3, talentfirst1, talentfirst2, talentfirst3, 
  talSecond1,talSecond2, talSecond3, talSecond4, talSecond5, talSecond6,
  talThird1,talThird2, talThird3, talThird4, talThird5, talThird6, talThird7, talThird8, talThird9, talThird10, talThird11, talThird12, talThird13, talThird14, talThird15, talThird16, talThird17, talThird18, 
  talFourth1,talFourth2, talFourth3, talFourth4, talFourth5, talFourth6, talFourth7, talFourth8, talFourth9, talFourth10, talFourth11, talFourth12, talFourth13, talFourth14, talFourth15, talFourth16, talFourth17, talFourth18, 
  talFourth1c,talFourth2c, talFourth3c, talFourth4c, talFourth5c, talFourth6c, talFourth7c, talFourth8c, talFourth9c, talFourth10c, talFourth11c, talFourth12c, talFourth13c, talFourth14c, talFourth15c, talFourth16c, talFourth17c, talFourth18c, 
}) {
  const [talFirstOne, setTalFirstOne] = useState(false)
  const [talFirstTwo, setTalFirstTwo] = useState(false)
  const [talFirstThree, setTalFirstThree] = useState(false)
  
  const [talSeconda1, setTalSeconda1] = useState(false)
  const [talSeconda2, setTalSeconda2] = useState(false)
  const [talSeconda3, setTalSeconda3] = useState(false)
  const [talSeconda4, setTalSeconda4] = useState(false)
  const [talSeconda5, setTalSeconda5] = useState(false)
  const [talSeconda6, setTalSeconda6] = useState(false)

  const [talThirdb1, setTalThird1] = useState(false)
  const [talThirdb2, setTalThird2] = useState(false)
  const [talThirdb3, setTalThird3] = useState(false)
  const [talThirdb4, setTalThird4] = useState(false)
  const [talThirdb5, setTalThird5] = useState(false)
  const [talThirdb6, setTalThird6] = useState(false)
  const [talThirdb7, setTalThird7] = useState(false)
  const [talThirdb8, setTalThird8] = useState(false)
  const [talThirdb9, setTalThird9] = useState(false)
  const [talThirdb10, setTalThird10] = useState(false)
  const [talThirdb11, setTalThird11] = useState(false)
  const [talThirdb12, setTalThird12] = useState(false)
  const [talThirdb13, setTalThird13] = useState(false)
  const [talThirdb14, setTalThird14] = useState(false)
  const [talThirdb15, setTalThird15] = useState(false)
  const [talThirdb16, setTalThird16] = useState(false)
  const [talThirdb17, setTalThird17] = useState(false)
  const [talThirdb18, setTalThird18] = useState(false)

  
  const [talFourthc1, setTalFourth1] = useState(false)
  const [talFourthc2, setTalFourth2] = useState(false)
  const [talFourthc3, setTalFourth3] = useState(false)
  const [talFourthc4, setTalFourth4] = useState(false)
  const [talFourthc5, setTalFourth5] = useState(false)
  const [talFourthc6, setTalFourth6] = useState(false)
  const [talFourthc7, setTalFourth7] = useState(false)
  const [talFourthc8, setTalFourth8] = useState(false)
  const [talFourthc9, setTalFourth9] = useState(false)
  const [talFourthc10, setTalFourth10] = useState(false)
  const [talFourthc11, setTalFourth11] = useState(false)
  const [talFourthc12, setTalFourth12] = useState(false)
  const [talFourthc13, setTalFourth13] = useState(false)
  const [talFourthc14, setTalFourth14] = useState(false)
  const [talFourthc15, setTalFourth15] = useState(false)
  const [talFourthc16, setTalFourth16] = useState(false)
  const [talFourthc17, setTalFourth17] = useState(false)
  const [talFourthc18, setTalFourth18] = useState(false)
  
  const [talFourthcc1, setTalFourthc1] = useState(false)
  const [talFourthcc2, setTalFourthc2] = useState(false)
  const [talFourthcc3, setTalFourthc3] = useState(false)
  const [talFourthcc4, setTalFourthc4] = useState(false)
  const [talFourthcc5, setTalFourthc5] = useState(false)
  const [talFourthcc6, setTalFourthc6] = useState(false)
  const [talFourthcc7, setTalFourthc7] = useState(false)
  const [talFourthcc8, setTalFourthc8] = useState(false)
  const [talFourthcc9, setTalFourthc9] = useState(false)
  const [talFourthcc10, setTalFourthc10] = useState(false)
  const [talFourthcc11, setTalFourthc11] = useState(false)
  const [talFourthcc12, setTalFourthc12] = useState(false)
  const [talFourthcc13, setTalFourthc13] = useState(false)
  const [talFourthcc14, setTalFourthc14] = useState(false)
  const [talFourthcc15, setTalFourthc15] = useState(false)
  const [talFourthcc16, setTalFourthc16] = useState(false)
  const [talFourthcc17, setTalFourthc17] = useState(false)
  const [talFourthcc18, setTalFourthc18] = useState(false)


  const handleFirstClick = () => {
    setTalFirstOne(!talFirstOne);
    setTalFirstTwo(false);
    setTalFirstThree(false);
    setTalSeconda1(false);
    setTalSeconda2(false);
    setTalSeconda3(false);
    setTalSeconda4(false);
    setTalSeconda5(false);
    setTalSeconda6(false);
    setTalThird1(false);
    setTalThird2(false);
    setTalThird3(false);
    setTalThird4(false);
    setTalThird5(false);
    setTalThird6(false);
    setTalThird7(false);
    setTalThird8(false);
    setTalThird9(false);
    setTalThird10(false);
    setTalThird11(false);
    setTalThird12(false);
    setTalThird13(false);
    setTalThird14(false);
    setTalThird15(false);
    setTalThird16(false);
    setTalThird17(false);
    setTalThird18(false);
    setTalFourth1(false);
    setTalFourth2(false);
    setTalFourth3(false);
    setTalFourth4(false);
    setTalFourth5(false);
    setTalFourth6(false);
    setTalFourth7(false);
    setTalFourth8(false);
    setTalFourth9(false);
    setTalFourth10(false);
    setTalFourth11(false);
    setTalFourth12(false);
    setTalFourth13(false);
    setTalFourth14(false);
    setTalFourth15(false);
    setTalFourth16(false);
    setTalFourth17(false);
    setTalFourth18(false);
    setTalFourthc1(false);
    setTalFourthc2(false);
    setTalFourthc3(false);
    setTalFourthc4(false);
    setTalFourthc5(false);
    setTalFourthc6(false);
    setTalFourthc7(false);
    setTalFourthc8(false);
    setTalFourthc9(false);
    setTalFourthc10(false);
    setTalFourthc11(false);
    setTalFourthc12(false);
    setTalFourthc13(false);
    setTalFourthc14(false);
    setTalFourthc15(false);
    setTalFourthc16(false);
    setTalFourthc17(false);

  };
  const handleSecondClick = () => {
    setTalFirstOne(false);
    setTalFirstTwo(!talFirstTwo);
    setTalFirstThree(false);
    setTalSeconda1(false);
    setTalSeconda2(false);
    setTalSeconda3(false);
    setTalSeconda4(false);
    setTalSeconda5(false);
    setTalSeconda6(false);
    setTalThird1(false);
    setTalThird2(false);
    setTalThird3(false);
    setTalThird4(false);
    setTalThird5(false);
    setTalThird6(false);
    setTalThird7(false);
    setTalThird8(false);
    setTalThird9(false);
    setTalThird10(false);
    setTalThird11(false);
    setTalThird12(false);
    setTalThird13(false);
    setTalThird14(false);
    setTalThird15(false);
    setTalThird16(false);
    setTalThird17(false);
    setTalThird18(false);
    setTalFourth1(false);
    setTalFourth2(false);
    setTalFourth3(false);
    setTalFourth4(false);
    setTalFourth5(false);
    setTalFourth6(false);
    setTalFourth7(false);
    setTalFourth8(false);
    setTalFourth9(false);
    setTalFourth10(false);
    setTalFourth11(false);
    setTalFourth12(false);
    setTalFourth13(false);
    setTalFourth14(false);
    setTalFourth15(false);
    setTalFourth16(false);
    setTalFourth17(false);
    setTalFourth18(false);
    setTalFourthc1(false);
    setTalFourthc2(false);
    setTalFourthc3(false);
    setTalFourthc4(false);
    setTalFourthc5(false);
    setTalFourthc6(false);
    setTalFourthc7(false);
    setTalFourthc8(false);
    setTalFourthc9(false);
    setTalFourthc10(false);
    setTalFourthc11(false);
    setTalFourthc12(false);
    setTalFourthc13(false);
    setTalFourthc14(false);
    setTalFourthc15(false);
    setTalFourthc16(false);
    setTalFourthc17(false);
    setTalFourthc18(false);
  };
  
  const handleThirdClick = () => {
    setTalFirstOne(false);
    setTalFirstTwo(false);
    setTalFirstThree(!talFirstThree);
    setTalSeconda1(false);
    setTalSeconda2(false);
    setTalSeconda3(false);
    setTalSeconda4(false);
    setTalSeconda5(false);
    setTalSeconda6(false);
    setTalThird1(false);
    setTalThird2(false);
    setTalThird3(false);
    setTalThird4(false);
    setTalThird5(false);
    setTalThird6(false);
    setTalThird7(false);
    setTalThird8(false);
    setTalThird9(false);
    setTalThird10(false);
    setTalThird11(false);
    setTalThird12(false);
    setTalThird13(false);
    setTalThird14(false);
    setTalThird15(false);
    setTalThird16(false);
    setTalThird17(false);
    setTalThird18(false);
    setTalFourth1(false);
    setTalFourth2(false);
    setTalFourth3(false);
    setTalFourth4(false);
    setTalFourth5(false);
    setTalFourth6(false);
    setTalFourth7(false);
    setTalFourth8(false);
    setTalFourth9(false);
    setTalFourth10(false);
    setTalFourth11(false);
    setTalFourth12(false);
    setTalFourth13(false);
    setTalFourth14(false);
    setTalFourth15(false);
    setTalFourth16(false);
    setTalFourth17(false);
    setTalFourth18(false);

  };
  
  const handleTalentItemClicka1 = () => {setTalSeconda1(!talSeconda1)};
  const handleTalentItemClicka2 = () => {setTalSeconda2(!talSeconda2)};
  const handleTalentItemClicka3 = () => {setTalSeconda3(!talSeconda3)};
  const handleTalentItemClicka4 = () => {setTalSeconda4(!talSeconda4)};
  const handleTalentItemClicka5 = () => {setTalSeconda5(!talSeconda5)};
  const handleTalentItemClicka6 = () => {setTalSeconda6(!talSeconda6)};

  const handleTalentItemClickb1= () => {setTalThird1(!talThirdb1)};
  const handleTalentItemClickb2= () => {setTalThird2(!talThirdb2)};
  const handleTalentItemClickb3= () => {setTalThird3(!talThirdb3)};
  const handleTalentItemClickb4 = () => {setTalThird4(!talThirdb4)};
  const handleTalentItemClickb5 = () => {setTalThird5(!talThirdb5)};
  const handleTalentItemClickb6 = () => {setTalThird6(!talThirdb6)};
  const handleTalentItemClickb7 = () => {setTalThird7(!talThirdb7)};
  const handleTalentItemClickb8 = () => {setTalThird8(!talThirdb8)};
  const handleTalentItemClickb9 = () => {setTalThird9(!talThirdb9)};
  const handleTalentItemClickb10 = () => {setTalThird10(!talThirdb10)};
  const handleTalentItemClickb11 = () => {setTalThird11(!talThirdb11)};
  const handleTalentItemClickb12 = () => {setTalThird12(!talThirdb12)};
  const handleTalentItemClickb13 = () => {setTalThird13(!talThirdb13)};
  const handleTalentItemClickb14 = () => {setTalThird14(!talThirdb14)};
  const handleTalentItemClickb15 = () => {setTalThird15(!talThirdb15)};
  const handleTalentItemClickb16 = () => {setTalThird16(!talThirdb16)};
  const handleTalentItemClickb17 = () => {setTalThird17(!talThirdb17)};
  const handleTalentItemClickb18 = () => {setTalThird18(!talThirdb18)};

  const handleTalentItemClickc1= () => {setTalFourth1(!talFourthc1)};
  const handleTalentItemClickc2= () => {setTalFourth2(!talFourthc2)};
  const handleTalentItemClickc3= () => {setTalFourth3(!talFourthc3)};
  const handleTalentItemClickc4 = () => {setTalFourth4(!talFourthc4)};
  const handleTalentItemClickc5 = () => {setTalFourth5(!talFourthc5)};
  const handleTalentItemClickc6 = () => {setTalFourth6(!talFourthc6)};
  const handleTalentItemClickc7 = () => {setTalFourth7(!talFourthc7)};
  const handleTalentItemClickc8 = () => {setTalFourth8(!talFourthc8)};
  const handleTalentItemClickc9 = () => {setTalFourth9(!talFourthc9)};
  const handleTalentItemClickc10 = () => {setTalFourth10(!talFourthc10)};
  const handleTalentItemClickc11 = () => {setTalFourth11(!talFourthc11)};
  const handleTalentItemClickc12 = () => {setTalFourth12(!talFourthc12)};
  const handleTalentItemClickc13 = () => {setTalFourth13(!talFourthc13)};
  const handleTalentItemClickc14 = () => {setTalFourth14(!talFourthc14)};
  const handleTalentItemClickc15 = () => {setTalFourth15(!talFourthc15)};
  const handleTalentItemClickc16 = () => {setTalFourth16(!talFourthc16)};
  const handleTalentItemClickc17 = () => {setTalFourth17(!talFourthc17)};
  const handleTalentItemClickc18 = () => {setTalFourth18(!talFourthc18)};

  const handleTalentItemClickcc1= () => {setTalFourthc1(!talFourthcc1)};
  const handleTalentItemClickcc2= () => {setTalFourthc2(!talFourthcc2)};
  const handleTalentItemClickcc3= () => {setTalFourthc3(!talFourthcc3)};
  const handleTalentItemClickcc4 = () => {setTalFourthc4(!talFourthcc4)};
  const handleTalentItemClickcc5 = () => {setTalFourthc5(!talFourthcc5)};
  const handleTalentItemClickcc6 = () => {setTalFourthc6(!talFourthcc6)};
  const handleTalentItemClickcc7 = () => {setTalFourthc7(!talFourthcc7)};
  const handleTalentItemClickcc8 = () => {setTalFourthc8(!talFourthcc8)};
  const handleTalentItemClickcc9 = () => {setTalFourthc9(!talFourthcc9)};
  const handleTalentItemClickcc10 = () => {setTalFourthc10(!talFourthcc10)};
  const handleTalentItemClickcc11 = () => {setTalFourthc11(!talFourthcc11)};
  const handleTalentItemClickcc12 = () => {setTalFourthc12(!talFourthcc12)};
  const handleTalentItemClickcc13 = () => {setTalFourthc13(!talFourthcc13)};
  const handleTalentItemClickcc14 = () => {setTalFourthc14(!talFourthcc14)};
  const handleTalentItemClickcc15 = () => {setTalFourthc15(!talFourthcc15)};
  const handleTalentItemClickcc16 = () => {setTalFourthc16(!talFourthcc16)};
  const handleTalentItemClickcc17 = () => {setTalFourthc17(!talFourthcc17)};
  const handleTalentItemClickcc18 = () => {setTalFourthc18(!talFourthcc18)};


  return (
    <div className='talent-div'>
    {(talFirstOne || talFirstTwo || talFirstThree) && <LineConect positioningLine={"105px 5% 0px 5%"} colorLine={"#9306f1"} heightLine={"10px"} />}
    {/* {talFirstOne && <LineConect positioningLine={positionLine1} colorLine={colorLine1} heightLine={heightLine1} widthLine={widthLine1}/>} */}
      <div className='talent-first'>
        <button onClick={handleFirstClick} className={talFirstOne ? "talent-first-selected talent-items":'talent-first-1 talent-items'}>{talentfirst1}</button>
        <button onClick={handleSecondClick} className={talFirstTwo ? "talent-second-selected talent-items":'talent-first-2 talent-items' }>{talentfirst2}</button>
        <button onClick={handleThirdClick} className={talFirstThree ? "talent-third-selected talent-items":'talent-first-3 talent-items'}>{talentfirst3}</button>
      </div>
      <div >
          {talFirstOne &&  <article className='talent-text1'>{text1}</article>}
          {talFirstTwo &&  <article className='talent-text1'>{text2}</article>}
          {talFirstThree &&  <article className='talent-text1'>{text3}</article>}
          <div className='talentSecond'>
            {talFirstOne && <TalentItem onItemClick={handleTalentItemClicka1}  itemOption={talSecond1}/>}
            {talFirstOne && <TalentItem onItemClick={handleTalentItemClicka2}   itemOption={talSecond2}/>}
          </div>
          <div className='talentSecond'>
            {talFirstTwo && <TalentItem onItemClick={handleTalentItemClicka3}   itemOption={talSecond3}/>}
            {talFirstTwo && <TalentItem onItemClick={handleTalentItemClicka4}   itemOption={talSecond4}/>}
          </div>
          <div className='talentSecond'>
            {talFirstThree && <TalentItem onItemClick={handleTalentItemClicka5}   itemOption={talSecond5}/>}
            {talFirstThree && <TalentItem onItemClick={handleTalentItemClicka6}   itemOption={talSecond6}/>}
          </div>
      </div>
      <div>
          <div className='talentSecond'>
              {(talSeconda1 )&& <TalentItem onItemClick={handleTalentItemClickb1}   itemOption={talThird1}/>}
              {(talSeconda1 )&& <TalentItem onItemClick={handleTalentItemClickb2}   itemOption={talThird2}/>}
              {(talSeconda1 )&& <TalentItem onItemClick={handleTalentItemClickb3}   itemOption={talThird3}/>}
              {(talSeconda2 )&& <TalentItem onItemClick={handleTalentItemClickb4}   itemOption={talThird4}/>}
              {(talSeconda2 )&& <TalentItem onItemClick={handleTalentItemClickb5}   itemOption={talThird5}/>}
              {(talSeconda2 )&& <TalentItem onItemClick={handleTalentItemClickb6}   itemOption={talThird6}/>}
          </div>
          <div className='talentSecond'>
              {(talSeconda3) && <TalentItem onItemClick={handleTalentItemClickb7}   itemOption={talThird7}/>}
              {(talSeconda3) && <TalentItem onItemClick={handleTalentItemClickb8}   itemOption={talThird8}/>}
              {(talSeconda3) && <TalentItem onItemClick={handleTalentItemClickb9}   itemOption={talThird9}/>}
              {(talSeconda4) && <TalentItem onItemClick={handleTalentItemClickb10}   itemOption={talThird10}/>}
              {(talSeconda4) && <TalentItem onItemClick={handleTalentItemClickb11}   itemOption={talThird11}/>}
              {(talSeconda4) && <TalentItem onItemClick={handleTalentItemClickb12}   itemOption={talThird12}/>}
          </div>
          <div className='talentSecond'>
              {(talSeconda5) && <TalentItem onItemClick={handleTalentItemClickb13}   itemOption={talThird13}/>}
              {(talSeconda5) && <TalentItem onItemClick={handleTalentItemClickb14}   itemOption={talThird14}/>}
              {(talSeconda5) && <TalentItem onItemClick={handleTalentItemClickb15}   itemOption={talThird15}/>}
              {(talSeconda6) && <TalentItem onItemClick={handleTalentItemClickb16}   itemOption={talThird16}/>}
              {(talSeconda6) && <TalentItem onItemClick={handleTalentItemClickb17}   itemOption={talThird17}/>}
              {(talSeconda6) && <TalentItem onItemClick={handleTalentItemClickb18}   itemOption={talThird18}/>}
          </div>
      </div>
      <div>
          <div className='talentSecond'>
              {(talThirdb1 )&& <TalentItem onItemClick={handleTalentItemClickc1}   itemOption={talFourth1}/>}
              {(talThirdb1 )&& <TalentItem onItemClick={handleTalentItemClickc2}   itemOption={talFourth2}/>}
              {(talThirdb2 )&& <TalentItem onItemClick={handleTalentItemClickc3}   itemOption={talFourth3}/>}
              {(talThirdb2 )&& <TalentItem onItemClick={handleTalentItemClickc4}   itemOption={talFourth4}/>}
              {(talThirdb3 )&& <TalentItem onItemClick={handleTalentItemClickc5}   itemOption={talFourth5}/>}
              {(talThirdb3 )&& <TalentItem onItemClick={handleTalentItemClickc6}   itemOption={talFourth6}/>}
          </div>
          <div className='talentSecond'>
              {(talThirdb4) && <TalentItem onItemClick={handleTalentItemClickc7}   itemOption={talFourth7}/>}
              {(talThirdb4) && <TalentItem onItemClick={handleTalentItemClickc8}   itemOption={talFourth8}/>}
              {(talThirdb5) && <TalentItem onItemClick={handleTalentItemClickc9}   itemOption={talFourth9}/>}
              {(talThirdb5) && <TalentItem onItemClick={handleTalentItemClickc10}   itemOption={talFourth10}/>}
              {(talThirdb6) && <TalentItem onItemClick={handleTalentItemClickc11}   itemOption={talFourth11}/>}
              {(talThirdb6) && <TalentItem onItemClick={handleTalentItemClickc12}   itemOption={talFourth12}/>}
          </div>
          <div className='talentSecond'>
              {(talThirdb7) && <TalentItem onItemClick={handleTalentItemClickc13}   itemOption={talFourth13}/>}
              {(talThirdb7) && <TalentItem onItemClick={handleTalentItemClickc14}   itemOption={talFourth14}/>}
              {(talThirdb8) && <TalentItem onItemClick={handleTalentItemClickc15}   itemOption={talFourth15}/>}
              {(talThirdb8) && <TalentItem onItemClick={handleTalentItemClickc16}   itemOption={talFourth16}/>}
              {(talThirdb9) && <TalentItem onItemClick={handleTalentItemClickc17}   itemOption={talFourth17}/>}
              {(talThirdb9) && <TalentItem onItemClick={handleTalentItemClickc18}   itemOption={talFourth18}/>}
          </div>
          <div className='talentSecond'>
              {(talThirdb10 )&& <TalentItem onItemClick={handleTalentItemClickcc1}   itemOption={talFourth1c}/>}
              {(talThirdb10 )&& <TalentItem onItemClick={handleTalentItemClickcc2}   itemOption={talFourth2c}/>}
              {(talThirdb11 )&& <TalentItem onItemClick={handleTalentItemClickcc3}   itemOption={talFourth3c}/>}
              {(talThirdb11 )&& <TalentItem onItemClick={handleTalentItemClickcc4}   itemOption={talFourth4c}/>}
              {(talThirdb12 )&& <TalentItem onItemClick={handleTalentItemClickcc5}   itemOption={talFourth5c}/>}
              {(talThirdb12 )&& <TalentItem onItemClick={handleTalentItemClickcc6}   itemOption={talFourth6c}/>}
          </div>
          <div className='talentSecond'>
              {(talThirdb13) && <TalentItem onItemClick={handleTalentItemClickcc7}   itemOption={talFourth7c}/>}
              {(talThirdb13) && <TalentItem onItemClick={handleTalentItemClickcc8}   itemOption={talFourth8c}/>}
              {(talThirdb14) && <TalentItem onItemClick={handleTalentItemClickcc9}   itemOption={talFourth9c}/>}
              {(talThirdb14) && <TalentItem onItemClick={handleTalentItemClickcc10}   itemOption={talFourth10c}/>}
              {(talThirdb15) && <TalentItem onItemClick={handleTalentItemClickcc11}   itemOption={talFourth11c}/>}
              {(talThirdb15) && <TalentItem onItemClick={handleTalentItemClickcc12}   itemOption={talFourth12c}/>}
          </div>
          <div className='talentSecond'>
              {(talThirdb16) && <TalentItem onItemClick={handleTalentItemClickcc13}   itemOption={talFourth13c}/>}
              {(talThirdb16) && <TalentItem onItemClick={handleTalentItemClickcc14}   itemOption={talFourth14c}/>}
              {(talThirdb17) && <TalentItem onItemClick={handleTalentItemClickcc15}   itemOption={talFourth15c}/>}
              {(talThirdb17) && <TalentItem onItemClick={handleTalentItemClickcc16}   itemOption={talFourth16c}/>}
              {(talThirdb18) && <TalentItem onItemClick={handleTalentItemClickcc17}   itemOption={talFourth17c}/>}
              {(talThirdb18) && <TalentItem onItemClick={handleTalentItemClickcc18}   itemOption={talFourth18c}/>}
          </div>
      </div>
    </div>
  )
}

export default Talent