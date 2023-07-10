// import React, { useContext } from 'react'
// import ButtonCounts from '../../../../../Dongions/web/src/screens/pj/parts/ButtonCounts'
// import { AuthContext } from '../../../../../Dongions/web/src/context/AuthContext'


// function StatsDefence( {dColor}) {
//   const stats = useContext(AuthContext)
//   const st = stats.pj.stats
//   const eq = stats.pj.equipped

//   const dDodge = st.dodge - +eq.dodge
//   let dodgeColor = "white"
//   if(dDodge < st.dodge){
//     dodgeColor = "darksalmon"
//   }
//   const dResist = st.resist - +eq.resist
//   let resistColor = "white"
//   if(dResist < st.resist){
//     resistColor = "darksalmon"
//   }


//   const dBlock = st.block - +eq.block
//   let blockColor = "white"
//   if(dBlock < st.block){
//     blockColor = "darksalmon"
//   }
//   const dParry = st.parry - +eq.parry
//   let parryColor = "white"
//   if(dParry < st.parry){
//     parryColor = "darksalmon"
//   }
// console.log(eq)
//   return (
//   <div >
//     <div  style={{border:`3px ${dColor} solid`}}   className="stats-salud-block">
//       <div  className="">
//       <div className="stats-defense justify-content-between"  style={{color:`${dodgeColor}`}}>Esquiva: <span ><ButtonCounts max={20} stat={dDodge} dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
//       <div className="stats-defense justify-content-between"  style={{color:`${resistColor}`}}>Resistencia: <span ><ButtonCounts max={20} stat={dResist} dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
//       </div>
//       <div   className="">
//       <div className="stats-defense justify-content-between"  style={{color:`${blockColor}`}}>Bloqueo: <span ><ButtonCounts max={20} stat={dBlock} dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
//       <div className="stats-defense justify-content-between"  style={{color:`${parryColor}`}}>Parada: <span ><ButtonCounts max={20} stat={dParry} dead="fa-skull-crossbones"  colorDead="green" colorText={"darksalmon"}/></span>  </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default StatsDefence