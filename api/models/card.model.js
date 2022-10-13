const mongoose =  require ("mongoose")
const Schema = mongoose.Schema;

const cardSchema = new Schema ({
  name: {
        type: String,
        trim: true,
        maxLength:[50, "El nombre es demasiado largo"],
        required: "You forget to put a name on it, put a name on it, like beyoncee"
  },
  // imagen del objeto
  image:{
    type: String,
    trim: true,
    required: "Put a picture to represent your creation"
  },
  // texto que describe la característica principal del objeto
  description:{
    type: String,
    trim: true,
    maxLength:[300, "Eaaaasy, less text please"],
  },
  // característica especial 
  special:{
    type: String,
    trim: true,
    maxLength:[300, "Too complicated, simplify"],
  },
  
  // atributo que añade maná
  mana:{
    type: Number,
    trim: true,
  },
  mov:{
    type: Number,
    trim: true,
  },
  // la carga del objeto
  weight:{
    type: Number,
    trim: true,
  },
  // daño físico <-> daño mágico <-> daño a distancia
  damage:{
    fis:{
      type: Number,
      trim: true,
    },
    dist:{
      type: Number,
      trim: true,
    },
    mag:{
      type: Number,
      trim: true,
    }
  },
  // alcance al que hace daño
  reach:{
    type: Number,
    trim: true,
  },
  // acierto físico <-> acierto mágico <-> acierto a distancia
  ac: {
    fis: {
      type: Number,
      trim: true,
    },
    dist: {
      type: Number,
      trim: true,
    },
    mag: {
      type: Number,
      trim: true,
    },
  },
  // Precisión <-> velocidad <-> marcialidad
  acPower: {
    prec: {
      type: Number,
      trim: true,
    },
    speed: {
      type: Number,
      trim: true,
    },
    marc: {
      type: Number,
      trim: true,
    },
  },
  // esquiva <->  bloqueo <-> parada <-> resistencia
  def: {
    dodge: {
      type: Number,
      trim: true,
    },
    block: {
      type: Number,
      trim: true,
    },
    parry: {
      type: Number,
      trim: true,
    },
    resist: {
      type: Number,
      trim: true,
    },
  },
  // reflejos <-> firmeza <-> temple
  defPower: {
    refl: {
      type: Number,
      trim: true,
    },
    firm: {
      type: Number,
      trim: true,
    },
    temp: {
      type: Number,
      trim: true,
    },
  },
  // suerte <-> carisma <-> percepción <-> cinestesia <-> presencia
  character: {
    luck: {
      type: Number,
      trim: true,
    },
    charisma: {
      type: Number,
      trim: true,
    },
    perception: {
      type: Number,
      trim: true,
    },
    kinesthesia: {
      type: Number,
      trim: true,
    },
    presence: {
      type: Number,
      trim: true,
    },
  },
// a qué pieza de la armadura pertenece: cabeza, manos, espalda, armadura de cuerpo, pies, arma o escudo que ocupan espacio
  part:{
    type: String,
    enum: ["head", "feet", "hands", "back", "body", "fingers", "misc1", "misc2", "misc3", "misc4", "misc5"],
    trim: true,
  },
  // precio del objeto
  price:{
    type: Number,
    trim: true,
    minimum: 0,
  },
  author:{
    ref: "Pj",
    type: mongoose.Schema.Types.ObjectId,
  },
  level:{
    type: Number
  },
  admin:{
    type: Boolean
  }
}, {timestamps:true,   
  toJSON: {
  transform: (doc, ret) => {
    delete ret.__v;
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
},})

const Card = mongoose.model("Card", cardSchema)
module.exports = Card