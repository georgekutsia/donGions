import React, { useState } from "react";
import { useForm, } from "react-hook-form";
import * as pjService from "../../../services/all-services"
import { useNavigate } from "react-router";
import Modal from "../../extra/Modal";
import data from "../../../data/pjs"
function Register() {
  const navigation = useNavigate();
  const [passShow, setPassShow] = useState(false)
  const {register, handleSubmit, setError, control, formState: { errors, isValid },} = useForm({mode: "onBlur"});

  const handleShowpass = () => {
    setPassShow(!passShow)
  }
    const lili = JSON.stringify(data[0])
console.log("string", lili)
  const handleRegisterSubmit = (data) => {
    console.log(data)
    pjService.registerPj(data)
      .then(note => navigation("/profile"))
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
    <center className="form-register">
      <form onSubmit={handleSubmit(handleRegisterSubmit)} className="mt-3">
      {/*  nickname */}
        <div className="">
          <input  type="text" className={`input-register ${errors.nickname ? "is-invalid" : ""}`} placeholder="Nickname... elige un nombre para tu personaje"
            {...register("nickname", {
              required: "Necesitas un nombre para tu personaje. Puede ser el tuyo",
              unique: "El nombre debe ser único",
              maxLength:{value:20, message:"El nombre debe tener menos de 20 caracteres"}
            })}
          />
          {errors.nickname && ( <div className="invalid-feedback">{errors.nickname.message}</div>
          )}
        </div>
        {/* password */}
        <div className="">
          <button onClick={handleShowpass}>ver</button>
          <input  type={passShow ? "text" : "password"} className={`input-register ${errors.password ? "is-invalid" : ""}`} placeholder="Nickname... elige un nombre para tu personaje"
            {...register("password", {
              required: "Necesitas proporcionar un correo para las actualizaciones",
            })}
          />
          {errors.password && ( <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>
        {/* email-contact */}
        <div className="">
          <input  type="email" className={`input-register ${errors.contact ? "is-invalid" : "repite"}`} placeholder="Dirección de correo...podrás usar el mismo para varios personajes"
            {...register("contact", {
              required: "Necesitas proporcionar un correo para las actualizaciones",
            })}
          />
          {errors.contact && ( <div className="invalid-feedback">{errors.contact.message}</div>
          )}
        </div>
        <div className="">
            <textarea className={`input-register ${errors.background ? "is-invalid" : ""}`}  cols="20" rows="4" placeholder="Opcional. Puedes escribir algo sobre el pasado de tu personaje, sus ambiciones, relaciones, puntos fuertes etc..."
              {...register("background", {
                maxLength:{value:2000, message: "Máximo 2000 caracteres. Guárdate algo de background como secreto para revelera a tus compañeros"}
              })}
            />
                  {errors.background && ( <div className="invalid-feedback">{errors.background.message}</div>
          )}
        </div>
        
        <div className="">
          <input  type="text" className={`${errors.image ? "is-invalid" : ""}`} placeholder="URL opcional de alguna imágen que represente"
            {...register("image", {

            })}
          />
          {errors.image && (<div className="invalid-feedback">{errors.image.message}</div>)}
        </div>

<div className="d-flex pt-2">
        <input type="checkbox" className="btn-check" value={lili} id="place" {...register("mana")}/>
        <label style={{border: "black"}} className="btn btn-outline-dark p-2" htmlFor="place"> Lili</label><br></br>
        <input type="checkbox" className="btn-check" value="Evento" id="event" {...register("category")}/>
        <label style={{border: "black"}} className="btn btn-outline-dark p-2" htmlFor="event"> Evento</label><br></br>
        <input type="checkbox" className="btn-check" value="Criatura" id="creature" {...register("category")}/>
        <label style={{border: "black"}} className="btn btn-outline-dark p-2" htmlFor="creature"> Criatura</label><br></br>
        <input type="checkbox" className="btn-check" value="Misión" id="mission" {...register("category")}/>
        <label style={{border: "black"}} className="btn btn-outline-dark p-2" htmlFor="mission"> Misión</label><br></br>
        <input type="checkbox" className="btn-check" value="Prueba" id="riddle" {...register("category")}/>
        <label style={{border: "black"}} className="btn btn-outline-dark p-2" htmlFor="riddle"> Prueba</label><br></br>
        <input type="checkbox" className="btn-check" value="Extra" id="extra" {...register("category")}/>
        <label style={{border: "black"}} className="btn btn-outline- p-2" htmlFor="extra"> Extra</label><br></br>
</div>
        <div className="mt-2 ">
          <button className="btn-rules-toggle-sub"  type="submit" disabled={!isValid}>
          <span></span><span></span><span></span><span></span> Crear Personaje</button>
        <button>dsads</button>
        </div>
      </form>
    </center>
  );
}


export default Register