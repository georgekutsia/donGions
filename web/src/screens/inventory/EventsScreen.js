import React, { useEffect, useState } from "react";
import { BackgroundFloatingBuble, ImportantCreaturesBelenon } from "../../component";
import FadeInOut from "../../component/FadeInOut";

function EventsScreen() {
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
  }, [])
  return (
    <div>
     <BackgroundFloatingBuble
        floatingBalls={
          "url(https://res.cloudinary.com/dfrda73uc/image/upload/v1666533826/donGions%20imgs/backgroundEffects/pngwing.com_-_2022-10-23T160336.939_kn2n5c.png)"
        }
        widthBall={"15px"}
        heigthBall={"15px"}
        idFlow={"circle-container"}
      />
      <FadeInOut show={showPage} duration={1000}>
          <ImportantCreaturesBelenon/>
      </FadeInOut>
    </div>
  );
}

export default EventsScreen;
