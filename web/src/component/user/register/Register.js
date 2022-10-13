import React from "react";
import { useForm, } from "react-hook-form";
import * as pjService from "../../../services/all-services"
import { useNavigate } from "react-router";

function Register() {
  const navigation = useNavigate();
  const {register, handleSubmit, setError, control, formState: { errors, isValid },} = useForm({mode: "onBlur"});

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
    <div className="">
      <form onSubmit={handleSubmit(handleRegisterSubmit)} className="mt-3">
        <div className="input-group ">
          <input  type="text" className={`form-control ${errors.title ? "is-invalid" : ""}`} placeholder="Nombre del apunte. Max 25 caracteres"
            {...register("nickname", {
              required: "Necesitas un nombre para esta nota, será más fácil encontrarla luego",
              maxLength: {value: 25, message:"Máximo 25 caracteres. Si es tan largo el título, es que es texto que va abajo...",
              },
            })}
          />
          {errors.title && ( <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>
        
        <div className="input-group ms-3">
            <textarea className={`form-control ${errors.description ? "is-invalid" : ""}`}  cols="20" rows="4" placeholder="Descibe lo que quieras. Max 600 caracteres"
              {...register("email", {
                maxLength:{value:600, message: "Máximo 600 caracteres. Los textos pequeños son más fáciles de seguir. Siempre puedes crear otras notas"}
              })}
            />
                  {errors.description && ( <div className="invalid-feedback">{errors.description.message}</div>
          )}
        </div>
        
        <div className="">
          <input  type="text" className={`form-control ${errors.image ? "is-invalid" : ""}`} placeholder="URL opcional de alguna imágen que represente"
            {...register("image", {

            })}
          />
          {errors.image && (<div className="invalid-feedback">{errors.image.message}</div>)}
        </div>

<div className="d-flex pt-2">
        <input type="checkbox" className="btn-check" value="Personaje" id="person" {...register("category")}/>
        <label style={{border: "black"}} className="btn btn-outline-dark p-2"  htmlFor="person"> Personaje</label><br></br>
        <input type="checkbox" className="btn-check" value="Lugar" id="place" {...register("category")}/>
        <label style={{border: "black"}} className="btn btn-outline-dark p-2" htmlFor="place"> Lugar</label><br></br>
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
          <button className={!isValid ? "btn-rules-toggle-sub" : "btn-note-disabled"} type="submit" disabled={!isValid}>
          <span></span><span></span><span></span><span></span> Crear Personaje</button>
        <button>dsads</button>
        </div>
      </form>
    </div>
  );
}


export default Register