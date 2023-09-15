const operaciones = require('./utils/operaciones')
const [option, ...data] = process.argv.slice(2)

const actionUser = operaciones[option] || operaciones.error
actionUser(data)
