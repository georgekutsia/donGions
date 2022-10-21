import React, { useEffect, useState } from "react";
import { useForm, } from "react-hook-form";
import { Link, NavLink} from "react-router-dom"

import * as pjService from "../../../services/all-services"
import { useNavigate } from "react-router";
import statistics from "../../../data/pjStats"
import char from "../../../data/character"
import { Teferi, Sorin, Sarkhan, Ral, Nissa, Jace, Elspeth, Ajani, Gideon, Liliana, Steps, BackPlan, Luck, Kinesthesia, Charisma, Perception, Presence, Creator } from "../../../component"
import RollDice from "../../dice/RollDice";



function Register() {
  const navigation = useNavigate();
  const {register, handleSubmit, setError, control, formState: { errors, isValid },} = useForm({mode: "onBlur"});

  const [resultDice, setResultDice] = useState(0)
  const [pjInfo, setPjInfo] = useState([])
  useEffect(() => {
    setPjInfo(statistics)
  },[])

  const [character, setCharacter] = useState([])
  useEffect(() => {
    setCharacter(char)
  },[])
  
  const handleResultDice = (result) => {
    setResultDice(result)
  }

  const [borderSelected, setBorderSelected] = useState("plans-img-register")


  const [backPlanComp, setBackPlanComp] = useState(false)
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
  

  const [showSu, setShowSu] = useState(false)
  const [showCa, setShowCa] = useState(false)
  const [showPe, setShowPe] = useState(false)
  const [showCi, setShowCi] = useState(false)
  const [showPre, setShowPre] = useState(false)


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
    data.gold = resultDice
    pjService.registerPj(data)
      .then(note => navigation("/authenticate"))
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
    <div align="center" className="form-register wrapper-steps">
      <form onSubmit={handleSubmit(handleRegisterSubmit)} className="mt-3">

      {/* paso 1 */}
      {/*  nickname */}
        <Steps paso={"Paso 1"} pasoTexto={"Información de registro"}/>
        <div className="d-flex justify-content-evenly box-steps">
            <div>
            <h4>Nickname</h4>
              <input  type="text" className={`input-register ${errors.nickname ? "is-invalid" : ""}`} placeholder=" Elige un nombre para tu personaje"
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
            <div>
            <h4>Contraseña</h4>
              <input  type="password" className={`input-register ${errors.password ? "is-invalid" : ""}`} placeholder=" Una contraseña para tus secretos"
                {...register("password", {
                  required: "Necesitas proporcionar un correo para las actualizaciones",
                })}
              />
              {errors.password && ( <div className="invalid-feedback">{errors.password.message}</div>
              )}
            </div>
            {/* email-contact */}
            <div>
            <h4>E-mail</h4>
              <input  type="email" className={`input-register ${errors.contact ? "is-invalid" : "repite"}`} placeholder=" Podrás usarlo para varios personajes"
                {...register("contact", {
                  required: "Necesitas proporcionar un correo para las actualizaciones",
                })}
              />
              {errors.contact && ( <div className="invalid-feedback">{errors.contact.message}</div>
              )}
            </div>
        </div>
        {/* paso 2 */}
                <Steps paso={"Paso 2"} pasoTexto={"Elige el Planeswalker que te guíe y enseñe"}/>
                <Link className='btn-rules-toggle-show' style={{color:"rgb(20, 251, 190)"}} onClick={() => setBackPlanComp(!backPlanComp)}>
                <span></span><span></span><span></span><span></span>Comparar estadísticas de los Planeswalker
            </Link>
              {backPlanComp &&  <BackPlan/>}
        <div className="d-flex justify-content-evenly box-steps">
            {pjInfo.map((pjData) =>(
              <div align="center" key={pjData.name} >
              <h6 style={{color: `${pjData.style}`}} className="ms-4">{pjData.name} {pjData.surname}</h6>
              <div className="form-check d-flex">
                      <label className="form-check-label" htmlFor={pjData.name}>  <img className={borderSelected} style={{borderColor: `${pjData.style}`}} src={pjData.image}alt="planeswalker" 
                      onClick={()=> {
                          if (pjData.name === "Liliana"){
                            setInfoLili(true); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                          } else if(pjData.name === "Gideon"){
                            setInfoLili(false); setInfoGid(true);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                          } else if (pjData.name === "Jace"){
                            setInfoLili(false); setInfoGid(false);  setInfoJace(true);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                          }else if (pjData.name === "Nissa"){
                            setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(true); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                          }else if (pjData.name === "Ral"){
                            setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(true); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                          }else if (pjData.name === "Ajani"){
                            setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(true);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                          }else if (pjData.name === "Sorin"){
                            setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(true);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(false)
                          }else if (pjData.name === "Elspeth"){
                            setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(true);setInfoTeferi(false);setInfoSarkhan(false)
                          }else if (pjData.name === "Sarkhan"){
                            setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(false);setInfoSarkhan(true)
                          }else if (pjData.name === "Teferi"){
                            setInfoLili(false); setInfoGid(false);  setInfoJace(false);  setInfoNissa(false); setInfoZarek(false); setInfoAjani(false);setInfoSorin(false);setInfoElspeth(false);setInfoTeferi(true);setInfoSarkhan(false)
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

  {infoZarek   && <Ral/>}           {infoLili && <Liliana/>}          {infoGid && <Gideon/>}          {infoAjani   &&  <Ajani/>}          {infoElspeth   && <Elspeth/>}         
  {infoJace   && <Jace/>}          {infoNissa   &&  <Nissa/>}          {infoSarkhan  && <Sarkhan/>}          {infoSorin  &&  <Sorin/>}          {infoTeferi  && <Teferi/>}         

{/* paso 3 */}
<Steps paso={"Paso 3"} pasoTexto={"Elige un rasgo de personalidad y obten +1 al comenzar el juego"}/>

            <div className="d-flex mb-5 justify-content-evenly box-steps">
                {character.map((char) =>(
                  <div align="center" key={char.name} >
                    <h6 style={{fontSize:"25px"}} className="ms-4 mb-5">{char.name} </h6>
                          <div style={{scale: "2"}} className="form-check d-flex">
                              <label className="form-check-label" htmlFor={char.name}>  
                                  <img  className={`mt-2 ${borderSelected}`}  src={char.image} alt="character" 
                                  onClick={()=> {
                                      if (char.name === "Suerte"){
                                        setShowSu(true); setShowCa(false); setShowPe(false); setShowCi(false); setShowPre(false)
                                      } else if(char.name === "Carisma"){
                                        setShowSu(false); setShowCa(true); setShowPe(false); setShowCi(false); setShowPre(false)
                                      } else if (char.name === "Percepción"){
                                        setShowSu(false); setShowCa(false); setShowPe(true); setShowCi(false); setShowPre(false)
                                      }else if (char.name === "Cinestesia"){
                                        setShowSu(false); setShowCa(false); setShowPe(false); setShowCi(true); setShowPre(false)
                                      } else if (char.name === "Presencia"){
                                        setShowSu(false); setShowCa(false); setShowPe(false); setShowCi(false); setShowPre(true)
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
{showSu && <Luck/>}
{showCi && <Kinesthesia/>}
{showPre && <Presence/>}
{showCa && <Charisma/>}
{showPe && <Perception/>}
{/* paso 5 */}
<Steps paso={"Paso 5"} pasoTexto={"Puedes crear un trasforndo para tu personaje"}/>
        <div >
            <textarea className={`input-register-text ${errors.background ? "is-invalid" : ""}`}  cols="20" rows="4" placeholder="Opcional. Puedes escribir algo sobre el pasado de tu personaje, sus ambiciones, relaciones, puntos fuertes etc..."
              {...register("background", {
                maxLength:{value:2000, message: "Máximo 2000 caracteres. Guárdate algo de background como secreto para revelera a tus compañeros"}
              })}
            />
                  {errors.background && ( <div className="invalid-feedback">{errors.background.message}</div>
          )}
        </div>
      <RollDice finalResult={handleResultDice} />
        <div className="mt-5 box-steps">
          <button  style={{color: "green"}} className={isValid ? "btn-rules-toggle-sub" : "btn-note-disabled"}  type="submit" disabled={!isValid}>
          <span></span><span></span><span></span><span></span> Crear Personaje</button>
        </div>
      </form>
    </div>
  );
}


export default Register