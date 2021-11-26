const passport = require('passport')
const LocalStrategy = require('passport-local')
const db = require('../models')
const Admin = db.Admin
const bcrypt = require('bcrypt')

// 設定本地登入策略
passport.use(new LocalStrategy({
  usernameField: 'account',
  passwordField: 'password',
  passReqToCallback: true
},
  (req, username, password, done) => {
    Admin.findOne({ where: { account: username } })
      .then(admin => {
        if (!admin) {
          return done(null, false, req.flash('error_messages', '帳號或密碼輸入錯誤'))
        }
        if (!bcrypt.compareSync(password, admin.password)) {
          return done(null, false, req.flash('error_messages', '帳號或密碼輸入錯誤！'))
        }
        return done(null, admin)
      })
      .catch(err => done(err, false))
  }
))

// 設定序列化與反序列化
passport.serializeUser((admin, done) => {
  done(null, admin.id)
})
passport.deserializeUser((id, done) => {
  Admin.findById(id)
    .then(admin => {
      admin = admin.toJSON()
      return done(null, admin)
    })
})

module.exports = passport

