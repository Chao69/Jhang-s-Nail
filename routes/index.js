const roots = require('./roots')
const nails = require('./nails')

module.exports = (app) => {
  app.use('/root', roots)
  app.use('/nails', nails)
}