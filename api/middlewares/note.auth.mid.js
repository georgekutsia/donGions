const Note = require("../models/note.model")
const createError = require("http-errors")

module.exports.isOwnedByUser = (req, res, next) => {
  const {id} = req.params;
  Note.findById(id)
  .then(note => {
      if (note?.author == req.pj?.id) {
        console.log("es tuyo, disfruta")
        req.note = note;
        next()
      } else if (note){
        next(createError(403, "No puedes acceder a documentos de otros jugadores sin su consentimiento"))
      } else {
        next(createError(404, "Anotaciones no encontradas"))
      }
  })
  .catch(next)
}