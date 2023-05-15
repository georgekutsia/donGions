import React from "react";
import { useState } from "react";
import Talent from "../Talent";
import TalentItem from "../TalentItem";
import TalentText from "../TalentText";

function SorinMarkov() {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Talent
        talentfirst1={"Sangromante"}
        talentfirst2={"Luchador"}
        talentfirst3={"Arquero"}
        text1={
          "Obtienes +2 en daño de hechizos y adquieres los hechizos de Sangromancia"
        }
        text2={
          "Puedes tirar concentración para daño y aprendes una habilidad adicional de Sorín"
        }
        text3={"Obtienes +D4 para daño a distancia y un dado de Aptitud"}

        talSecond1={""}
        talSecond2={""}
        talSecond3={"al fin"}
        talSecond4={"al fin"}
        talSecond5={"al fin"}
        talSecond6={"al fin"}
        talThird1={"buuulala"}
        talThird2={"buuulala"}
        talThird3={"buuulala"}
        talThird4={"buuulala"}
        talThird5={"buuulala"}
        talThird6={"buuulala"}
        talThird7={"buuulala"}
        talThird8={"buuulala"}
        talThird9={"buuulala"}
      />
    </div>
  );
}

export default SorinMarkov;
