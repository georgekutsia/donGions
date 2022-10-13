const mongoose = require("mongoose")

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/DonGions&Drogas"

mongoose.connect(MONGODB_URI)
  .then(() => console.log(`Conectado correctamente a la base de datos en ${MONGODB_URI}`))
  .catch(error => console.error(`Algún error al conectar a mongo en ${MONGODB_URI}`, error))