import React from 'react'

function NoteSelect({textToSelect, value }) {
  
  return (
    <>
        <input type="checkbox" className="btn-check" value={value} id={value} />
        <label style={{border: "black"}} className="btn btn-outline-dark m-1" htmlFor={value}> {textToSelect}</label><br></br>
    </>
  )
}

export default NoteSelect