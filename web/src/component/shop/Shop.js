import { useState } from "react"
import { Link, NavLink, useNavigate} from "react-router-dom"


function Shop({arm, armOff}) {
const [armeria, setArmeria] = useState(true)
const [alquimia, setAlquimia] = useState(true)
const [encantamiento, setEncantamiento] = useState(true)
const [magia, setMagia] = useState(true)
const [libreria, setLibreria] = useState(true)


const handleArmeria = () => {setAlquimia(true); setArmeria(false); setEncantamiento(true);setMagia(true);setLibreria(true);}
const handleAlquimia = () => {setAlquimia(false); setArmeria(true); setEncantamiento(true);setMagia(true);setLibreria(true)}
const handleEncantamiento = () => {setAlquimia(true); setArmeria(true); setEncantamiento(false);setMagia(true);setLibreria(true)}
const handleMagia = () => {setAlquimia(true); setArmeria(true); setEncantamiento(true);setMagia(false);setLibreria(true)}
const handleLibreria = () => {setAlquimia(true); setArmeria(true); setEncantamiento(true);setMagia(true);setLibreria(false)}



  return (
    <div align="center">
        <nav id='background-navbar-shop' className="navbar navbar-expand-lg navbar-dark border border-top-0 nav-text-shop p-0">
          <div className="container-fluid d-flex justify-content-around">
              <ul className="navbar-nav ">
                <li className="nav-item mx-5">
                  <NavLink  onClick={() => {handleArmeria(); arm()}} 
                  className={armeria ? "pages-shop": `pages-shop-selected ${arm}`} >Armería</NavLink>
                </li>
                <li className="nav-item mx-5">
                  <NavLink onClick={handleAlquimia} className={alquimia ? "pages-shop": "pages-shop-selected"}>Alquímia</NavLink>
                </li>
                <li className="nav-item mx-5 ">
                  <NavLink onClick={handleEncantamiento} className={encantamiento ? "pages-shop": "pages-shop-selected"}>Encantamiento</NavLink>
                </li>
                <li className="nav-item mx-5">
                  <NavLink  onClick={()=> {handleMagia(); armOff()}} className={magia ? "pages-shop": "pages-shop-selected"}>Magia </NavLink>
                </li>
                <li className="nav-item mx-5">
                  <NavLink  onClick={handleLibreria} className={libreria ? "pages-shop": "pages-shop-selected"}>Librería </NavLink>
                </li>
              </ul>
            </div>
        </nav>
    </div>
  )
}

export default Shop