const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const port = 3000

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.send("This is Jhang's Nail demo")
})

app.get('/:type', (req, res) => {
  console.log('request', req)
  res.send(`${req.params.type} type menu`)
})

app.listen(port, ()=> {
  console.log(`This app is listening on http://localhost:${port}`)
})