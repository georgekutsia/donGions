import React, { useEffect, useState } from "react";
import { ImportantCreaturesBelenon } from "../../component";
import FadeInOut from "../../component/FadeInOut";

function EventsScreen() {
  const [showPage, setShowPage] = useState(false)
  useEffect(() => {
      setShowPage(true)
  }, [])
  return (
    <div>
      <FadeInOut show={showPage} duration={1000}>
          <ImportantCreaturesBelenon/>
      </FadeInOut>
    </div>
  );
}

export default EventsScreen;
