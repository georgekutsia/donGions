const Cards = require("../models/card.model")
const createError = require("http-errors")

module.exports.createdByUser = (req, res, next) => {
  const {id} = req.params;
  Cards.findById(id)
  .then(card => {
      if (card?.creator == req.pj?.id) {
        req.card = card;
        next()
      } else if (card){
        next(createError(403, "Eso pertenece a otro. No tienes permisos para lo que intentas hacer"))
      } else {
        next(createError(404, "Carta no encontrada"))
      }
  })
  .catch(next)
}