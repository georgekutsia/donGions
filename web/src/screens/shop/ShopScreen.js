import React, { useState } from "react";
import { Shop, SwordsBall, WordCloud } from "../../component";
import {
  CSSTransition,
  SwitchTransition,
  Transition,
} from "react-transition-group";

import ArmeriaScreen from "./ArmeriaScreen";
import Books from "./BooksScreen";
import HabilityScreen from "./HabilityScreen";

function ShopScreen() {
  const [armeria, setArmeria] = useState(false);
  const [hability, setHability] = useState(false);
  const [book, setBook] = useState(true);

  const showArm = () => setArmeria(true);
  const hideArm = () => setArmeria(false);
  const showBook = () => setBook(true);
  const hideBook = () => setBook(false);
  const showHab = () => setHability(true);
  const hideHab = () => setHability(false);

  return (
    <div align="center">
      <div>
        <Shop
          armOn={showArm}
          armOff={hideArm}
          habOn={showHab}
          habOff={hideHab}
          bookOn={showBook}
          bookOff={hideBook}
        />
        <h1 align="center" className="name-shop">
          Tienda de Patek el Ruinafortunas
        </h1>
      </div>

      <CSSTransition timeout={4000} appear={true} classNames="my-node">
          <div>
              {armeria && <ArmeriaScreen />}
          </div>
      </CSSTransition>

      {hability && <HabilityScreen />}

      {book && <Books />}

      {/* <SwordsBall ballDiv={"sky-ball"} ballImgs={"ball-ball"}/> */}
      {/* <SwordsBall ballDiv={"sky-plan"} ballImgs={"plan-plan"}/> */}
      {/* <WordCloud/> */}
    </div>
  );
}

export default ShopScreen;
