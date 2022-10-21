import React, { useEffect, useState } from 'react'
import liliana from "../../../../data/habilidadesDeClase"
function CompInfoReg({describingText, numeroDePj, textColor, nombreHabilidad}) {
  const lili = liliana[`${numeroDePj}`]
  const [pjPlan, setPjPlan] = useState([lili])

  return (
    <div className='seccion-habilidades'>
      <h5 style={{color:"chocolate"}}> <i style={{color:`${textColor}`}} className="fa-solid fa-hand-sparkles"></i> Todos los personajes tienen 1 carta con habilidad pasiva y su especialidad.</h5>
      <h5 style={{color:"chocolate"}}>Los 3 colores de la esquina superior indican son su afinidad</h5>
      <h5 style={{color:`${textColor}`}}>{describingText}</h5>
        {pjPlan.map((image) =>(
          <div key={image.name}> 
              <h4 style={{color:"chocolate"}}>Empezarás el juego con la habilidad <span style={{color:`${textColor}`}}>{image.nombre} </span> y podrás adquirir las otras durante el juego</h4>
              <img className='habilidades-register' src={image.info} alt="liliana" />
              &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;
              <img className='habilidades-register' src={image.hab1} alt="liliana" />
              <img className='habilidades-register' src={image.hab2} alt="liliana" />
              <img className='habilidades-register' src={image.hab3} alt="liliana" />
              <img className='habilidades-register' src={image.hab4} alt="liliana" />
          </div>
        ))}
    </div>
  )
}
CompInfoReg.defaultProps = {
  describingText: 'hey',
  numeroDePj: 1
}

export default CompInfoReg