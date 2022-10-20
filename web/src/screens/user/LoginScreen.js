import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import * as login from "../../services/all-services"
import { BackgroundFloatingBuble, NeonDonGions } from '../../component'
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';



function LoginScreeen() {
  const [passShow, setPassShow] = useState(false)
  const handleShowpass = () => {setPassShow(!passShow)}
  const navigation = useNavigate()
  const value = useContext(AuthContext)
  const {register, handleSubmit, setError, formState: { errors, isValid },} = useForm({mode: "onBlur"});
  const handleLogin = (data) => {
      login.login(data)
        .then((data)=> {
          value.setPj(data)
          navigation("/profile")
    })
    .catch(error => {
      if(error.response?.data?.errors){
        const {errors} = error.response.data;
        Object.keys(error.response.data.errors)
          .forEach((error) => {
            setError(error, { message: errors[error].message})
        })
      }
    })
}
  return (
    <center>
            <BackgroundFloatingBuble
        floatingBalls={
          "url(https://res.cloudinary.com/dfrda73uc/image/upload/v1665733888/donGions%20imgs/planeswalkers%20png/pngwing.com_73_klyr29.png)"
        }
        widthBall={"10px"}
        heigthBall={"10px"}
        idFlow={"slow-flow"}
      />
        <form className='m-5 login-form-img' onSubmit={handleSubmit(handleLogin)}>
          <div className='login-form-margin d-flex'>
            <img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1665689975/donGions%20imgs/planeswalkers%20png/pjlog_cg3cdj.png" alt="sorin" height="40px" />
            <div className="input-group">
              <input  type="text" className={`login-textarea ${errors.nickname ? "is-invalid" : ""}`} placeholder="Nickname..."
                {...register("nickname", {
                  required: "¿Cual es el nombre que pusiste a tu personaje?",
                })}
              />
              {errors.nickname && ( <div className="invalid-feedback">{errors.nickname.message}</div>
              )}
            </div>
            <img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1665690302/donGions%20imgs/planeswalkers%20png/pngwing.com_72_b53gkz.png" alt="sorin" height="40px" />
            <div className="input-group ">
              <input  type={passShow ? "text" : "password"} className={`login-textarea ${errors.password ? "is-invalid" : ""}`} placeholder="password..."
                {...register("password", {
                  required: "Necesitas una contraseña para logarte",
                })}
              />
              <Link  onClick={handleShowpass}><i style={{color:"black"}} id="eye-login" className={passShow ? "fa-solid fa-eye-low-vision" : "fa-solid fa-eye"}></i></Link>
              {errors.password && ( <div className="invalid-feedback">{errors.password.message}</div>
              )}
            </div>
          </div>
            <div className="mt-2 ">
              <button className={"btn-rules-toggle-sub"} type="submit" >
              <span></span><span></span><span></span><span></span> Conectarse </button>
            </div>
        </form>

    <NeonDonGions/>
    </center>
  )
}

export default LoginScreeen