const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PW_PATTERN = /^.{8,}$/;
const WORK_FACTOR = 10;

const pjSchema = new Schema(
  {
    email: {
      type: String,
      required:
        "Tendrás actualizaciones y premios adicionales al registrarte con mail, pero podrás usar el mismo mail para crearte varios personajes",
      trim: true,
      lowercase: true,
      match: [EMAIL_PATTERN, "correo electrónico no valido"],
    },
    password: {
      type: String,
      required: "Necesitas una contraseña",
      match: [PW_PATTERN, "Necesitas al menos 8 caracteres"],
    },
    nickname: {
      type: String,
      required: "El nombre de tu personaje debe ser único",
      trim: true,
      unique: true,
      maxLength: [40, "Debe tener menos de 40 caracteres"],
    },
    name: {
      type: String,
      trim: true,
      maxLength: [20, "Debe tener menos de 20 caracteres"],
    },
    image: {
      type: String,
      trim: true,
    },
    background:{
      type: String,
      trim: true,
      maxLength: [2000, "No te pases con tu background, guárdate algunos secretos"]
    },
    life: {
      type: Number,
    },
    mana: {
      type: Number,
    },
    mov: {
      type: Number,
    },
    // la carga del objeto
    weight: {
      type: Number,
    },
    // daño físico <-> daño mágico <-> daño a distancia
    damage: {
      fis: Number,
      dist: Number,
      mag: Number,
    },
    // alcance al que hace daño
    reach: {
      type: Number,
    },
    // acierto físico <-> acierto mágico <-> acierto a distancia
    ac: {
      fis: Number,
      dist: Number,
      mag: Number,
    },
    // Precisión <-> velocidad <-> marcialidad
    acPower: {
      prec: Number,
      speed: Number,
      marc: Number,
    },
    // esquiva <->  bloqueo <-> parada <-> resistencia
    def: {
      dodge: Number,
      block: Number,
      parry: Number,
      resist: Number,
    },
    // reflejos <-> firmeza <-> temple
    defPower: {
      refl: {
        type: Number,
      },
      firm: {
        type: Number,
      },
      temp: {
        type: Number,
      },
    },
    // suerte <-> carisma <-> percepción <-> cinestesia <-> presencia
    character: {
      luck: Number,
      charisma: Number,
      perception: Number,
      kinesthesia: Number,
      presence: Number
    },
    inventory: {
      type: Array,
    },
    equipped: {
      head: {
        type: mongoose.Schema.Types.ObjectId,
      },
      feet: {
        type: mongoose.Schema.Types.ObjectId,
      },
      hands: {
        type: mongoose.Schema.Types.ObjectId,
      },
      back: {
        type: mongoose.Schema.Types.ObjectId,
      },
      body: {
        type: mongoose.Schema.Types.ObjectId,
      },
      fingers: {
        type: [mongoose.Schema.Types.ObjectId],
      },
      misc: {
        type: [mongoose.Schema.Types.ObjectId],
      },
      gold: {
        type: Number,
      },
      level:{
        type: Number
      },
      admin: {
        type: Boolean,
      },
    },
  },
  {timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        delete ret.__v;
        ret.id = ret._id;
        delete ret._id;
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
