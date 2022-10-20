const Note = require("../models/note.model");

module.exports.list = (req, res, next) => {
  const criteria = {};
  if (req.pj) {
    criteria.author = req.pj.id;
  }
  // falta meter criteria e finde(.)
  Note.find(criteria)
    .populate("author", "nickname")
    .then((note) => res.json(note))
    .catch((error) => next(error));
};

module.exports.create = (req, res, next) => {
  const note = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
  };
  note.author = req.pj.id;

  Note.create(note)
    .then((note) => res.status(201).json(note))
    .catch((error) => next(error));
};

module.exports.detail = (req, res, next) => {
  Note.findById(req.params.id)
    .populate("author", "nickname")
    .then((note) => {
      if (note) {
        res.json(note);
      } else {
        res.status(404).json({ message: "Página no encontrada" });
      }
    })
    .catch(next);
};

module.exports.edit = (req, res, next) => {
  const data = {
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    category: req.body.category,
  };
  delete data.author;
  const { id } = req.params;

  Note.findByIdAndUpdate(id, data, {new:true, runValidators: true})
    .then((note) => res.json(note))
    .catch(next);
};

module.exports.delete = (req, res, next) => {
  Note.deleteOne({ _id: req.note.id })
    .then(() => res.status(204).send())
    .catch(next);
};
