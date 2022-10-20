import React from "react";
import { NavLink } from "react-router-dom";
import {
  BackgroundFloatingBuble,
  NeonDonGions,
  BlackMirror,
} from "../../component";

function FrontpageScreen() {
  return (
    <div align="center">
      <BackgroundFloatingBuble
        floatingBalls={
          "url(https://res.cloudinary.com/dfrda73uc/image/upload/v1665619992/donGions%20imgs/backgroundEffects/pngwing.com_69_bljsta.png)"
        }
        widthBall={"5px"}
        heigthBall={"5px"}
        idFlow={"circle-container"}
      />
      <BlackMirror blackClass={"p-5"} blackTo={"/authenticate"} blackText={"Conectarse"} blackStyle={"red"}/>
      <NeonDonGions />
    </div>
  );
}

export default FrontpageScreen;
