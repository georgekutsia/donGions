import React, { useState } from 'react'
import liliana from "../../../../data/habilidadesDeClase"
function CompInfoReg({describingText, numeroDePj, textColor, nombreHabilidad}) {
  const lili = liliana[`${numeroDePj}`]
  const [pjPlan, setPjPlan] = useState([lili])

  return (
    <div className='seccion-habilidades'>
      <div style={{color:"chocolate"}}> <i style={{color:`${textColor}`}} className="fa-solid fa-hand-sparkles"></i> Todos los personajes tienen 1 carta con habilidad pasiva y su especialidad.</div>
      <div style={{color:"chocolate"}}>Los 3 colores de la esquina superior indicana su afinidad</div>
      <div style={{color:`${textColor}`}}>{describingText}</div>
        {pjPlan.map((image) =>(
          <div key={image.name}> 
              <div style={{color:"chocolate"}}>Empezarás el juego con la habilidad <span style={{color:`${textColor}`}}>{image.nombre} </span> y podrás adquirir las otras durante el juego</div>
              <div className='d-flex'>
                  <div className='me-4'>
                    <img className='habilidades-register-main' src={image.info} alt="hab0" />&nbsp; &nbsp;&nbsp; &nbsp; 
                  </div>
                  <div>
                    <img className='habilidades-register' src={image.hab1} alt="hab1" />
                    <img className='habilidades-register' src={image.hab2} alt="hab2" />
                    <img className='habilidades-register' src={image.hab3} alt="hab3" />
                    <img className='habilidades-register' src={image.hab4} alt="hab4" />
                  </div>
              </div>
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