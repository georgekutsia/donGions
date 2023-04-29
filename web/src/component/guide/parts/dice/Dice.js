import React from 'react'

function Dice() {
  return (
    <div style={{backgroundColor:"rgb(2, 12, 5)"}} className='background-rule-info'>
      <h1 id="s-cinestesia" align="center" className='texto-resaltado-dados'> Dados</h1> 
      <img className='character-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682727935/donGions%20imgs/dados/dadoViejo_xa7hh5.png" alt="Charisma"/>
      <div className='justify-content-evenly'>
        <div><span className='texto-resaltado-suerte-stats'> Los dados de Aptitud pertenecen al jugador y puedes lanzarlos al comienzo del turno gastando 1 esencia</span></div>
        <div><span className='texto-resaltado-suerte-stats'> Los dados de Combate son temporales. Puedes usarlos en combate tantas veces como niveles tengas, luego se pierden</span></div>
      </div>
          <article  align="center" className='background-list-actions m-2'>
          <div>&nbsp;<span className='nombre-npc-negro' style={{color:"white", borderBottom:"none"}}> Dados de Aptitud  </span></div>
          <div className='definicion-concepto'>
            &nbsp;&nbsp;&nbsp; Estos dados modifican el modo en el que el jugador pasa los combates e interactua con amenazas dependiendo de su forma de ser, amplificando
            las características específicas del jugador. Cada jugador sólo puede tener un dado y puede usarlo al comienzo del turno gastando 1 esencia y acción.
          </div>
          <div>
            <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682727543/donGions%20imgs/dados/nueva_impresion_copia_2_rsgoo5.jpg" alt="dados de aptitud" />
            <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682727543/donGions%20imgs/dados/nueva_impresion_copia_6_pfbpmy.jpg" alt="dados de aptitud" />
            <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682727542/donGions%20imgs/dados/nueva_impresion_copia_5_hzgdka.jpg" alt="dados de aptitud" />
            <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682727542/donGions%20imgs/dados/nueva_impresion_copia_8_mwgslp.jpg" alt="dados de aptitud" />
            <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682727543/donGions%20imgs/dados/nueva_impresion_copia_3_n1esqe.jpg" alt="dados de aptitud" />
            <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682727542/donGions%20imgs/dados/nueva_impresion_copia_7_y88gcq.jpg" alt="dados de aptitud" />
            <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682727542/donGions%20imgs/dados/nueva_impresion_copia_9_bxeo54.jpg" alt="dados de aptitud" />
            <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682727542/donGions%20imgs/dados/nueva_impresion_copia_4_oywbw2.jpg" alt="dados de aptitud" />
          </div>
          </article>
          <article  align="center" className='background-list-actions m-2'>
            <div>&nbsp;<span className='nombre-npc-negro' style={{color:"white", borderBottom:"none"}}> Dados de Combate  </span></div>
            <div className='definicion-concepto'>
              &nbsp;&nbsp;&nbsp;Estos dados se pueden conseguir de aventuras, añadir a la bolsa y usar según en qué circunstancias. Generalmente esos dados sólo se pueden usar una vez por combate por nivel, 
              o séase que en el nivel 2, se podría usar el dado hasta otras 2 veces ese combate antes de perderlo. No se puede usar más de 1 dado a la vez por turno, a menos que algo permita hacerlo.   
              <br />
              &nbsp;&nbsp;&nbsp;El dado de 20 es distinto ya que se perderá en el primer uso, a menos que se cumpla con la premisa. Si es así, se podrá volver a usar durante el turno tantas veces como niveles tenga el jugador y seguirá en su bolsa.                 
            </div>
              <div>
                <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682729114/donGions%20imgs/dados/Dado12_rey0ja.jpg" alt="dados de aptitud" />
                <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682729114/donGions%20imgs/dados/Dado8_q9hzf7.jpg" alt="dados de aptitud" />
                <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682729114/donGions%20imgs/dados/Dado_agevnf.jpg" alt="dados de aptitud" />
                <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682729114/donGions%20imgs/dados/Dado10_e1fotp.jpg" alt="dados de aptitud" />
                <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682729114/donGions%20imgs/dados/Dado4_vitbcl.jpg" alt="dados de aptitud" />
                <img  className='dice-images' src="https://res.cloudinary.com/dfrda73uc/image/upload/v1682729114/donGions%20imgs/dados/Dado20_hvr0xq.jpg" alt="dados de aptitud" />
              </div>
          </article>
          
    </div>
  )
}

export default Dice