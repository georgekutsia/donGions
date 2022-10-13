import React from 'react'

function Actions() {
  return (
    <div>
      <ul className="list-group background-list-actions">
          <li ><h4> <span>1.	Moverse:</span></h4> A las cuadrículas adyacentes en cualquier dirección. Cualquier primer movimiento, incluso en la diagonal, cuenta como uno. Después de cualquier movimiento en diagonal el siguiente movimiento cuenta como dos</li><br />
          <li ><h4> <span>2.	Atacar</span> </h4> Los tres tipos de ataques básicos son físico(cuerpo a cuerpo), a distancia(armas que lo permitan o lanzar objetos) y hechizo básico(con algún objeto especial tipo anillo) El daño físico puede ser con o sin armas.</li><br />
          <li ><h4><span>3. Lanzar hechizos</span> </h4> Requieren generalmente maná y a veces esencias. Son poderes especiales que se gastan, aunque los hechizos de clase de cada personaje se pueden usar las veces que se desee una vez se adquieren, pero tienen limitaciones por combate</li><br />
          <li ><h4><span>5. Habilidades</span></h4> Cada personaje cuenta con algunas habilidades únicas que funcionan de forma especial. Generalmente gastan maná y se pueden usar sólo una vez por combate. </li><br />
          <li ><h4><span>6. Defenderse</span></h4> Esquivar, Bloquear(con escudo), Parar(con armas) y resistir(objeto mágico) </li><br />
          <li ><h4><span>7. Concentración</span> </h4>Lanzar el dado de 12 para concentrarte en alguna otra acción</li><br />
          <li ><h4><span> 8. Usar objetos</span></h4> Cualquier objeto cuya habilidad se active, mágico o no, requiere una acción. Por ejemplo, activar un tipo de ataque con escudo o lanzar una cuerda para amarrar</li><br />
          <li ><h4><span>9. Re-equiparte</span></h4> Gasta 5 acciones durante el combate para cambiarte cualquier cantidad de objetos (armas, botas, casco etc). Tienes un ataque gratuito al terminar de reequiparte si cambiaste de arma. Esto jamás bajará de 1 acción con puntos de habilidad</li><br />
          <li ><h4> </h4> </li><br />
          <li ><h4> </h4> </li><br />
          <li ><h4>∞ </h4> Usar la lógica. Si require movimiento del cuerpo y/o tiempo para que ocurra, requerirá una acción.</li><br />
        </ul>
    </div>
  )
}

export default Actions