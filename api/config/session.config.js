const Pj = require("../models/pj.model")
const expressSession = require("express-session");
const MongoStore = require("connect-mongo");
const mongoose = require("mongoose");


module.exports.session = expressSession({
  secret: process.env.SESSION_SECRET || "super secreto",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: mongoose.connection._connectionString,
    ttl: 24 * 3600 * 1000,
  }),
  cookie: {
    secure: process.env.SESSION_SECURE === "true",
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
});


module.exports.loadPj = (req, res, next) => {
  const {pjId} = req.session;
  if (pjId) {
    Pj.findById(pjId)
    .then(pj => {
      req.pj = pj;
      next()
    })
  }else{
    next()
  }
}
