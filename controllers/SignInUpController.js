const { user } = require('./../models');
const bcrypt = require('bcrypt');

const SignInUpController = {
    index: (req, res) => {
        const {user} = req.session;
        return res.render("login", {user});
    },

    doLogin: async (req, res) => {
        const { email, senha, remember } = req.body
        const usuario = await user.findOne({ where: { email } });

        if(!usuario) {
            return res.status(401).redirect('/login');
        }
        const senhaValida = bcrypt.compareSync(senha, usuario.senha);
        usuario.senha = undefined;

        if(senhaValida) {
            req.session.user = usuario;
            req.session.user.admin = usuario.ehAdmin;
            return res.redirect('/users');
        }
        return res.status(401).redirect('/login');
    },
    logout: async (req, res) => {
        req.session.destroy(function(err) {
            return res.redirect('login');
         })
    }
}

module.exports = SignInUpController;

