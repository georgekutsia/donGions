import React, { useEffect, useState } from "react";
import { useForm, } from "react-hook-form";
import { Link} from "react-router-dom"

import * as pjService from "../../../services/all-services"
import { useNavigate } from "react-router";
import statistics from "../../../data/pjStats"
import char from "../../../data/character"
import { Teferi, Sorin, Sarkhan, Ral, Nissa, Jace, Elspeth, Ajani, Gideon, Liliana, Steps, BackPlan, Luck, Kinesthesia, Charisma, Perception, Presence } from "../../../component"
import RollDice from "../../dice/RollDice";
import FadeInOut from "../../FadeInOut";



function Register() {
  const navigation = useNavigate();
  const {register, handleSubmit, setError, control, formState: { errors, isValid },} = useForm({mode: "onBlur"});
  const [textValue, setTextValue] = useState('Lugar al azar');
  const [buttonsText, setButtonText] = useState(true);
  const [chests, setChests] = useState(true);

  const words = [
    {text: "Helian: Rioda", key: 1},
    {text: "Helian: Finderibo", key: 2},
    {text: "Helian: Gora", key: 3},
    {text: "Djan: Catacas 2", key: 4},
    {text: "Djan: Coliseo de la Mente", key: 5},
    {text: "Djan: Desierto Nembu", key: 7},
    {text: "Jatang: Tumba de Sastan", key: 8},
    {text: "Jatang: Plantahelada", key: 9},
    {text: "Jatang: Meseta Helada", key: 10},
    {text: "Triven: Bosque de los Árboles Gigantes", key: 11},
    {text: "Triven: Biorde", key: 12},
    {text: "Aonan: Escenario Muerto", key: 13},
    {text: "Aonan: Arpainerme", key: 14},
    {text: "Aonan: Fortaleza Puntahundida", key: 15},
  ]
  const equippedDataBase={
    mana:0,
    life:0,
    weight:0,
    actions:0,
    reach:0,
    move:0,
    damFis:0,
    damDist:0,
    damMag:0,
    acFis:0,
    acDist:0,
    acMag:0,
    precision:0,
    speed:0,
    marciality:0,
    block:0,
    dodge:0,
    parry:0,
    resist:0,
    reflex:0,
    firm:0,
    temple:0
  }
  const matsForReg = {
       Lana: Math.floor(Math.random() * 15),
       Cuero: Math.floor(Math.random() * 10),
       Seda: Math.floor(Math.random() * 3),
       Lingotes: Math.floor(Math.random() * 5),
       Gema: Math.floor(Math.random() * 5),
       Engranajes: Math.floor(Math.random() * 3),
       Pintura: Math.floor(Math.random() * 2),
       Tierra: Math.floor(Math.random() * 2),
        Infusión: 0,
        Encantamiento: 0,
       Pólvora: Math.floor(Math.random() * 10),
  }
  const changeTextValue = () => {
    const len = words.length;
    setTextValue(words[Math.floor(Math.random() * len)].text)
    setButtonText(false)
  }
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
    data.place = textValue
    data.mats = matsForReg
    data.equipped = equippedDataBase
    if(chests){
      data.mats ={Lana: 0,Cuero: 0,Seda: 0,Lingotes: 0,Gema: 0,Engranajes: 0,Pintura: 0,Tierra: 0,Infusión: 0,Encantamiento: 0,Pólvora: 0}
    }
    pjService.registerPj(data)
      .then(note => navigation("/authenticate"))
      .catch(error => {
        if(error.response.data.errors){
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
        <div className="box-steps">
            <div className="d-flex justify-content-evenly">
                <div>
                <h4>Nickname</h4>
                  <input  type="text" className={`input-register ${errors.nickname ? "is-invalid" : ""}`} placeholder="Único"
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
                  <input  type="password" className={`input-register ${errors.password ? "is-invalid" : ""}`} placeholder="Único"
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
                  <input  type="email" className={`input-register ${errors.contact ? "is-invalid" : "repite"}`} placeholder="No único"
                    {...register("contact", {
                      required: "Necesitas proporcionar un correo para las actualizaciones",
                    })}
                  />
                  {errors.contact && ( <div className="invalid-feedback">{errors.contact.message}</div>
                  )}
                </div>
            </div>
            <h6 style={{fontStyle:"italic", color:"grey"}}>Tipografía afectada por mayúsculas y minúsculas </h6>
        </div>
        {/* paso 2 */}
                <Steps paso={"Paso 2"} pasoTexto={"Elige el Planeswalker que te guíe y enseñe"}/>
                <Link className='btn-rules-toggle-show' style={{color:"rgb(20, 251, 190)", fontSize:"calc(6px + 0.5vw)"}} onClick={() => setBackPlanComp(!backPlanComp)}>
                <span></span><span></span><span></span><span></span>Comparar estadísticas de los Planeswalker
            </Link>
        <div className="d-flex box-steps choose-plans">
            {pjInfo.map((pjData) =>(
              <div className="choose-plan-each" key={pjData.name} >
              <h6 style={{color: `${pjData.style}`}} className="ms-2">{pjData.name} {pjData.surname}</h6>
              <div className="form-check d-flex choose-plan-each-one">
                      <label className="form-check-label choose-plans-each-one" htmlFor={pjData.name}>  <img className={borderSelected} style={{borderColor: `${pjData.style}`}} src={pjData.image}alt="planeswalker" 
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
                      <input className="form-check-input radio-register" type="radio" hidden value={pjData.name} name="planeswalkers" id={pjData.name} {...register("planeswalker", {
                      required: "Debes elegir un Planeswalker que te guie",
                    })} />
                    </div>
                </div>
              ))}
            </div>
            <FadeInOut show={backPlanComp}  duration={2000}>
            {backPlanComp &&  <BackPlan/>}
            </FadeInOut>
            <FadeInOut show={infoZarek}  duration={500}>
              {infoZarek   && <Ral/>}    
            </FadeInOut>
            <FadeInOut show={infoLili}  duration={500}>
            {infoLili && <Liliana/>} 
            </FadeInOut>
            <FadeInOut show={infoGid}  duration={500}>
            {infoGid && <Gideon/>}
            </FadeInOut>
            <FadeInOut show={infoAjani}  duration={500}>
            {infoAjani   &&  <Ajani/>} 
            </FadeInOut>
            <FadeInOut show={infoElspeth}  duration={500}>
            {infoElspeth   && <Elspeth/>}  
            </FadeInOut>
            <FadeInOut show={infoJace}  duration={500}>
            {infoJace   && <Jace/>}
            </FadeInOut>
            <FadeInOut show={infoNissa}  duration={500}>
            {infoNissa   &&  <Nissa/>} 
            </FadeInOut>
            <FadeInOut show={infoSarkhan}  duration={500}>
            {infoSarkhan  && <Sarkhan/>}
            </FadeInOut>
            <FadeInOut show={infoSorin}  duration={500}>
            {infoSorin  &&  <Sorin/>}  
            </FadeInOut>
            <FadeInOut show={infoTeferi}  duration={500}>
            {infoTeferi  && <Teferi/>} 
            </FadeInOut>


{/* paso 3 */}
        <Steps paso={"Paso 3"} pasoTexto={"Elige un rasgo de personalidad y obten +1 al comenzar"}/>
          <div className="d-flex box-steps char-register">
              {character.map((char) =>(
                <div  key={char.name} >
                  <div className="char-register-name" >{char.name}</div>
                        <div className="form-check  d-flex">
                            <label className="form-check-label" htmlFor={char.name}>  
                                <img  className={` ${borderSelected}`}  src={char.image} alt="character" 
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
                            <input className="form-check-input radio-register" hidden type="radio" value={char.name} name="character" id={char.name} {...register("character", {
                            required: "Debes elegir una característica ",
                          })} />
                      </div>
                  </div>
                ))}
            </div>
            <FadeInOut show={showSu} duration={500}>
              {showSu && <Luck/>}
            </FadeInOut>
            <FadeInOut show={showCi} duration={500}>
            {showCi && <Kinesthesia/>}
            </FadeInOut>
            <FadeInOut show={showPre} duration={500}>
            {showPre && <Presence/>}
              
            </FadeInOut>
            <FadeInOut show={showCa} duration={500}>
            {showCa && <Charisma/>}
              
            </FadeInOut>
            <FadeInOut show={showPe} duration={500}>
            {showPe && <Perception/>}
              
            </FadeInOut>


{/* paso 4*/}

<Steps paso={"Paso 4"} pasoTexto={"¿Donde comenzarás tu historia en el plano de Beleron?"}/>
      <FadeInOut show={!buttonsText} duration={500}>
      <div style={{fontSize:"calc(20px + 4vw)"}} className="result-dice">{textValue}</div>
      </FadeInOut>

    {buttonsText  &&
    <div className="roll-dice">
      <button  type="button" onClick={changeTextValue}> Lugar al azar</button>
    </div>
    }
{/* paso 5 */}
        <Steps style={{width:"100%"}} paso={"Paso 5"} pasoTexto={`¡Elige uno de los cofres!`} pasoTexto2={`Viene con una colección aleatoria de materiales.`} />
        <FadeInOut show={chests} duration={3500}>
            <div className= {chests ? "register-mats-box-text" : "register-mats-box-text fa fa-spin-pulse"}>
                <Link onClick={()=> setChests(false)} className="fa fa-bounce"><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666574106/donGions%20imgs/shop%20dude/pngwing.com_-_2022-10-24T031435.134_p5llb5.png" alt="treasure 1" width="100px" /></Link>
                <Link onClick={()=> setChests(false)} className="fa mx-5 fa-bounce"><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666574106/donGions%20imgs/shop%20dude/pngwing.com_-_2022-10-24T031437.996_mckgmi.png" alt="treasure 2" width="100px"/></Link>
                <Link onClick={()=> setChests(false)} className="fa fa-bounce"><img src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666574106/donGions%20imgs/shop%20dude/pngwing.com_-_2022-10-24T031442.431_y2jlho.png" alt="treasure 3" width="100px"/></Link>
            </div>
        </FadeInOut>

    {!chests && 
      <FadeInOut show={!chests} duration={3500}>
    <h2 style={{color:"chocolate", textShadow:"2px 2px black", marginTop:"50px"}}>Haré que te lo manden a tus aposentos. Ya te queda menos<img width="90px" src="https://res.cloudinary.com/dfrda73uc/image/upload/v1666271499/donGions%20imgs/shop%20dude/Ex192_ooh6ju_cos14i.png" alt="Lala" /></h2>
    </FadeInOut>

    }
{/* paso 6 */}
<Steps paso={"Paso 6"} pasoTexto={"Tienes hasta 3 tiradas y el resultado de la que te quedes determina el Oro con el que empiezas"}/>
                  <RollDice finalResult={handleResultDice} />
{/* paso 7 */}
<Steps paso={"Paso 7"} pasoTexto={"Puedes crear un trasforndo para tu personaje"}/>
        <div >
            <textarea className={`input-register-text ${errors.background ? "is-invalid" : ""}`}  cols="20" rows="4" placeholder="Opcional. Puedes escribir algo sobre el pasado de tu personaje, sus ambiciones, relaciones, puntos fuertes etc..."
              {...register("background", {
                maxLength:{value:2000, message: "Máximo 2000 caracteres. Guárdate algo de background como secreto para revelera a tus compañeros"}
              })}
            />
                  {errors.background && ( <div className="invalid-feedback">{errors.background.message}</div>
          )}
        </div>
          <div className="mt-5 box-steps">
          <button  style={{color: "green"}} className={isValid ? "btn-rules-toggle-sub" : "btn-note-disabled"}  type="submit" disabled={!isValid}>
          <span></span><span></span><span></span><span></span> Crear Personaje</button>
        </div>
      </form>
    </div>
  );
}


export default Register