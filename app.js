const express = require('express')
const handlebars = require('express-handlebars')
const session = require('express-session')
const usePassport = require('./config/passport')
const passport = require('./config/passport')
const flash = require('connect-flash')

const app = express()
const port = 3000

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(session({
  secret: 'jhang',
  resave: false,
  saveUninitialized: true
}))
app.use(flash())
app.use((req, res, next) => {
  res.locals.success_messages = req.flash('success_messages')
  res.locals.error_messages = req.flash('error_messages')
  next()
})
app.use(passport.initialize())
app.use(passport.session())
app.get('/', (req, res) => {
  res.render('home')
})
app.listen(port, ()=> {
  console.log(`This app is listening on http://localhost:${port}`)
})

require('./routes')(app)

module.exports = app