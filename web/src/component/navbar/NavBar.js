import React, { useContext } from 'react'
import { Link, NavLink, useNavigate} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
import * as logService from "../../services/all-services";


function NavBar() {
  const navigation = useNavigate();

  const value = useContext(AuthContext)
    const {user, setUser} = useContext(AuthContext)
    const handleClick = () => {
      logService
        .logout()
        .then(() => {
          localStorage.clear();
          console.log("te has ido")
          navigation("/authenticate")
          window.location.reload(true)
          setUser(null);
        })
        .catch(error => console.log(error))
    }
  return (
    <>
        <nav id='background-navbar' className="navbar navbar-expand-lg navbar-dark border border-top-0 nav-text p-0">
          <div className="container-fluid d-flex justify-content-around">
              <ul className="d-flex navbar-nav justify-content-around">
                <li className="nav-item px-3">
                  <NavLink to="/frontpage" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Frontpage</NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink to="/eventos" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Eventos</NavLink>
                </li>
                <li className="nav-item px-3 ">
                  <NavLink to="/profile" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} ><h2>Perfil</h2></NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink to="/shop" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Tienda </NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink to="/rules" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Manual </NavLink>
                </li>
                <li className="nav-item px-3">
                  <NavLink to="/notes" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Notes </NavLink>
                </li>
              </ul>
          </div>
              <button className='disconect-button' onClick={handleClick}>{value.pj.nickname}</button>
        </nav>
    </>
  )
}

export default NavBar