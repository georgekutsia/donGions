const createError = require("http-errors");
const Card = require("../models/card.model");

module.exports.list = (req, res, next) => {

  Card.find()
    // .populate("author", "nickname") 
    // quizás cuando los jugadores puedan crearlo
    .then((cards) => res.json(cards))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const card = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    special: req.body.special,
    mana: req.body.mana,
    mov: req.body.mov,
    weight: req.body.weight,
    damage: req.body.damage,
    reach: req.body.reach,
    ac: req.body.ac,
    acPower: req.body.acPower,
    def: req.body.def,
    defPower: req.body.defPower,
    character: req.body.character,
    part: req.body.part,
    price: req.body.price,
  };
  // card.author = req.pj.id;

  Card.create(card)
    .then((card) => res.status(201).json(card))
    .catch(next);
};

module.exports.detail = (req, res, next) => {
  Card.findById(req.params.id)
    .populate("creator", "nickname")
    .then((card) => {
      if (card) {
        res.json(card);
      } else {
        res.status(404).json({ message: "Detalles de la carta no existentes" });
      }
    })
    .catch(next);
};

module.exports.edit = (req, res, next) => {
  const data = {
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    special: req.body.special,
    mana: req.body.mana,
    mov: req.body.mov,
    weight: req.body.weight,
    damage: req.body.damage,
    reach: req.body.reach,
    ac: req.body.ac,
    acPower: req.body.acPower,
    def: req.body.def,
    defPower: req.body.defPower,
    character: req.body.character,
    part: req.body.part,
    price: req.body.price,
  };
  delete data.creator;

  const card = Object.assign(req.card, data);
  card
    .save()
    .then((card) => res.json(card))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Card.deleteOne({ _id: req.card.id })
    .then(() => res.status(204).send())
    .catch(next);
};
