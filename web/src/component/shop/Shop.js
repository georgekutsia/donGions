import { useState } from "react"
import { Link, NavLink, useNavigate} from "react-router-dom"


function Shop({armOn, armOff, habOn, habOff, bookOn, bookOff, trastOn, trastOff, speOn, speOff }) {
const [armeria, setArmeria] = useState(true)
const [alquimia, setAlquimia] = useState(true)
const [encantamiento, setEncantamiento] = useState(true)
const [magia, setMagia] = useState(true)
const [libreria, setLibreria] = useState(true)
const [trastero, setTrastero] = useState(true)
const [special, setSpecial] = useState(true)

const handleArmeria = () => {setAlquimia(true); setArmeria(false); setEncantamiento(true);setMagia(true);setLibreria(true); setTrastero(true); setSpecial(true)}
const handleAlquimia = () => {setAlquimia(false); setArmeria(true); setEncantamiento(true);setMagia(true);setLibreria(true); setTrastero(true); setSpecial(true)}
const handleEncantamiento = () => {setAlquimia(true); setArmeria(true); setEncantamiento(false);setMagia(true);setLibreria(true); setTrastero(true); setSpecial(true)}
const handleMagia = () => {setAlquimia(true); setArmeria(true); setEncantamiento(true);setMagia(false);setLibreria(true); setTrastero(true); setSpecial(true)}
const handleBook = () => {setAlquimia(true); setArmeria(true); setEncantamiento(true);setMagia(true);setLibreria(false); setTrastero(true); setSpecial(true)}
const handleTrastero = () => {setAlquimia(true); setArmeria(true); setEncantamiento(true);setMagia(true);setLibreria(true); setTrastero(false); setSpecial(true)}
const handleSpecial= () => {setAlquimia(true); setArmeria(true); setEncantamiento(true);setMagia(true);setLibreria(true); setTrastero(true); setSpecial(false)}



  return (
    <>
        <nav id='background-navbar-shop' className=" navbar-expand-lg">
          <div className="container-fluid justify-content-around">
              <ul className="navbar-nav justify-content-around">
                <li className="nav-item">
                  <NavLink onClick={() => {handleTrastero(); trastOn(); armOff(); habOff(); bookOff(); speOff()}} className={trastero ? "pages-shop": "pages-shop-selected"}>Básico... </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={() => {handleArmeria(); armOn(); habOff(); bookOff();trastOff(); speOff()}} 
                  className={armeria ? "pages-shop": `pages-shop-selected ${armOn}`} >Armería</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink onClick={handleAlquimia} className={alquimia ? "pages-shop": "pages-shop-selected"}>Alquímia</NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink onClick={handleEncantamiento} className={encantamiento ? "pages-shop": "pages-shop-selected"}>Encantamientos</NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink onClick={()=> {handleSpecial();trastOff(); armOff(); habOff(); bookOff(); speOn()}} className={special ? "pages-shop": "pages-shop-selected"}>ZonaVIP</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  onClick={()=> {handleMagia();trastOff(); armOff(); habOn(); bookOff(); speOff()}} className={magia ? "pages-shop": "pages-shop-selected"}>Magia </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink  onClick={()=> {handleBook();trastOff(); armOff(); habOff(); bookOn(); speOff()}} className={libreria ? "pages-shop": "pages-shop-selected"}>Librería </NavLink>
                </li>
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Shop