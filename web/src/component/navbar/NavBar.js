import React, { useContext } from 'react'
import { Link, NavLink, useNavigate} from "react-router-dom"
import { AuthContext } from '../../context/AuthContext'
import * as logService from "../../services/all-services";


function NavBar() {
  const navigation = useNavigate();

  const loged = useContext(AuthContext)
  
  const {user, setUser} = useContext(AuthContext)
    const handleClick = () => {
      logService
        .logout()
        .then((data) => {
          localStorage.clear(data);
          console.log("te has ido")
          navigation("/authenticate")
          window.location.reload(true)
          setUser(null);
        })
        .catch(error => console.log(error))
    }
  return (
    <>
        <nav id='background-navbar' className=" navbar-expand-lg">
          <div className="container-fluid justify-content-around">
              <ul className=" navbar-nav justify-content-around">
                <li className="nav-item ">
                  <NavLink to="/frontpage" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Frontpage</NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/eventos" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Eventos</NavLink>
                </li>
                <li className="nav-item  ">
                  <NavLink to="/profile" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} ><h2>Perfil</h2></NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/shop" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Tienda </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/rules" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Manual </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to="/notes" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Notes </NavLink>
                </li>
                {loged.pj.admin && 
                <li className="nav-item ">
                  <NavLink to="/monsters" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Monsters </NavLink>
                </li>
                }
              </ul>
          </div>
          <div>
              <button className='disconect-button d-flex' onClick={handleClick}>{loged.pj.nickname}
              <i style={{fontSize:"40px"}} className="fa-solid fa-right-from-bracket"></i></button>
          </div>
        </nav>
    </>
  )
}

export default NavBar