import React, { useState } from "react";
import ReactDOM from "react-dom";

import FadeInOut from "./FadeInOut";

function Feding() {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <div >
      <button onClick={toggleShow}>{show ? "hide" : "show"}</button>
      <FadeInOut show={show} duration={500}>
        I'm in a fade in AND out transition and I am only mounted when visible
        and automatically unmounted when my fade out ends!
      </FadeInOut>
    </div>
  );
}

const rootElement = document.getElementById("root");

export default Feding