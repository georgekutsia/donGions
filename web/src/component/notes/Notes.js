import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as noteService from "../../services/all-services";
import Actions from "../guide/parts/toggle-info/Actions";

function Notes({size,color}) {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    noteService
      .getNotes()
      .then((notes) => setNotes(notes))
      .catch((error) => console.error(error));
  }, []);
  function capitilize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <div>
      <div className="panels mt-5" >
        {notes.map((note) => (
            <div style={{transform:"rotate(2deg)",color:`${color}`, fontSize:`${size}`}} className="panel m-2 p-3" id="note-transform" key={note.id}>
              <Link to={`/notes/${note.id}`} >
                <img src={note.image} alt="Imagen" className="img-note-position"/>
              </Link>
              <h5>{capitilize(note.title)}</h5>
              <div>{note.description}</div>
              <div>{note.updatedAt}</div>
              <div>{console.log(note.category)}</div>
              <div>{note.category}</div>
              <div>{note.author.nickname}</div>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
