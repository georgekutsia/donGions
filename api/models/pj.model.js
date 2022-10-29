const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const EMAIL_PATTERN =
/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PW_PATTERN = /^.{8,}$/;
const WORK_FACTOR = 10;

const pjSchema = new Schema(
  {
    nickname: {
      type: String,
      required: "El nombre de tu personaje debe ser único",
      trim: true,
      unique: true,
      maxLength: [20, "Debe tener menos de 20 caracteres"],
    },
    password: {
      type: String,
      required: "Necesitas una contraseña",
      match: [PW_PATTERN, "Necesitas al menos 8 caracteres"],
    },
    contact: {
      type: String,
      required:
      "Tendrás actualizaciones y premios adicionales al registrarte con mail, pero podrás usar el mismo mail para crearte varios personajes",
      trim: true,
      lowercase: true,
      match: [EMAIL_PATTERN, "Correo electrónico no válido"],
    },
    background: {
      type: String,
      trim: true,
      maxLength: [
        2000,
        "No te pases con tu background, guárdate algunos secretos",
      ],
    },
    stats: Object,
    equipped: Object,
    character: Object,
    mats: Object,
    classHabilities: Array,
    inventory: Array,
    place: String,
    // equipped: {
    //   head: mongoose.Schema.Types.ObjectId,
    //   feet: mongoose.Schema.Types.ObjectId,
    //   hands: mongoose.Schema.Types.ObjectId,
    //   back: mongoose.Schema.Types.ObjectId,
    //   body: mongoose.Schema.Types.ObjectId,
    //   fingers: [mongoose.Schema.Types.ObjectId],
    //   misc: [mongoose.Schema.Types.ObjectId],
    // },
    gold: Number,
    level: Number,
    admin: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        return ret;
      },
    },
  }
);

pjSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    bcrypt
      .hash(this.password, WORK_FACTOR)
      .then((hash) => {
        this.password = hash;
        next();
      })
      .catch(next);
  } else {
    next();
  }
});

pjSchema.methods.checkPassword = function (passwordToMatch) {
  return bcrypt.compare(passwordToMatch, this.password);
};

const Pj = mongoose.model("Pj", pjSchema);
module.exports = Pj;
