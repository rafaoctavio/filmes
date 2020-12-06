function loggedUser(req, res, next) {
req.session.user ={
  id: 2,
  nome: 'Rafael Carvalho',
  email: 'rafaoctavio@gmail.com',
  ehAdmin: null
}
  if(!req.session.user) {
    return res.status(500).redirect('/login');
  }
  next();
}

function adminUser(req, res, next) {
  if(!req.session.user.admin) {
    return res.render('login');
  }
  next();
}

module.exports = { loggedUser, adminUser }