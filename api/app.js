require("dotenv").config();
const createError = require("http-errors")
const express = require("express")
const logger = require("morgan")

require("./config/db.config")

const app = express()
// app.use(express.static(`${__dirname}/react-app`));

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000", "https://georgekutsia.github.io/donGions/");
  res.set("Access-Control-Allow-Headers", "content-type");
  res.set("Access-Control-Allow-Methods", "GET,POST,DELETE,PATCH");
  res.set("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(express.json())
app.use(logger("dev"))

const {session, loadPj} = require("./config/session.config");
app.use(session)
app.use(loadPj)

const routes = require("./config/routes.config");
const { default: mongoose } = require("mongoose");
app.use("/api/v1", routes)
// app.get('/*', (req, res) => {
//   res.sendFile(`${__dirname}/react-app/index.html`);
// })


app.use((error, req, res, next) => {
  res.status(error.status || 500);
  const data = {};

  console.error(error);

  if (error instanceof mongoose.Error.ValidationError || error.status === 400) {
    error.status = 400;
    data.errors = error.errors;
  } else if (error instanceof mongoose.Error.CastError) {
    error = createError(404, "No encontrado");
  }

  data.message = error.message;
  res.status(error.status)
  res.json(data);
});


const port = process.env.PORT || 3099
app.listen(port, () => console.log(`Api se ejecuta en el puerto ${port}`))
