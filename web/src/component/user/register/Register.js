import React, { useEffect, useState } from "react";
import { useForm, } from "react-hook-form";
import { Link, NavLink} from "react-router-dom"

import * as pjService from "../../../services/all-services"
import { useNavigate } from "react-router";
import statistics from "../../../data/pjStats"
import char from "../../../data/character"
import Liliana from "./regPj/Liliana";
import Gideon from "./regPj/Gideon";
import BackPlan from "./regPj/BackPlan";
import Ajani from "./regPj/Ajani";
import Elspeth from "./regPj/Elspeth";
import Jace from "./regPj/Jace";
import Nissa from "./regPj/Nissa";
import Ral from "./regPj/Ral";
import Sarkhan from "./regPj/Sarkhan";
import Sorin from "./regPj/Sorin";
import Teferi from "./regPj/Teferi";



function Register() {
  const navigation = useNavigate();
  const {register, handleSubmit, setError, control, formState: { errors, isValid },} = useForm({mode: "onBlur"});
 
  const [pjInfo, setPjInfo] = useState([])
  useEffect(() => {
    setPjInfo(statistics)
  })
  const [character, setCharacter] = useState([])
  useEffect(() => {
    setCharacter(char)
  })


  const [borderSelected, setBorderSelected] = useState("plans-img-register")


  const [passShow, setPassShow] = useState(false)
  const [infoLili, setInfoLili] = useState(false)
  const [infoGid, setInfoGid] = useState(false)
  const [infoJace, setInfoJace] = useState(false)
  const [infoNissa, setInfoNissa] = useState(false)
  const [infoZarek, setInfoZarek] = useState(false)
  const [infoAjani, setInfoAjani] = useState(false)
  const [infoSorin, setInfoSorin] = useState(false)
  const [infoElspeth, setInfoElspeth] = useState(false)
  const [infoSarkhan, setInfoSarkhan] = useState(false)
  const [infoTeferi, setInfoTeferi] = useState(false)
  

  // const handleLili = () => setInfoLili(!infoLili)
  // const handleGid = () =>setInfoGid(!infoGid)
  // const handleJace = () =>setInfoJace(!infoJace)
  // const handleNissa = () =>setInfoNissa(!infoNissa)
  // const handleRal = () =>setInfoRal(!infoRal)
  // const handleAjani = () =>setInfoAjani(!infoAjani)
  // const handleSorin = () =>setInfoSorin(!infoSorin)
  // const handleElspeth = () =>setInfoElspeth(!infoElspeth)
  // const handleSarkhan = () =>setInfoSarkhan(!infoSarkhan)
  // const handleTeferi = () =>setInfoTeferi(!infoTeferi)
  

  const handleShowpass = () => {setPassShow(!passShow)}
  const handleBig = () => {setPassShow(!passShow)}

  const handleRegisterSubmit = (data) => {

  if(data.character === "Suerte"){
    const character = char[0]
    delete data.character
    data = {...data, character}
  }
  if(data.character === "Carisma"){
    const character = char[1]
    delete data.character
    data = {...data, character}
  }
  if(data.character === "Percepción"){
    const character = char[2]
    delete data.character
    data = {...data, character}
  }
  if(data.character === "Cinestesia"){
    const character = char[3]
    delete data.character
    data = {...data, character}
  }
  if(data.character === "Presencia"){
    const character = char[4]
    delete data.character
    data = {...data, character}
  }

  if (data.planeswalker === "Liliana") {
      const stats = statistics[0]
          delete data.planeswalker;
          data = {...data, stats} 
    }

  if (data.planeswalker === "Gideon") {
  const stats = statistics[1]
      delete data.planeswalker
      data = {...data, stats}
    }
  if (data.planeswalker === "Jace") {
      delete data.planeswalker
      const stats = statistics[2]
          delete data.planeswalker;
          data = {...data, stats} 
    }
  if (data.planeswalker === "Nissa") {
      delete data.planeswalker
      const stats = statistics[3]
          delete data.planeswalker;
          data = {...data, stats} 
    }
  if (data.planeswalker === "Ral") {
      delete data.planeswalker
      const stats = statistics[4]
          delete data.planeswalker;
          data = {...data, stats} 
    }
  if (data.planeswalker === "Ajani") {
      delete data.planeswalker
      const stats = statistics[5]
          delete data.planeswalker;
          data = {...data, stats} 
    }
  if (data.planeswalker === "Sorin") {
      delete data.planeswalker
      const stats = statistics[6]
          delete data.planeswalker;
          data = {...data, stats} 
    }
  if (data.planeswalker === "Elspeth") {
      delete data.planeswalker
      const stats = statistics[7]
          delete data.planeswalker;
          data = {...data, stats} 
    }
  if (data.planeswalker === "Sarkhan") {
      delete data.planeswalker
      const stats = statistics[8]
          delete data.planeswalker;
          data = {...data, stats} 
    }
  if (data.planeswalker === "Teferi") {
      delete data.planeswalker
      const stats = statistics[9]
          delete data.planeswalker;
          data = {...data, stats} 
    }
    pjService.registerPj(data)
      .then(note => navigation("/profile"))
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
          <input  type={passShow ? "text" : "password"} className={`input-register ${errors.password ? "is-invalid" : ""}`} placeholder="Nickname... elige un nombre para tu personaje"
            {...register("password", {
              required: "Necesitas proporcionar un correo para las actualizaciones",
            })}
          />
          {errors.password && ( <div className="invalid-feedback">{errors.password.message}</div>
          )}
          <button onClick={handleShowpass}>ver</button>
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
        
        
<div className="d-flex justify-content-evenly">
    {pjInfo.map((pjData) =>(
      <div align="center" key={pjData.name} >
      <h6 style={{color: `${pjData.style}`}} className="ms-4">{pjData.name} {pjData.surname}</h6>
      <div className="form-check d-flex">
              <label className="form-check-label" htmlFor={pjData.name}>  <img className={borderSelected} style={{borderColor: `${pjData.style}`}} src={pjData.image}alt="planeswalker" 
              onClick={()=> {
                  if (pjData.name === "Liliana"){
                    setInfoLili(!infoLili); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                  } else if(pjData.name === "Gideon"){
                    setInfoLili(false); setInfoGid(!infoGid);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                  } else if (pjData.name === "Jace"){
                    setInfoLili(false); setInfoGid(false);  setInfoJace(!infoJace);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                  }else if (pjData.name === "Nissa"){
                    setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(!infoNissa); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                  }else if (pjData.name === "Ral"){
                    setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(!infoZarek); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                  }else if (pjData.name === "Ajani"){
                    setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(!infoAjani);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                  }else if (pjData.name === "Sorin"){
                    setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(!infoSorin);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                  }else if (pjData.name === "Elspeth"){
                    setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(!infoElspeth);setInfoTeferi(false);setInfoSarkhan(false)
                  }else if (pjData.name === "Sarkhan"){
                    setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(!infoSarkhan)
                  }else if (pjData.name === "Teferi"){
                    setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(!infoTeferi);setInfoSarkhan(false)
                  }
                }
              }  />
              </label>
              <input className="form-check-input radio-register" type="radio" value={pjData.name} name="planeswalkers" id={pjData.name} {...register("planeswalker", {
              required: "Debes elegir un Planeswalker que te guie",
            })} />
            </div>
      </div>
    ))}
</div>

  {infoZarek   && <Liliana/>}           {infoLili && <Liliana/>}          {infoGid && <Gideon/>}          {infoAjani   &&  <Ajani/>}          {infoElspeth   && <Elspeth/>}         
  {infoJace   && <Jace/>}          {infoNissa   &&  <Nissa/>}          {infoSarkhan  && <Sarkhan/>}          {infoSorin  &&  <Sorin/>}          {infoTeferi  && <Teferi/>}         



<div className="d-flex mt-5 justify-content-evenly">
    {character.map((char) =>(
      <div align="center" key={char.name} >
        <h6 style={{fontSize:"25px"}} className="ms-4 mb-5 mt-5">{char.name} </h6>
              <div style={{scale: "2"}} className="form-check d-flex">
                  <label className="form-check-label" htmlFor={char.name}>  
                      <img  className={`mt-2 ${borderSelected}`}  src={char.image} alt="character" 
                      onClick={()=> {
                          if (char.name === "Liliana"){
                            setInfoLili(!infoLili);
                            setInfoGid(false)
                          } else if(char.name === "Gideon"){
                            setInfoGid(!infoGid)
                            setInfoLili(false)
                          } else if (char.name === "Jace"){
                            setInfoJace(!infoJace)
                          }else if (char.name === "Nissa"){
                            setInfoNissa(!infoNissa)
                          }
                        }
                      }  />
                  </label>
                  <input className="form-check-input radio-register" type="radio" value={char.name} name="character" id={char.name} {...register("character", {
                  required: "Debes elegir una característica ",
                })} />
            </div>
      </div>
    ))}
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