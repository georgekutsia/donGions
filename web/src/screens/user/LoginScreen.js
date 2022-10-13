import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import * as login from "../../services/all-services"
import { NeonDonGions } from '../../component'
import { useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';



function LoginScreeen() {

  const navigation = useNavigate()
  const value = useContext(AuthContext)
  const {register, handleSubmit, setError, formState: { errors, isValid },} = useForm({mode: "onBlur"});
  const handleLogin = (data) => {
      login.login(data)
        .then((data)=> {
          console.log(data)
          value.setPj(data)
          navigation("/authenticate")
    })
    .catch(error => {
      if(error.response?.data?.errors){
        const {errors} = error.response.data;
        console.log(errors)
        Object.keys(error.response.data.errors)
          .forEach((error) => {
            setError(error, { message: errors[error].message})
        })
      }
    })
}
  return (
    <center>
        <form className='col-4 m-5 login-form-img' onSubmit={handleSubmit(handleLogin)}>
          <div className='login-form-margin d-flex'>
            <div className="input-group">
            <img src="" alt="" />
              <input  type="text" className={`login-textarea ${errors.nickname ? "is-invalid" : ""}`} placeholder="Nickname..."
                {...register("nickname", {
                  required: "¿Cual es el nombre que pusiste a tu personaje?",
                })}
              />
              {errors.nickname && ( <div className="invalid-feedback">{errors.nickname.message}</div>
              )}
            </div>
            <div className="input-group ">
              <input  type="password" className={`login-textarea ${errors.password ? "is-invalid" : ""}`} placeholder="password..."
                {...register("password", {
                  required: "Necesitas una contraseña para logarte",
                })}
              />
              {errors.password && ( <div className="invalid-feedback">{errors.password.message}</div>
              )}
            </div>
          </div>
            <div className="mt-2 ">
              <button className={isValid ? "btn-rules-toggle-sub" : "btn-note-disabled"} type="submit" disabled={!isValid}>
              <span></span><span></span><span></span><span></span> Crear Nota</button>
            </div>
        </form>
    <NeonDonGions/>
    </center>
  )
}

export default LoginScreeen