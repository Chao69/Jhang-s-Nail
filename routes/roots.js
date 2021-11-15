const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('root', ({ layout: 'root' }))
})

module.exports = router