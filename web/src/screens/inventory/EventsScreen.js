import React, { useEffect, useState } from "react";
import { BackgroundFloatingBuble, ImportantCreaturesBeleron, Guilds, Riddles } from "../../component";
import FadeInOut from "../../component/FadeInOut";

function EventsScreen() {
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
  }, [])
  const[showGuilds, setShowGuilds] = useState(false);
  const[showNPC, setShowNPC] = useState(false);
  const[ridles, setRidles] = useState(true);
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
            <h1><button onClick={() => {setShowNPC(!showNPC); setShowGuilds(false); setRidles(false)}} 
            className="btn btn-round b-level-2 b-type-show-creatures">Criaturas de Beleron</button>
            </h1>
        </div>
        <div  className="d-flex justify-content-evenly">
          <h1><button onClick={() => {setShowGuilds(!showGuilds); setShowNPC(false); setRidles(false)}} 
          className="btn btn-round b-level-2 b-type-show-creatures">Guilds</button>
          </h1>
        </div>
        <div  className="d-flex justify-content-evenly">
          <h1><button onClick={() => {setRidles(!ridles); setShowGuilds(false); setShowNPC(false)}} 
          className="btn btn-round b-level-2 b-type-show-creatures">Pruebas</button>
          </h1>
        </div>

      </div>
          <FadeInOut show={showNPC} duration={500}>
              <ImportantCreaturesBeleron />
          </FadeInOut>
          <FadeInOut show={showGuilds} duration={500}>
              <Guilds/>
          </FadeInOut>
          <div className="riddles-big-box">
              <FadeInOut show={ridles} duration={500}>
                  <Riddles nombrePrueba={"Prueba 1"} respuesta={"he"} placeHolder={"prueba 1"}/>
                  <Riddles nombrePrueba={"Prueba 2"} respuesta={"huha"} placeHolder={"prueba 2"}/>
                  <Riddles nombrePrueba={"Prueba 4"} respuesta={"huha"} placeHolder={"prueba 4"}/>
                  <Riddles nombrePrueba={"Prueba 5"} respuesta={"huha"} placeHolder={"prueba 5"}/>
                  <Riddles nombrePrueba={"Prueba 6"} respuesta={"huha"} placeHolder={"prueba 6"}/>
                  <Riddles nombrePrueba={"Prueba 7"} respuesta={"huha"} placeHolder={"prueba 7"}/>
                  <Riddles nombrePrueba={"Prueba 8"} respuesta={"huha"} placeHolder={"prueba 8"}/>
                  <Riddles nombrePrueba={"Prueba 9"} respuesta={"huha"} placeHolder={"prueba 9"}/>
                  <Riddles nombrePrueba={"Prueba 10"} respuesta={"huha"} placeHolder={"prueba 10"}/>
                  <Riddles nombrePrueba={"Prueba 11"} respuesta={"huha"} placeHolder={"prueba 11"}/>
                  <Riddles nombrePrueba={"Prueba 12"} respuesta={"huha"} placeHolder={"prueba 12"}/>
                  <Riddles nombrePrueba={"Prueba 13"} respuesta={"huha"} placeHolder={"prueba 13"}/>
                  <Riddles nombrePrueba={"Prueba 14"} respuesta={"huha"} placeHolder={"prueba 14"}/>
                  <Riddles nombrePrueba={"Prueba 15"} respuesta={"huha"} placeHolder={"prueba 15"}/>
                  <Riddles nombrePrueba={"Prueba 16"} respuesta={"huha"} placeHolder={"prueba 16"}/>
                  <Riddles nombrePrueba={"Prueba 17"} respuesta={"huha"} placeHolder={"prueba 17"}/>
              </FadeInOut>
          </div>
    </div>
  );
}

export default EventsScreen;
