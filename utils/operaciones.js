const fs = require('fs')

const getCitas = () => JSON.parse(fs.readFileSync('./db/citas.json', 'utf-8'))

const registrar = ([nombre, edad, animal, color, enfermedad]) => {
  try {
    if (
      nombre === undefined ||
      edad === undefined ||
      animal === undefined ||
      color === undefined ||
      enfermedad === undefined
    ) {
      throw new Error('Algunos de los datos son nulos')
    }
    const data = getCitas()
    data.push({ nombre, edad, animal, color, enfermedad })
    fs.writeFileSync('./db/citas.json', JSON.stringify(data))
    console.log('Registro agregado con exito 🐾')
  } catch (error) {
    console.error(error)
  }
}

const leer = (_) => {
  try {
    const data = getCitas()
    console.log(data)
  } catch (error) {
    console.error(error)
  }
}

const error = (_) => console.error('opción invalida')

module.exports = {
  registrar,
  leer,
  error
}
