const config = require('./../config/database');
const { user, Filme } = require('../models');
const UserController = {
    index: (req, res) => {
        const usuario = req.session.user;
        return res.render('user', { user:usuario });
    },
    edit: async (req, res) => {
        const usuario= req.session.user;
        const { id } = req.params;
        const result = await user.findByPk(id);
        return res.render('user-edit', { result, user:usuario });
    },
    listar: async (req, res) => {
        const usuario= req.session.user;
        const result = await user.findAll();
        return res.render('user-list', { result, user:usuario });
    },
    atualizar: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        const result = await user.update(dados, { where: { id } });
        return res.redirect('user');
    },
    filmes: async (req, res) => {
        const usuario = req.session.user;
        const result = await user.findOne({where: { id:usuario.id }, include: 'filmes'});
        return res.render('user-alugados', { result, user:usuario });
    },
    deletar: async (req, res) => {
        const { id } =req.params;
        const result = await user.destroy({ where:{ id } });
        return res.redirect('/filmes/');
    },

};

module.exports = UserController;