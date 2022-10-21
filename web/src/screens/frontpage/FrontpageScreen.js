import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BackgroundFloatingBuble, NeonDonGions, BlackMirror,} from "../../component";
import FadeInOut from "../../component/FadeInOut";


function FrontpageScreen() {
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
  }, [])
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
    <FadeInOut show={showPage} duration={1000}>
    {showPage && 
    <>
      <BlackMirror blackClass={"p-5"} blackTo={"/authenticate"} blackText={"Conectarse"} blackStyle={"red"}/>
      <NeonDonGions />
    </>
    }
    </FadeInOut>
    </div>
  );
}

export default FrontpageScreen;
