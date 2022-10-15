import React, { useState } from "react";
import { useForm, } from "react-hook-form";
import { Link, NavLink} from "react-router-dom"

import * as pjService from "../../../services/all-services"
import { useNavigate } from "react-router";
import planeswalker from "../../../data/pjs"
import Liliana from "./regPj/Liliana";
function Register() {
  const navigation = useNavigate();
  const [passShow, setPassShow] = useState(false)
  const [infoLili, setInfoLili] = useState(false)
  const {register, handleSubmit, setError, control, formState: { errors, isValid },} = useForm({mode: "onBlur"});

  const handleShowLili = () => setInfoLili(!infoLili)

  const handleShowpass = () => {setPassShow(!passShow)}
  const handleRegisterSubmit = (data) => {
    console.log(data)
  if (data.planeswalker === "liliana") {
      delete data.planeswalker;
      data.name = "Liliana Vess"; data.life = 6; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://media.magic.wizards.com/images/featured/EN_Liliana_Header.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }
  if (data.planeswalker === "gideon") {
      delete data.planeswalker
      data.name = "Gideon Jura";data.life = 20; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }
  if (data.planeswalker === "jace") {
      delete data.planeswalker
      data.name = "Jace Beleren"; data.life = 20; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }
  if (data.planeswalker === "nissa") {
      delete data.planeswalker
      data.name = "Nissa Nalaar"; data.life = 20; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }
  if (data.planeswalker === "ral") {
      delete data.planeswalker
      data.name = "Ral Zarek"; data.life = 20; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }
  if (data.planeswalker === "ajani") {
      delete data.planeswalker
      data.name = "Ajani Goldmane"; data.life = 20; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }
  if (data.planeswalker === "sorin") {
      delete data.planeswalker
      data.name = "Jace Beleren"; data.life = 20; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }
  if (data.planeswalker === "elspeth") {
      delete data.planeswalker
      data.name = "Jace Beleren"; data.life = 20; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }
  if (data.planeswalker === "sarkhan") {
      delete data.planeswalker
      data.name = "Jace Beleren"; data.life = 20; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }
  if (data.planeswalker === "teferi") {
      delete data.planeswalker
      data.name = "Jace Beleren"; data.life = 20; data.mana = 6; data.move = 2; data.weight= 8; data.actions= 5; data.image = ("https://pm1.narvii.com/6043/71bd03c89734ee8bbc0d188c6307eb17ecb744ab_hq.jpg")
      data.famFis = 0.5; data.dist = 0; data.damMag = 1; data.acFis = 16; data.acDist = 15; data.acMag = 14; data.precision = 0; data.speed=0; data.marciality=0;
      data.dodge = 16; data.block=17; data.parry = 17; data.resist = 16;
    }


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
          <input  type="file" className={`${errors.image ? "is-invalid" : ""}`} placeholder="URL opcional de alguna imágen que represente"
            {...register("image", {

            })}
          />
          {errors.image && (<div className="invalid-feedback">{errors.image.message}</div>)}
        </div>
        <NavLink className={({isActive}) => isActive ? "nav-link bouncing active" : "nav-link nav-glow-selected"} >Frokdshauiuashkadshodshuasntpage</NavLink>



<div className="d-flex m-5">
    <div className="form-check">
      <input className={ ({isActive}) => isActive ? "nav-link nav-glow-selected active" : "nav-link bouncing"}  type="radio" value="liliana" name="planeswalkers" id="liliana" {...register("planeswalker")} />
      <label className="form-check-label" htmlFor="liliana">
      <NavLink onClick={()=>setInfoLili(!infoLili)} className={({isActive}) => isActive ? "nav-link bouncing active" : "nav-link nav-glow-selected"}  > <img className="plans-img-register" src="https://media.magic.wizards.com/images/featured/EN_Liliana_Header.jpg" alt="planeswalker" /></NavLink>
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" value="gideon" name="planeswalkers" id="gideon"{...register("planeswalker")} />
      <label className="form-check-label" htmlFor="gideon">
        gideon
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" value="jace" name="planeswalkers" id="jace" {...register("planeswalker")}  />
      <label className="form-check-label" htmlFor="jace">
        jace 
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" value="nissa" name="planeswalkers" id="nissa" {...register("planeswalker")} />
      <label className="form-check-label" htmlFor="nissa">
        nisa revane
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" value="ral" name="planeswalkers" id="ral" {...register("planeswalker")} />
      <label className="form-check-label" htmlFor="ral">
        nisa revane
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" value="ajani" name="planeswalkers" id="ajani" {...register("planeswalker")} />
      <label className="form-check-label" htmlFor="ajani">
        nisa revane
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" value="sorin" name="planeswalkers" id="sorin" {...register("planeswalker")} />
      <label className="form-check-label" htmlFor="sorin">
        nisa revane
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" value="elspeth" name="planeswalkers" id="elspeth" {...register("planeswalker")} />
      <label className="form-check-label" htmlFor="elspeth">
        nisa revane
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" value="sarkhan" name="planeswalkers" id="sarkhan" {...register("planeswalker")} />
      <label className="form-check-label" htmlFor="sarkhan">
        nisa revane
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="radio" value="teferi" name="planeswalkers" id="teferi" {...register("planeswalker")} />
      <label className="form-check-label" htmlFor="teferi">
        nisa revane
      </label>
    </div>
</div>
  {infoLili && <Liliana/>}
      <div>
        <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
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