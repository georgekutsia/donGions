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
  talFifth1,talFifth2, talFifth3, talFifth4, talFifth5, talFifth6, talFifth7, talFifth8, talFifth9, talFifth10, talFifth11, talFifth12, talFifth13, talFifth14, talFifth15, talFifth16, talFifth17, talFifth18, 
  talFifth19,talFifth20, talFifth21, talFifth22, talFifth23, talFifth24, talFifth25, talFifth26, talFifth27, talFifth28, talFifth29, talFifth30, talFifth31, talFifth32, talFifth33, talFifth34, talFifth35, talFifth36, 
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

  const [talFifthd1, setTalFifthd1] = useState(false)
  const [talFifthd2, setTalFifthd2] = useState(false)
  const [talFifthd3, setTalFifthd3] = useState(false)
  const [talFifthd4, setTalFifthd4] = useState(false)
  const [talFifthd5, setTalFifthd5] = useState(false)
  const [talFifthd6, setTalFifthd6] = useState(false)
  const [talFifthd7, setTalFifthd7] = useState(false)
  const [talFifthd8, setTalFifthd8] = useState(false)
  const [talFifthd9, setTalFifthd9] = useState(false)
  const [talFifthd10, setTalFifthd10] = useState(false)
  const [talFifthd11, setTalFifthd11] = useState(false)
  const [talFifthd12, setTalFifthd12] = useState(false)
  const [talFifthd13, setTalFifthd13] = useState(false)
  const [talFifthd14, setTalFifthd14] = useState(false)
  const [talFifthd15, setTalFifthd15] = useState(false)
  const [talFifthd16, setTalFifthd16] = useState(false)
  const [talFifthd17, setTalFifthd17] = useState(false)
  const [talFifthd18, setTalFifthd18] = useState(false)
  const [talFifthd19, setTalFifthd19] = useState(false)
  const [talFifthd20, setTalFifthd20] = useState(false)
  const [talFifthd21, setTalFifthd21] = useState(false)
  const [talFifthd22, setTalFifthd22] = useState(false)
  const [talFifthd23, setTalFifthd23] = useState(false)
  const [talFifthd24, setTalFifthd24] = useState(false)
  const [talFifthd25, setTalFifthd25] = useState(false)
  const [talFifthd26, setTalFifthd26] = useState(false)
  const [talFifthd27, setTalFifthd27] = useState(false)
  const [talFifthd28, setTalFifthd28] = useState(false)
  const [talFifthd29, setTalFifthd29] = useState(false)
  const [talFifthd30, setTalFifthd30] = useState(false)
  const [talFifthd31, setTalFifthd31] = useState(false)
  const [talFifthd32, setTalFifthd32] = useState(false)
  const [talFifthd33, setTalFifthd33] = useState(false)
  const [talFifthd34, setTalFifthd34] = useState(false)
  const [talFifthd35, setTalFifthd35] = useState(false)
  const [talFifthd36, setTalFifthd36] = useState(false)
  
  

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

  const handleTalentItemClickd1= () => {setTalFifthd1(!talFifthd1)};
  const handleTalentItemClickd2= () => {setTalFifthd2(!talFifthd2)};
  const handleTalentItemClickd3= () => {setTalFifthd3(!talFifthd3)};
  const handleTalentItemClickd4 = () => {setTalFifthd4(!talFifthd4)};
  const handleTalentItemClickd5 = () => {setTalFifthd5(!talFifthd5)};
  const handleTalentItemClickd6 = () => {setTalFifthd6(!talFifthd6)};
  const handleTalentItemClickd7 = () => {setTalFifthd7(!talFifthd7)};
  const handleTalentItemClickd8 = () => {setTalFifthd8(!talFifthd8)};
  const handleTalentItemClickd9 = () => {setTalFifthd9(!talFifthd9)};
  const handleTalentItemClickd10 = () => {setTalFifthd10(!talFifthd10)};
  const handleTalentItemClickd11 = () => {setTalFifthd11(!talFifthd11)};
  const handleTalentItemClickd12 = () => {setTalFifthd12(!talFifthd12)};
  const handleTalentItemClickd13 = () => {setTalFifthd13(!talFifthd13)};
  const handleTalentItemClickd14 = () => {setTalFifthd14(!talFifthd14)};
  const handleTalentItemClickd15 = () => {setTalFifthd15(!talFifthd15)};
  const handleTalentItemClickd16 = () => {setTalFifthd16(!talFifthd16)};
  const handleTalentItemClickd17 = () => {setTalFifthd17(!talFifthd17)};
  const handleTalentItemClickd18 = () => {setTalFifthd18(!talFifthd18)};
  const handleTalentItemClickd19= () => {setTalFifthd19(!talFifthd19)};
  const handleTalentItemClickd20= () => {setTalFifthd20(!talFifthd20)};
  const handleTalentItemClickd21= () => {setTalFifthd21(!talFifthd21)};
  const handleTalentItemClickd22 = () => {setTalFifthd22(!talFifthd22)};
  const handleTalentItemClickd23 = () => {setTalFifthd23(!talFifthd23)};
  const handleTalentItemClickd24 = () => {setTalFifthd24(!talFifthd24)};
  const handleTalentItemClickd25 = () => {setTalFifthd25(!talFifthd25)};
  const handleTalentItemClickd26 = () => {setTalFifthd26(!talFifthd26)};
  const handleTalentItemClickd27 = () => {setTalFifthd27(!talFifthd27)};
  const handleTalentItemClickd28 = () => {setTalFifthd28(!talFifthd28)};
  const handleTalentItemClickd29 = () => {setTalFifthd29(!talFifthd29)};
  const handleTalentItemClickd30 = () => {setTalFifthd30(!talFifthd30)};
  const handleTalentItemClickd31 = () => {setTalFifthd31(!talFifthd31)};
  const handleTalentItemClickd32 = () => {setTalFifthd32(!talFifthd32)};
  const handleTalentItemClickd33 = () => {setTalFifthd33(!talFifthd33)};
  const handleTalentItemClickd34 = () => {setTalFifthd34(!talFifthd34)};
  const handleTalentItemClickd35 = () => {setTalFifthd35(!talFifthd35)};
  const handleTalentItemClickd36 = () => {setTalFifthd36(!talFifthd36)};
  return (
    <div className='talent-div'>
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
            {talFirstOne && <TalentItem onItemClick={handleTalentItemClicka1} aver={"true"} itemOption={talSecond1}/>}
            {talFirstOne && <TalentItem onItemClick={handleTalentItemClicka2}   itemOption={talSecond2}/>}
            {talFirstTwo && <TalentItem onItemClick={handleTalentItemClicka3} aver={"true"}   itemOption={talSecond3}/>}
            {talFirstTwo && <TalentItem onItemClick={handleTalentItemClicka4}   itemOption={talSecond4}/>}
            {talFirstThree && <TalentItem onItemClick={handleTalentItemClicka5} aver={"true"}   itemOption={talSecond5}/>}
            {talFirstThree && <TalentItem onItemClick={handleTalentItemClicka6}   itemOption={talSecond6}/>}
          </div>
      </div>
      <div>
          <div className='talentSecond'>
              {(talSeconda1 )&& <TalentItem onItemClick={handleTalentItemClickb1} aver={"true"}  itemOption={talThird1}/>}
              {(talSeconda1 )&& <TalentItem onItemClick={handleTalentItemClickb2} aver={"true"}  itemOption={talThird2}/>}
              {(talSeconda1 )&& <TalentItem onItemClick={handleTalentItemClickb3}   itemOption={talThird3}/>}
              {(talSeconda2 )&& <TalentItem onItemClick={handleTalentItemClickb4} aver={"true"}  itemOption={talThird4}/>}
              {(talSeconda2 )&& <TalentItem onItemClick={handleTalentItemClickb5} aver={"true"}  itemOption={talThird5}/>}
              {(talSeconda2 )&& <TalentItem onItemClick={handleTalentItemClickb6}   itemOption={talThird6}/>}

              {(talSeconda3) && <TalentItem onItemClick={handleTalentItemClickb7} aver={"true"}  itemOption={talThird7}/>}
              {(talSeconda3) && <TalentItem onItemClick={handleTalentItemClickb8} aver={"true"}  itemOption={talThird8}/>}
              {(talSeconda3) && <TalentItem onItemClick={handleTalentItemClickb9}   itemOption={talThird9}/>}
              {(talSeconda4) && <TalentItem onItemClick={handleTalentItemClickb10} aver={"true"}  itemOption={talThird10}/>}
              {(talSeconda4) && <TalentItem onItemClick={handleTalentItemClickb11} aver={"true"}  itemOption={talThird11}/>}
              {(talSeconda4) && <TalentItem onItemClick={handleTalentItemClickb12}   itemOption={talThird12}/>}

              {(talSeconda5) && <TalentItem onItemClick={handleTalentItemClickb13} aver={"true"}  itemOption={talThird13}/>}
              {(talSeconda5) && <TalentItem onItemClick={handleTalentItemClickb14} aver={"true"}  itemOption={talThird14}/>}
              {(talSeconda5) && <TalentItem onItemClick={handleTalentItemClickb15}   itemOption={talThird15}/>}
              {(talSeconda6) && <TalentItem onItemClick={handleTalentItemClickb16} aver={"true"}  itemOption={talThird16}/>}
              {(talSeconda6) && <TalentItem onItemClick={handleTalentItemClickb17} aver={"true"}  itemOption={talThird17}/>}
              {(talSeconda6) && <TalentItem onItemClick={handleTalentItemClickb18}   itemOption={talThird18}/>}
          </div>
      </div>
      <div>
          <div className='talentSecond'>
              {(talThirdb1 )&& <TalentItem onItemClick={handleTalentItemClickc1} aver={"true"}  itemOption={talFourth1}/>}
              {(talThirdb1 )&& <TalentItem onItemClick={handleTalentItemClickc2}   itemOption={talFourth2}/>}
              {(talThirdb2 )&& <TalentItem onItemClick={handleTalentItemClickc3} aver={"true"}  itemOption={talFourth3}/>}
              {(talThirdb2 )&& <TalentItem onItemClick={handleTalentItemClickc4}   itemOption={talFourth4}/>}
              {(talThirdb3 )&& <TalentItem onItemClick={handleTalentItemClickc5} aver={"true"}  itemOption={talFourth5}/>}
              {(talThirdb3 )&& <TalentItem onItemClick={handleTalentItemClickc6}   itemOption={talFourth6}/>}

              {(talThirdb4) && <TalentItem onItemClick={handleTalentItemClickc7} aver={"true"}  itemOption={talFourth7}/>}
              {(talThirdb4) && <TalentItem onItemClick={handleTalentItemClickc8}   itemOption={talFourth8}/>}
              {(talThirdb5) && <TalentItem onItemClick={handleTalentItemClickc9}  aver={"true"} itemOption={talFourth9}/>}
              {(talThirdb5) && <TalentItem onItemClick={handleTalentItemClickc10}   itemOption={talFourth10}/>}
              {(talThirdb6) && <TalentItem onItemClick={handleTalentItemClickc11} aver={"true"}  itemOption={talFourth11}/>}
              {(talThirdb6) && <TalentItem onItemClick={handleTalentItemClickc12}   itemOption={talFourth12}/>}

              {(talThirdb7) && <TalentItem onItemClick={handleTalentItemClickc13} aver={"true"}  itemOption={talFourth13}/>}
              {(talThirdb7) && <TalentItem onItemClick={handleTalentItemClickc14}   itemOption={talFourth14}/>}
              {(talThirdb8) && <TalentItem onItemClick={handleTalentItemClickc15} aver={"true"}  itemOption={talFourth15}/>}
              {(talThirdb8) && <TalentItem onItemClick={handleTalentItemClickc16}   itemOption={talFourth16}/>}
              {(talThirdb9) && <TalentItem onItemClick={handleTalentItemClickc17} aver={"true"}  itemOption={talFourth17}/>}
              {(talThirdb9) && <TalentItem onItemClick={handleTalentItemClickc18}   itemOption={talFourth18}/>}

              {(talThirdb10 )&& <TalentItem onItemClick={handleTalentItemClickcc1} aver={"true"}  itemOption={talFourth1c}/>}
              {(talThirdb10 )&& <TalentItem onItemClick={handleTalentItemClickcc2}   itemOption={talFourth2c}/>}
              {(talThirdb11 )&& <TalentItem onItemClick={handleTalentItemClickcc3} aver={"true"}  itemOption={talFourth3c}/>}
              {(talThirdb11 )&& <TalentItem onItemClick={handleTalentItemClickcc4}   itemOption={talFourth4c}/>}
              {(talThirdb12 )&& <TalentItem onItemClick={handleTalentItemClickcc5} aver={"true"}  itemOption={talFourth5c}/>}
              {(talThirdb12 )&& <TalentItem onItemClick={handleTalentItemClickcc6}   itemOption={talFourth6c}/>}

              {(talThirdb13) && <TalentItem onItemClick={handleTalentItemClickcc7} aver={"true"}  itemOption={talFourth7c}/>}
              {(talThirdb13) && <TalentItem onItemClick={handleTalentItemClickcc8}   itemOption={talFourth8c}/>}
              {(talThirdb14) && <TalentItem onItemClick={handleTalentItemClickcc9} aver={"true"}  itemOption={talFourth9c}/>}
              {(talThirdb14) && <TalentItem onItemClick={handleTalentItemClickcc10}   itemOption={talFourth10c}/>}
              {(talThirdb15) && <TalentItem onItemClick={handleTalentItemClickcc11} aver={"true"}  itemOption={talFourth11c}/>}
              {(talThirdb15) && <TalentItem onItemClick={handleTalentItemClickcc12}   itemOption={talFourth12c}/>}

              {(talThirdb16) && <TalentItem onItemClick={handleTalentItemClickcc13} aver={"true"}  itemOption={talFourth13c}/>}
              {(talThirdb16) && <TalentItem onItemClick={handleTalentItemClickcc14}   itemOption={talFourth14c}/>}
              {(talThirdb17) && <TalentItem onItemClick={handleTalentItemClickcc15} aver={"true"}  itemOption={talFourth15c}/>}
              {(talThirdb17) && <TalentItem onItemClick={handleTalentItemClickcc16}   itemOption={talFourth16c}/>}
              {(talThirdb18) && <TalentItem onItemClick={handleTalentItemClickcc17} aver={"true"}  itemOption={talFourth17c}/>}
              {(talThirdb18) && <TalentItem onItemClick={handleTalentItemClickcc18}   itemOption={talFourth18c}/>}
          </div>
          <div>
            <div className='talentSecond'>
                {(talFourthc1 )&& <TalentItem onItemClick={handleTalentItemClickd1}   itemOption={talFifth1}/>}
                {(talFourthc2 )&& <TalentItem onItemClick={handleTalentItemClickd2}   itemOption={talFifth2}/>}
                {(talFourthc3 )&& <TalentItem onItemClick={handleTalentItemClickd3}   itemOption={talFifth3}/>}

                {(talFourthc4) && <TalentItem onItemClick={handleTalentItemClickd4}   itemOption={talFifth4}/>}
                {(talFourthc5) && <TalentItem onItemClick={handleTalentItemClickd5}   itemOption={talFifth5}/>}
                {(talFourthc6) && <TalentItem onItemClick={handleTalentItemClickd6}   itemOption={talFifth6}/>}

                {(talFourthc7) && <TalentItem onItemClick={handleTalentItemClickd7}   itemOption={talFifth7}/>}
                {(talFourthc8) && <TalentItem onItemClick={handleTalentItemClickd8}   itemOption={talFifth8}/>}
                {(talFourthc9) && <TalentItem onItemClick={handleTalentItemClickd9}   itemOption={talFifth9}/>}

                {(talFourthc10 )&& <TalentItem onItemClick={handleTalentItemClickd10}   itemOption={talFifth10}/>}
                {(talFourthc11 )&& <TalentItem onItemClick={handleTalentItemClickd11}   itemOption={talFifth11}/>}
                {(talFourthc12 )&& <TalentItem onItemClick={handleTalentItemClickd12}   itemOption={talFifth12}/>}

                {(talFourthc13) && <TalentItem onItemClick={handleTalentItemClickd13}   itemOption={talFifth13}/>}
                {(talFourthc14) && <TalentItem onItemClick={handleTalentItemClickd14}   itemOption={talFifth14}/>}
                {(talFourthc15) && <TalentItem onItemClick={handleTalentItemClickd15}   itemOption={talFifth15}/>}

                {(talFourthc16) && <TalentItem onItemClick={handleTalentItemClickd16}   itemOption={talFifth16}/>}
                {(talFourthc17) && <TalentItem onItemClick={handleTalentItemClickd17}   itemOption={talFifth17}/>}
                {(talFourthc18) && <TalentItem onItemClick={handleTalentItemClickd18}   itemOption={talFifth18}/>}

                {(talFourthcc1 )&& <TalentItem onItemClick={handleTalentItemClickd19}   itemOption={talFifth19}/>}
                {(talFourthcc2 )&& <TalentItem onItemClick={handleTalentItemClickd20}   itemOption={talFifth20}/>}
                {(talFourthcc3 )&& <TalentItem onItemClick={handleTalentItemClickd21}   itemOption={talFifth21}/>}

                {(talFourthcc4) && <TalentItem onItemClick={handleTalentItemClickd22}   itemOption={talFifth22}/>}
                {(talFourthcc5) && <TalentItem onItemClick={handleTalentItemClickd23}   itemOption={talFifth23}/>}
                {(talFourthcc6) && <TalentItem onItemClick={handleTalentItemClickd24}   itemOption={talFifth24}/>}

                {(talFourthcc7) && <TalentItem onItemClick={handleTalentItemClickd25}   itemOption={talFifth25}/>}
                {(talFourthcc8) && <TalentItem onItemClick={handleTalentItemClickd26}   itemOption={talFifth26}/>}
                {(talFourthcc9) && <TalentItem onItemClick={handleTalentItemClickd27}   itemOption={talFifth27}/>}

                {(talFourthcc10 )&& <TalentItem onItemClick={handleTalentItemClickd28}   itemOption={talFifth28}/>}
                {(talFourthcc11 )&& <TalentItem onItemClick={handleTalentItemClickd29}   itemOption={talFifth29}/>}
                {(talFourthcc12 )&& <TalentItem onItemClick={handleTalentItemClickd30}   itemOption={talFifth30}/>}

                {(talFourthcc13) && <TalentItem onItemClick={handleTalentItemClickd31}   itemOption={talFifth31}/>}
                {(talFourthcc14) && <TalentItem onItemClick={handleTalentItemClickd32}   itemOption={talFifth32}/>}
                {(talFourthcc15) && <TalentItem onItemClick={handleTalentItemClickd33}   itemOption={talFifth33}/>}

                {(talFourthcc16) && <TalentItem onItemClick={handleTalentItemClickd34}   itemOption={talFifth34}/>}
                {(talFourthcc17) && <TalentItem onItemClick={handleTalentItemClickd35}   itemOption={talFifth35}/>}
                {(talFourthcc18) && <TalentItem onItemClick={handleTalentItemClickd36}   itemOption={talFifth36}/>}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Talent