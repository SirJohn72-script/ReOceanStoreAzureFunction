const Mascota = require("../models/mascota")

const getMascotas = async (context, req) => {
  try {
    const arraymascotas = await Mascota.find()

    context.res = {
      status: 200,
      body: {
        info: arraymascotas,
      },
    }
    context.done()

    return
  } catch (err) {
    console.log(err)
  }
}

module.exports = getMascotas
