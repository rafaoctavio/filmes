const config = require('./../config/database');
const { User } = require('../models');
const UserController = {
    index: (req, res) => {
        const {user} = req.session;

        return res.render('user', { user });
    },
    edit: (req, res) => {
        const {user} = req.session;

        return res.render('user-edit', { user });
    },
    listar: async (req, res) => {
        const {user} = req.session;
        const result = await User.findAll();
        return res.render('user-list', { result, user })
    },
    atualizar: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        const result = await User.update(dados, { where: { id } });
        return res.redirect('user');
    },

};

module.exports = UserController;