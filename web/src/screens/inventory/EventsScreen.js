import React, { useEffect, useState } from "react";
import { BackgroundFloatingBuble, ImportantCreaturesBeleron, Guilds } from "../../component";
import FadeInOut from "../../component/FadeInOut";

function EventsScreen() {
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
  }, [])
  const[showGuilds, setShowGuilds] = useState(false);
  const[showNPC, setShowNPC] = useState(false);
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
      <div className="d-flex justify-content-evenly">

      <div  className="d-flex justify-content-evenly">
            <h1><button onClick={() => {setShowNPC(!showNPC); setShowGuilds(false)}} 
            className="btn btn-round b-level-2 b-type-show-creatures">Criaturas de Beleron</button>
            </h1>
        </div>
          <div  className="d-flex justify-content-evenly">
            <h1><button onClick={() => {setShowGuilds(!showGuilds); setShowNPC(false)}} 
            className="btn btn-round b-level-2 b-type-show-creatures">Guilds</button>
            </h1>
          </div>
      </div>
          <FadeInOut show={showNPC} duration={500}>
              <ImportantCreaturesBeleron />
          </FadeInOut>
          <FadeInOut show={showGuilds} duration={500}>
              <Guilds/>
          </FadeInOut>
    </div>
  );
}

export default EventsScreen;
