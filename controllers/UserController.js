const config = require('./../config/database');
const { user, Filme } = require('../models');
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
        const result = await user.findAll();
        return res.render('user-list', { result, user })
    },
    atualizar: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        const result = await user.update(dados, { where: { id } });
        return res.redirect('user');
    },
    filmes: async (req, res) => {
        const usuario = req.session.user;
        const result = await user.findOne({where: { id:usuario.id }, include: 'filmes'})
        return res.render('user-alugados', { result, user:usuario })
    }

};

module.exports = UserController;