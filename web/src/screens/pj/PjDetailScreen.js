import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../context/AuthContext'
import * as services from "../../services/all-services"
import FadeInOut from "../../component/FadeInOut";
import { Link } from 'react-router-dom';

function PjDetailScreen() {
const navigation = useNavigate();
const info = useContext(AuthContext)
console.log(info.pj)
const {register, handleSubmit, setError, formState: { errors, isValid },} = useForm({mode: "onSubmit"});

const handleSubmitEquipped = (data) => {
  services.editPj(info.pj.id, data)
    .then(data = navigation("/profile"))
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
    <div className='background-pjdetail'>
    <FadeInOut show duration={800}>
        <div className='p-3'>
            <h5  align="center">Elige un número de -5 a 15</h5>
            <h3 align="center">Debe existir un valor en la casilla</h3>
        </div>
        <form  className="form-edit-pj" onSubmit={handleSubmit(handleSubmitEquipped)} >
          <div><h2 className='ps-5 pt-5'>Estadísticas básicas</h2></div>
          <div className="d-flex p-1 justify-content-around">
              <div >
                <h5 className="pj-edit-text" align="center">Vida <i className="pj-edit-fa fa-solid fa-heart-pulse"></i></h5>
                <div  className="input-group equipped-form">
                      <input type="number" defaultValue={info.pj.equipped.life} className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                        {...register("equipped.life", {
                          default: 2, max: 15,  min: -5,
                          required: "Debe existir un número",
                          maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                          },
                        })}
                      />
                </div>
              </div>
              <div>
              <h5 className="pj-edit-text" align="center">Maná <i className="pj-edit-fa fa-solid fa-droplet"></i></h5>
                <div className="input-group equipped-form">
                      <input type="number" defaultValue={info.pj.equipped.mana}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                        {...register("equipped.mana", {
                          default: 2, max: 15,  min: -5,
                          maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                          },
                        })}
                      />
                </div>
              </div>
              <div>
              <h5 className="pj-edit-text" align="center">Carga <i className="pj-edit-fa fa-solid fa-weight-hanging"></i></h5>
                <div className="input-group equipped-form">
                      <input type="number" defaultValue={info.pj.equipped.weight}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                        {...register("equipped.weight", {
                          default: 2, max: 15,  min: -5,
                          maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                          },
                        })}
                      />
                </div>
              </div>
              <div>
              <h5 className="pj-edit-text" align="center">Mov.  <i className="pj-edit-fa fa-solid fa-shoe-prints"></i></h5>
                <div className="input-group equipped-form">
                      <input type="number" defaultValue={info.pj.equipped.move} className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                        {...register("equipped.move", {
                          default: 2, max: 15,  min: -5,
                          maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                          },
                        })}
                      />
                </div>
              </div>
              <div>
              <h5 className="pj-edit-text" align="center">Acc. <i className="pj-edit-fa fa-solid fa-bolt"></i></h5>
                <div className="input-group equipped-form">
                      <input type="number"defaultValue={info.pj.equipped.actions}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                        {...register("equipped.actions", {
                          default: 2, max: 15,  min: -5,
                          maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                          },
                        })}
                      />
                </div>
              </div>
              <div>
              <h5 className="pj-edit-text" align="center">Alcance <i className="pj-edit-fa fa-solid fa-hands"></i></h5>
                <div className="input-group equipped-form">
                      <input type="number"defaultValue={info.pj.equipped.reach}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                        {...register("equipped.reach", {
                          default: 2, max: 15,  min: -5,
                          maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                          },
                        })}
                      />
                </div>
            </div>
          </div>
          <div><h2 className='ps-5 pt-5'>Combate</h2></div>
          <div className="d-flex p-1 justify-content-around" >
                <div>
                  <h5 className="pj-edit-text" align="center">D. Físico <i className="pj-edit-fa fa-solid fa-hand-back-fist"></i></h5>
                  <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.damFis}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.damFis", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
                <div>
                  <h5 className="pj-edit-text" align="center">D. Distancia <i className="pj-edit-fa fa-solid fa-gun"></i></h5>
                  <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.damDist}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.damDist", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
                <div>
                  <h5 className="pj-edit-text" align="center">D. Mágico <i className="pj-edit-fa fa-solid fa-wand-magic-sparkles"></i></h5>
                  <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.damMag}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.damMag", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
                <div>
                  <h5 className="pj-edit-text" align="center">Ac. Físico <i className="pj-edit-fa fa-solid fa-hand-back-fist"></i></h5>
                  <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.acFis}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.acFis", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
                <div>
                  <h5 className="pj-edit-text" align="center">Ac. Distancia <i className="pj-edit-fa fa-solid fa-gun"></i></h5>
                  <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.acDist}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.acDist", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
                <div>
                  <h5 className="pj-edit-text" align="center">Ac. Mágico <i className="pj-edit-fa fa-solid fa-wand-magic-sparkles"></i></h5>
                  <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.acMag}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.acMag", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
          </div>
          <div><h2 className='ps-5 pt-5'>Defensa</h2></div>
          <div className='d-flex p-1 justify-content-around'>
                <div>
                    <h5 className="pj-edit-text" align="center">Esquiva<i className="pj-edit-fa fa-solid fa-cat"></i></h5>
                    <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.acMag}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.dodge", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
                <div>
                    <h5 className="pj-edit-text" align="center">Resistencia <i className="pj-edit-fa fa-solid fa-hand-sparkles"></i></h5>
                    <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.acMag}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.resist", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
                <div>
                    <h5 className="pj-edit-text" align="center">Bloqueo <i className="pj-edit-fa fa-solid fa-shield"></i></h5>
                    <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.acMag}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.block", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
                <div>
                    <h5 className="pj-edit-text" align="center">Parada <img width="27px" src="https://res.cloudinary.com/dfrda73uc/image/upload/v1667074427/donGions%20imgs/dsalkdmnsal_cpdl15.png" alt="" /></h5>
                    <div className="input-group equipped-form">
                        <input type="number" defaultValue={info.pj.equipped.acMag}  className={`equipped-form`} placeholder="Nombre del apunte. Max 25 caracteres"
                          {...register("equipped.parry", {
                            default: 2, max: 15,  min: -5,
                            maxLength: {value: 1, message:"Máximo 1 caracteres. Si es tan largo el título, es que es texto que va abajo...",
                            },
                          })}
                        />
                    </div>
                </div>
                <div className='m-2'>
                    <button  className='custom-btn btn-submit-equip' type='submit'>Equipar</button>
                    <Link  className='custom-btn-return btn-return-equip' to="/profile">Regresar</Link>
                </div>
          </div>
      </form>
    </FadeInOut>
    </div>
  )
}

export default PjDetailScreen