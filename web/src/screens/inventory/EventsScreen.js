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
  const [robot1, setRobot1] = useState(true)
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
              <div  className="d-flex justify-content-evenly">
                <h1><button onClick={() => {setRobot1(!robot1);}} 
                className="btn btn-round b-level-2 b-type-show-creatures"> <img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1686945258/donGions%20imgs/Eventos/robot_hetmaf.png" alt="robot" width={"100px"} /></button> </h1>
              </div>
                <FadeInOut show={robot1} duration={500}>
                  <div className="prueba-robot">
                    <Riddles nombrePrueba={"Objetivo 1"} respuesta1={"ppdpppipppip"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"} placeHolder={"Objetivo 1"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
                    <Riddles nombrePrueba={"Objetivo 2"} respuesta1={"pdppppipppp"} respuesta2={"pipppppdpppp"} respuesta3={"pdppippppippp"} placeHolder={"Objetivo 2"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Buen trabajo!"}/>
                    <Riddles nombrePrueba={"Objetivo 3"} respuesta1={"pi3xpd8xpd7xpd2xp"} respuesta2={"2xpi3xpd7xpd7xpd2xp"} respuesta3={"dongions&drogas"}  placeHolder={"Objetivo 3"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Tercer objetivo conseguido!"}/>
                    <Riddles nombrePrueba={"Objetivo 4"} respuesta1={"4x(pdpi)"} respuesta2={"2x(pdpi)ppip"} respuesta3={"dongions&drogas"}  placeHolder={"Objetivo 4"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"Cuarto objetivo conseguido. ¡Sólo queda uno!"}/>
                    <Riddles nombrePrueba={"Objetivo 5"} respuesta1={"2x(ippdp)2x(pdppi)"} respuesta2={"2x(i2xpdp)2x(pd2xpi)"} respuesta3={"dongions&drogas"}  placeHolder={"Objetivo 5"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Lo has logrado! Prueba superada"}/>
                  </div>
                </FadeInOut>
              <Riddles nombrePrueba={"Prueba 1"} respuesta1={"he"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 1"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 2"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 2"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 4"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 4"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 5"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 5"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 6"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 6"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 7"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 7"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 8"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 8"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 9"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 9"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 10"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 10"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 11"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 11"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 12"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 12"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 13"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 13"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 14"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 14"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 15"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 15"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 16"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 16"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
              <Riddles nombrePrueba={"Prueba 17"} respuesta1={"huha"} respuesta2={"pdpppippppip"} respuesta3={"dongions&drogas"}  placeHolder={"prueba 17"} mensajePruebaFallida={"Objetivo no conseguido"} mensajeBienHecho={"¡Primer objetivo conseguido!"}/>
            </FadeInOut>
          </div>
    </div>
  );
}

export default EventsScreen;
