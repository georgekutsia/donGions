import React, { Component }  from 'react';

function CreatureBeleron({name, description, img, weird, enemies}) {


  return(
      <tr style={{backgroundColor: weird ? "rgb(52, 6, 52, 0.5)" : "", borderTop: "1px solid white"}}>
          <td style={{width:"100%", minWidth:"350px", fontSize:"calc(12px+0.5vw)", paddingLeft:"10px"}}>  
            <div style={{color:enemies ? "red" : "green", fontSize: "calc(15px + 0.9vw)" }}>
              {name}
            </div> 
            <br />
          {description}</td>
          <td><img style={{border:enemies ? "5px solid red" : "5px solid green"}} className="creatures-beleron-list-img" src={img} alt="Criaturas" /></td>
      </tr>
  )
}

export default CreatureBeleron