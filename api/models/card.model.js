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
    life: Number,
    mana: Number,
    actions: Number,
    mov: Number,
    reach: Number,
    weight: Number,
    damFis: Number,
    damDist: Number,
    damMag: Number,
    acFis: Number,
    acDist: Number,
    acMag: Number,
    precision: Number,
    speed: Number,
    marciality: Number,
    dodge: Number,
    block: Number,
    parry: Number,
    resist: Number,
    reflex: Number,
    firm: Number,
    temple: Number,
    luck: Number,
    charisma: Number,
    perception: Number,
    kinesthesia: Number,
    presence: Number,
    price: Number,
    level:Number,
// a qué pieza de la armadura pertenece: cabeza, manos, espalda, armadura de cuerpo, pies, arma o escudo que ocupan espacio
  part:{
    type: String,
    enum: ["head", "feet", "hands", "back", "body", "fingers", "misc1", "misc2", "misc3", "misc4", "misc5"],
    trim: true,
  },
  // precio del objeto
  author:{
    ref: "Pj",
    type: mongoose.Schema.Types.ObjectId,
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