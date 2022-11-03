import React from 'react'

function CarouselImgs1() {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="2000" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
          </div>
          <div className="carousel-inner slide" >
            <div className="carousel-item active" style={{width:"100%"}}>
              <img src="https://j.gifs.com/KRPZZ8.gif" className="d-block float-start p-0 m-0" width="25%" alt="..."/>
              <img src="https://64.media.tumblr.com/f3a960eed42ec68d9fe4bbce9299e1c0/tumblr_nwqolpRl4I1u6mclko4_500.gifv" className="d-block float-end"  width="25%" alt="..."/>
              <div className="carousel-caption-div">
                <h6>¿Quién te inspira?</h6>
                <p>Elige un planeswalker para que sea tu guía</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://media2.giphy.com/media/sjUk0b53gBhUvau4Yu/giphy.gif?cid=790b7611850323e8cc3cdda7cf53610aa871006503b2e96e&rid=giphy.gif&ct=g" className="d-block float-start" width="25%" alt="..."/>
              <img src="https://media4.giphy.com/media/Xc4F8VuOVX6dgN8P40/giphy.gif?cid=790b76114316a4afe88801af3af454102f50cc5478a241fb&rid=giphy.gif&ct=g" className="d-block float-end" width="25%" alt="..."/>
              <div className="carousel-caption-div">
                <h6>¿Cual es tu estilo?</h6>
                <p>Apdenderas infinidad de habilidades y hechizos <br /> Podrás adaptarlos a tu estilo personal y único de combate</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://media1.giphy.com/media/zYQql3fYgQ4vcYLSzC/giphy.gif?cid=790b7611856c81ab5c8ef704b74e6d0beb5ce83198147748&rid=giphy.gif&ct=g" className="d-block float-start" width="25%" alt="..."/>
              <img src="https://media0.giphy.com/media/fWqF9wPsWqy6sZ8WM8/giphy.gif?cid=790b7611127aa62e43171923c63e84596d63092fc93d3c14&rid=giphy.gif&ct=g" className="d-block float-end" width="25%" alt="..."/>
              <div className="carousel-caption-div">
                <h6>¿Ganas de luchar?</h6>
                <p>Un mundo abierto lleno de desafíos <br /> que exigirán lo mejor de ti</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://media.tenor.com/1FpGbqL4jo4AAAAC/tibalt-kaldheim.gif" className="d-block float-start" width="25%" alt="..."/>
              <img src="https://media1.giphy.com/media/wsVBQ4aocnq3ZuTjTI/giphy.gif?cid=790b76110058a5d163a6d826526b5662bf52e6702dd17cda&rid=giphy.gif&ct=g" className="d-block float-end" width="25%" alt="..."/>
              <div className="carousel-caption-div">
                <h6>¿Qué harás a la hora de la verdad?</h6>
                <p>Un mundo lleno de criaturas poderosas  <br />que pondrán a prueba tu valor</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://media0.giphy.com/media/KYoJZRh66eVCdiFnpy/giphy.gif?cid=790b7611e280d36f03d495b225c4e5f864a6af93eff051c2&rid=giphy.gif&ct=g" className="d-block float-start" width="25%" alt="..."/>
              <img src="https://media4.giphy.com/media/uinOESvELh3rim8Tb7/giphy.gif?cid=790b7611f2f58979ec233c9418b814948817803b884eed83&rid=giphy.gif&ct=g" className="d-block float-end" width="25%" alt="..."/>
              <div className="carousel-caption-div">
                <h6>¿Ganas de mejorar?</h6>
                <p>Tatuajes, mutaciones, implantes, armaduras,<br /> armas, cachivaches, libros, sellos y mucho más <br />Mejora el cuerpo y la mente, excede tus límites</p> 
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://media2.giphy.com/media/Q66MGiD0g83ogQRqkZ/giphy.gif?cid=790b7611880b383952caa148fa869125d811647c63a11719&rid=giphy.gif&ct=g" className="d-block float-start" width="25%" alt="..."/>
              <img src="https://media1.giphy.com/media/8nXWIge0vmfCfwZhwV/giphy.gif?cid=790b761142e005651fea22ce5d814d6e5d0ba735ec071810&rid=giphy.gif&ct=g" className="d-block float-end" width="25%" alt="..."/>
              <div className="carousel-caption-div">
                <h6>¿En grupo o solitario?</h6>
                <p>En grupo solo os limita vuestra imaginación<br /> sobre cómo combinar vuestras habilidades <br /> En solitario y rodeado de enemigos, <br /> no necesitas controlarte...</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://78.media.tumblr.com/aec3c90f3264f62b0650fc8b0a88da11/tumblr_peevdrrStg1rns048o1_400.gif" className="d-block float-start" width="25%" alt="..."/>
              <img src="https://64.media.tumblr.com/838ffd7c9b5a25484ee658afa74fd54d/tumblr_o1rwx0QS6W1u6mclko1_500.gifv" className="d-block float-end" width="25%" alt="..."/>
              <div className="carousel-caption-div">
                <h6>¿Tecnología o Magia?</h6>
                <p>Un mundo complejo, completo y lleno <br />de cosas por descubrir</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://giffiles.alphacoders.com/134/134947.gif" className="d-block float-start" width="25%" alt="..."/>
              <img src="https://giffiles.alphacoders.com/174/174162.gif" className="d-block float-end" width="25%" alt="..."/>
              <div className="carousel-caption-div">
                <h6>¿Curiosidad?</h6>
                <p>Explora Belenon y descubre sus ciudades, historia, <br /> paisajes, secretos y pecados...</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  )
}

export default CarouselImgs1