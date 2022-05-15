const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductoSchema = new Schema({
  name: String,
  description: String,
  bottles: Number,
  price: Number,
  images: Array,
})

const Producto = mongoose.model("Producto", ProductoSchema)

module.exports = Producto
