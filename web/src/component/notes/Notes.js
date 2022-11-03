import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as noteService from "../../services/all-services";
import Actions from "../guide/parts/toggle-info/Actions";

function Notes({size,color, width, height, maxWidth, minWidth}) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    noteService
      .getNotes()
      .then((notes) => setNotes(notes))
      .catch((error) => console.error(error));
  }, []);
  const handleClick = () => {
   noteService
      .deleteNote()
      .then(() => {
        window.location.reload(true)
      })
      .catch(error => console.log(error))
  }
  function capitilize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div>
      <div className="panels justify-content-evenly" >
        {notes.map((note) => (
            <div style={{transform:"rotate(2deg)",color:`${color}`, fontSize:`${size}`, width:`${width}`, height:`${height}`, maxWidth:`${maxWidth}`, minWidth:`${minWidth}` }} className="panel m-2 p-3 " id="note-transform" key={note.id}>
              <Link to={`/notes/${note.id}`} >
                <img src={note.image} alt="Imagen" className="img-note-position"/>
              </Link>
              <h5>{capitilize(note.title)}</h5>
              <div>{note.category}</div>
              <div>{note.description}</div>
              <Link style={{color:"red"}} onClick={handleClick} className="delete-note-position"><i className="fa-solid fa-trash-can"></i></Link>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
