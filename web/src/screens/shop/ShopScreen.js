import React, { useEffect, useState } from "react";
import { Shop } from "../../component";

import FadeInOut from "../../component/FadeInOut";

import ArmeriaScreen from "./ArmeriaScreen";
import Books from "./BooksScreen";
import HabilityScreen from "./HabilityScreen";
import TrasteroScreen from "./TrasteroScreen";
import SpecialScreens from "./SpecialScreen";

function ShopScreen() {
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    setShowPage(true);
  }, []);

  const [armeria, setArmeria] = useState(false);
  const [hability, setHability] = useState(false);
  const [book, setBook] = useState(false);
  const [trast, setTrast] = useState(true);
  const [special, setSpecial] = useState(false);

  const showArm = () => setArmeria(true);
  const hideArm = () => setArmeria(false);
  const showBook = () => setBook(true);
  const hideBook = () => setBook(false);
  const showHab = () => setHability(true);
  const hideHab = () => setHability(false);
  const showTrast = () => setTrast(true);
  const hideTrast = () => setTrast(false);
  const showSpecial = () => setSpecial(true)
  const hideSpecial = () => setSpecial(false)

  return (
    <div align="center">
      <div>
        <FadeInOut show={showPage} duration={600}>
          {showPage && (
            <>
              <Shop
                armOn={showArm}
                armOff={hideArm}
                habOn={showHab}
                habOff={hideHab}
                bookOn={showBook}
                bookOff={hideBook}
                trastOn={showTrast}
                trastOff={hideTrast}
                speOn={showSpecial}
                speOff={hideSpecial}
              />
            </>
          )}
        <h1 align="center" className="name-shop">
          Tienda de <br /> Patek <br /> Ruinafortunas
        </h1>
        </FadeInOut>
      </div>
      <FadeInOut show={special} duration={200}>
        <div style={{marginBottom:"200px"}}>{special && <SpecialScreens />}</div>
      </FadeInOut>
      <FadeInOut show={trast} duration={200}>
        <div style={{marginBottom:"200px"}}>{trast && <TrasteroScreen />}</div>
      </FadeInOut>
      <FadeInOut show={armeria} duration={200}>
        <div style={{marginBottom:"200px"}}>{armeria && <ArmeriaScreen />}</div>
      </FadeInOut>

      <FadeInOut show={hability} duration={200}>
      <div style={{marginBottom:"200px"}}>{hability && <HabilityScreen />}</div>
      </FadeInOut>

      <FadeInOut show={book} duration={200}>
        {book && <Books />}
      </FadeInOut>

      {/* <SwordsBall ballDiv={"sky-ball"} ballImgs={"ball-ball"}/> */}
      {/* <SwordsBall ballDiv={"sky-plan"} ballImgs={"plan-plan"}/> */}
      {/* <WordCloud/> */}
    </div>
  );
}

export default ShopScreen;
