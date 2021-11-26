const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin')
const passport = require('passport')

const authenticator = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  res.redirect('/admin/login')
}

router.get('/login', adminController.loginPage)
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/admin/login', failureFlash: true
}), adminController.login)

router.get('/', authenticator, adminController.homepage)

module.exports = router