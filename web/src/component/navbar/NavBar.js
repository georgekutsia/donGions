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
        <nav id='background-navbar'>
            <ul className="background-navbar-ul">
                <li>
                  <NavLink to="/frontpage" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Frontpage</NavLink>
                </li>
                <li>
                  <NavLink to="/eventos" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Eventos</NavLink>
                </li>
                <li className=" ">
                  <NavLink to="/profile" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Perfil</NavLink>
                </li>
                <li>
                  <NavLink to="/shop" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Tienda </NavLink>
                </li>
                <li>
                  <NavLink to="/rules" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Manual </NavLink>
                </li>
                <li>
                  <NavLink to="/notes" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Notes </NavLink>
                </li>
                {loged.pj.admin && 
                <li>
                  <NavLink to="/monsters" className={({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"} >Monsters </NavLink>
                </li>
                }
              <button className='disconect-button d-flex' onClick={handleClick}>{loged.pj.nickname}
              <i className="fa-solid fa-right-from-bracket"></i></button>
              </ul>
        </nav>
    </>
  )
}

export default NavBar