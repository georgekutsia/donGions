const createError = require ("http-errors")

module.exports.isAuthenticated = (req, res, next) => {
  if(req.pj) {
    console.log("autenticado brother!! no se que pasa")
    next()
  } else {
    next(createError(401))
  }
}

module.exports.isAdmin = (req, res, next) => {
  if (req.pj.admin) {
    next();
  } else {
    next(createError(403));
  }
};