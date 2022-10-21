import React, { useEffect, useState } from "react";
import { Shop, SwordsBall, WordCloud } from "../../component";
import {
  CSSTransition,
  SwitchTransition,
  Transition,
} from "react-transition-group";
import FadeInOut from "../../component/FadeInOut";

import ArmeriaScreen from "./ArmeriaScreen";
import Books from "./BooksScreen";
import HabilityScreen from "./HabilityScreen";

function ShopScreen() {
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    setShowPage(true);
  }, []);

  const [armeria, setArmeria] = useState(true);
  const [hability, setHability] = useState(false);
  const [book, setBook] = useState(false);

  const showArm = () => setArmeria(true);
  const hideArm = () => setArmeria(false);
  const showBook = () => setBook(true);
  const hideBook = () => setBook(false);
  const showHab = () => setHability(true);
  const hideHab = () => setHability(false);

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
              />
            </>
          )}
        <h1 align="center" className="name-shop">
          Tienda de Patek el Ruinafortunas
        </h1>
        </FadeInOut>
      </div>

      <FadeInOut show={armeria} duration={200}>
        <div>{armeria && <ArmeriaScreen />}</div>
      </FadeInOut>
      <FadeInOut show={hability} duration={200}>
        {hability && <HabilityScreen />}
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
