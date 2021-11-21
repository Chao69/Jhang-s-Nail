const express = require('express')
const handlebars = require('express-handlebars')
const session = require('express-session')

const app = express()
const port = 3000

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(session({
  secret: 'jhang',
  resave: false,
  saveUninitialized: true
}))
app.get('/', (req, res) => {
  res.render('home')
})
app.listen(port, ()=> {
  console.log(`This app is listening on http://localhost:${port}`)
})

require('./routes')(app)

module.exports = app