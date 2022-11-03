import React from "react";
import { useForm, } from "react-hook-form";
import * as noteService from "../../services/all-services"
import { useNavigate } from "react-router";

function NoteForm() {
  const navigation = useNavigate();
  const {register, handleSubmit, setError, formState: { errors, isValid },} = useForm({mode: "onBlur"});

  const handleNoteSubmit = (data) => {
    noteService.createNote(data)
      .then(note =>  window.location.reload(true))
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
    <div className="note-form-background pt-5">
      <form onSubmit={handleSubmit(handleNoteSubmit)}>
        <div className="input-group">
          <input  type="text" className={`form-control ${errors.title ? "is-invalid" : ""}`} placeholder="Título. Max 25 caracteres"
            {...register("title", {
              required: "Necesitas un nombre para esta nota, será más fácil encontrarla luego",
              maxLength: {value: 30, message:"Máximo 30 caracteres. Si es tan largo el título, es que es texto que va abajo...",
              },
            })}
          />
          {errors.title && ( <div className="invalid-feedback">{errors.title.message}</div>
          )}
        </div>
        <div className="d-flex pt-2 justify-content-around" style={{width:"80%"}}>
                <input type="checkbox" className="btn-check" value="Extra-" id="extra" {...register("category")}/>
                <label style={{border: "black", padding:"4px", fontSize:"calc(10px + 0.3vw)"} } className="btn btn-outline-dark" htmlFor="extra"> Extra</label><br></br>
                <input type="checkbox" className="btn-check" value="Personaje-" id="person" {...register("category")}/>
                <label style={{border: "black", padding:"4px", fontSize:"calc(10px + 0.3vw)"} } className="btn btn-outline-dark"  htmlFor="person"> Personaje</label><br></br>
                <input type="checkbox" className="btn-check" value="Lugar-" id="place" {...register("category")}/>
                <label style={{border: "black", padding:"4px", fontSize:"calc(10px + 0.3vw)"} } className="btn btn-outline-dark" htmlFor="place"> Lugar</label><br></br>
                <input type="checkbox" className="btn-check" value="Evento-" id="event" {...register("category")}/>
                <label style={{border: "black", padding:"4px", fontSize:"calc(10px + 0.3vw)"} } className="btn btn-outline-dark" htmlFor="event"> Evento</label><br></br>
                <input type="checkbox" className="btn-check" value="Criatura-" id="creature" {...register("category")}/>
                <label style={{border: "black", padding:"4px", fontSize:"calc(10px + 0.3vw)"} } className="btn btn-outline-dark" htmlFor="creature"> Criatura</label><br></br>
                <input type="checkbox" className="btn-check" value="Misión-" id="mission" {...register("category")}/>
                <label style={{border: "black", padding:"4px", fontSize:"calc(10px + 0.3vw)"} } className="btn btn-outline-dark" htmlFor="mission"> Misión</label><br></br>
                <input type="checkbox" className="btn-check" value="Prueba-" id="riddle" {...register("category")}/>
                <label style={{border: "black", padding:"4px", fontSize:"calc(10px + 0.3vw)"} } className="btn btn-outline-dark" htmlFor="riddle"> Prueba</label><br></br>
        </div>
        
          <input  type="text" className={`form-control ${errors.image ? "is-invalid" : ""}`} placeholder="URL opcional de alguna imágen"
            {...register("image", 
            {validate:{ value: (value) =>{
              if(value){
                  try{
                    new URL(value)
                    return true
                  } catch (error) {
                    return "Dirección de URL no válida";
                  }
              }
                },}}
            )}
          />
          {errors.image && (<div className="invalid-feedback">{errors.image.message}</div>)}
            <textarea className={`form-control ${errors.description ? "is-invalid" : ""}`}  cols="10" rows="3" placeholder="Descibe lo que quieras. Max 600 caracteres"
              {...register("description", {
                maxLength:{value:600, message: "Máximo 600 caracteres. Los textos pequeños son más fáciles de seguir. Siempre puedes crear otras notas"}
              })}
            />
                  {errors.description && ( <div className="invalid-feedback">{errors.description.message}</div>
          )}
          <button style={{backgroundColor:"beige"}} className={isValid ? "btn-rules-toggle-sub" : "btn-note-disabled"} type="submit" disabled={!isValid}>
          <span></span><span></span><span></span><span></span> Crear Nota</button>
      </form>
    </div>
  );
}

export default NoteForm;
