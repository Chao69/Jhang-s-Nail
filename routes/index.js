const nails = require('./nails')
const admin = require('./admin')

module.exports = app => {
  app.use('/nails', nails)
  app.use('/admin', admin)
}