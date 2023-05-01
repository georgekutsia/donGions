import React, { useState, useEffect } from "react";

function CreatureBeleron({name, description, img, weird, enemies}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); 
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return(
<tr style={{backgroundColor: weird ? "rgb(52, 6, 52, 0.5)" : "", borderTop: "1px solid white"}}>
  <td className={isSmallScreen ? "responsive-td" : "responsive-tf"} style={{width:"100%", minWidth:"150px", fontSize:"calc(12px+0.5vw)", paddingLeft:"10px", textAlign:"justify"}}>
    <div align="center">
      <img style={{border:enemies ? "5px solid red" : "5px solid green"}} className="creatures-beleron-list-img"  src={img} alt="Criaturas" />
    </div>
    <div className="p-2">
      <div style={{color:enemies ? "red" : "green", fontSize: "calc(15px + 0.9vw)" }}> {name} </div> 
      {description}
    </div>
  </td>
</tr>

  )
}

export default CreatureBeleron