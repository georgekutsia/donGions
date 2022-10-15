const mongoose = require ("mongoose")
const Schema = mongoose.Schema
const categories = require("./../data/noteCategories")
const isURL = (value) => {
  try {
    new URL(value);
    return true;
  } catch (error) {
    return false;
  }
};

const cardSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Un nombre te facilitará encontrarlo. Lo necesitas, hazme caso",
    maxLength:[30, "Si es tan largo el título, es que es texto que va abajo..."]
  },
  description:{
    type: String,
    trim: true,
    maxLength:[600, "Textos mas pequeños son más fáciles de seguir"]
  },
  image:{
    type: String,
    trim: true,
    // validate: {
    //   validator: isURL,
    //   message: "La URL no es válida",        
    // },
    required: false,
    default:"https://res.cloudinary.com/dfrda73uc/image/upload/v1665356910/donGions%20imgs/notes/noteBook_lxsw4h.png"
  },
  category:{
    type: [{
      type: String,
      required: "category is required",
      enum: categories.map(category => category.value),
      default: "extra",
      trim: true
    }]
  },
  author:{
    ref: "Pj",
    type: mongoose.Schema.Types.ObjectId,
  },
  admin:{
    type: Boolean
  }
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
})
const Note = mongoose.model("Note", cardSchema)
module.exports = Note