const createError = require("http-errors");
const Pj = require("../models/pj.model");

module.exports.profile = (req, res, next) => {
  res.json(req.pj);
};

module.exports.register = (req, res, next) => {
  const { nickname } = req.body;
  Pj.findOne({ nickname })
    .then((pj) => {
      if (pj) {
        next(
          createError(400, {
            message: "La validación ha fallado",
            errors: { nickname: { message: "Ese nombre ya existe. Elige otro" } },
          })
        );
      } else {
        return Pj.create(req.body).then((pj) => res.status(201).json(pj));
      }
    })
    .catch((error) => next(error));
};

module.exports.authenticate = (req, res, next) => {
  function failedAuth() {
    next(
      createError(400, {
        message: "La validación ha fallado",
        errors: { nickname: { message: "Nickname o Contraseña incorrectas" } },
      })
    );
  }
  const { nickname, password } = req.body;
  Pj.findOne({ nickname })
    .then((pj) => {
      if (!pj) {
        failedAuth();
      } else {
        return pj.checkPassword(password).then((match) => {
          if (match) {
            req.session.pjId = pj.id;
            res.status(201).json(pj);
          } else {
            failedAuth();
          }
        });
      }
    })
    .catch((error) => next(error));
};

module.exports.logout = (req, res, next) => {
  req.session.destroy();
  req.session = null;
  res.status(204).send();
};


module.exports.detailPj = (req, res, next) => {
  Pj.findById(req.params.id)
    .then((pj) => {
      if (pj) {
        res.json(pj);
      } else {
        res.status(404).json({ message: "Datos del PJ no encontrados" });
      }
    })
    .catch(next);
};

module.exports.editPj = (req, res, next) => {
  const data = req.body
  console.log("la data",data)
  const { id } = req.params;
  Pj.findByIdAndUpdate(id, data, {new:true, runValidators: true})
  .then((pj) => res.json(pj))
    .catch(next);
};