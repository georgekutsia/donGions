import React from 'react'
import { useForm, } from "react-hook-form";


function Liliana() {
  const {register, handleSubmit, setError, control, formState: { errors, isValid },} = useForm({mode: "onBlur"});

  const lialiana = {
    luck: 4,
    charisma: 3,
    perception: 2,
    kinesthesia: 3,
    prnce:20,
    bleh: 7
}
const lilia = JSON.stringify(lialiana)
  return (
    <div>
        <input type="checkbox" className="btn-check" value={lilia}  id="person" {...register("mana")}/>
        <label style={{border: "black"}} className="btn btn-outline-dark p-2"  htmlFor="person"> Liliana</label><br></br>
    </div>
  )
}

export default Liliana