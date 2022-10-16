import React, { useEffect, useState } from 'react'
import liliana from "../../../../data/habilidadesDeClase"
function CompInfoReg({describingText, numeroDePj, nombreHabilidad}) {
  const lili = liliana[`${numeroDePj}`]
  const [pjPlan, setPjPlan] = useState([lili])

  return (
    <div className='seccion-habilidades'>
      <h4>{describingText}</h4>
      <h4>Todos los personajes tienen 1 carta con habilidad pasiva y su especialidad.</h4>
        {pjPlan.map((image) =>(
          <div key={image.name}> 
              <h4>Empezarás el juego con la habilidad {image.nombre} y podrás adquirir las otras durante el juego</h4>
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