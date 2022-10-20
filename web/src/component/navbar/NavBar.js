import React, { useContext } from 'react'
import { Link, NavLink, useNavigate} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'

function NavBar() {
    const value = useContext(AuthContext)
  return (
    <>
        <nav id='background-navbar' className="navbar navbar-expand-lg navbar-dark border border-top-0 nav-text p-0">
          <div className="container-fluid d-flex justify-content-around">
              <ul className="navbar-nav">
                <li className="nav-item mx-5">
                  <NavLink to="/frontpage" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Frontpage</NavLink>
                </li>
                <li className="nav-item mx-5">
                  <NavLink to="/eventos" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Eventos</NavLink>
                </li>
                <li className="nav-item mx-5 ">
                  <NavLink to="/profile" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} ><h2>Perfil</h2></NavLink>
                </li>
              <ul>
                <li className='nav-item'>
                {value.pj.nickname}           
                </li>
              </ul>
                <li className="nav-item mx-5">
                  <NavLink to="/shop" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Tienda </NavLink>
                </li>
                <li className="nav-item mx-5">
                  <NavLink to="/rules" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Manual </NavLink>
                </li>
                <li className="nav-item mx-5">
                  <NavLink to="/notes" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Notes </NavLink>
                </li>
                {/* <li className="nav-item mx-5">
                  <NavLink title={user && user.nickname} onClick={handleLogOut} className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Logout </NavLink>
                </li> */}
              </ul>
            </div>
        </nav>
    </>
  )
}

export default NavBar