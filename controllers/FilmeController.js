const config = require('./../config/database');
const { Filme, Genero, User } = require('../models')
var FilmeController = {
    
    home: async (req, res) => {
        const {user} = req.session;
        const result = await Filme.findAll({include:'generos'});
        return res.render('filme/home', {result, user})
    },

    criar: async (req, res) => {
        const {user} = req.session;
        const generos = await Genero.findAll();
        return res.render('filme/criar', {generos, user})
    },

    guardar: async (req, res) => {
        const dados = req.body;
        const result = await Filme.create(dados);
        return res.redirect('/filmes/');
    },

    edit: async (req, res) => {
        const {user} = req.session;
        const { id } = req.params;
        const filme = await Filme.findByPk(id);
        const generos = await Genero.findAll();
        return res.render('filme/edit', {generos, filme, user})
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        const result = await Filme.update(dados, { where: { id } });
        return res.redirect('/filmes/');
    },

    deletar: async (req, res) => {
        const { id } =req.params;
        const result = await Filme.destroy({ where:{ id } });
        return res.redirect('/filmes/');
    },

    alugar: async (req, res) => {
        const { id } = req.params;
        const filme = await Filme.findByPk(id);
        const dados = {...filme } 
        if (filme.esta_alugado === true) {
            dados.esta_alugado = false
            dados.id_user = null
        } else {
            dados.esta_alugado = true
            dados.id_user = req.session.user.id
        };
        const alugar = await Filme.update(dados, { where: { id } });

        return res.redirect('/filmes/');
    }
}

module.exports = FilmeController;