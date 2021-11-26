const db = require('../models')
const Admin = db.Admin

const adminController = {
  loginPage: (req, res) => {
    res.render('login', { layout: 'loginMain' })
  },

  login: (req, res) => {
    req.flash('success_messages', '成功登入！')
    res.redirect('/admin')
  },

  logout: (req, res) => {
    req.flash('success_messages', '成功登出！')
    req.logout()
    res.redirect('/admin/logout')
  },

  homepage: (req, res) => {
    res.render('admin')
  }
}

module.exports = adminController