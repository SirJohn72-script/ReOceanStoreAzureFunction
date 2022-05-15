const mongoose = require("mongoose")
const getProductos = require("./Rutes/GetProductos")
require("dotenv").config()

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.ebfmg.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`

mongoose
  .connect(uri, {
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECCION")
  })
  .catch((err) => {
    console.log(err)
  })

module.exports = async function (context, req) {
  await getProductos(context, req)

  context.res = {
    status: 200,
    body: "todo correcto",
  }
}
