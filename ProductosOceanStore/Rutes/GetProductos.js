const Producto = require("../models/producto")

const getProductos = async (context, req) => {
  try {
    const Productos = await Producto.find()
    context.res = {
      status: 200,
      body: { Productos },
    }
    context.done()
    return
  } catch (err) {
    context.log(err)
  }
}

module.exports = getProductos
