// const config = require('./../config/database');
const { Filme, Genero } = require('../models')
var FilmeController = {
    
    home: async (req, res) => {
        const result = await Filme.findAll();
        return res.render('filme/home', {result})
    },

    criar: async (req, res) => {
        const generos = await Genero.findAll();
        return res.render('filme/criar', {generos})
    },

    guardar: async (req, res) => {
        const dados = req.body;
        const result = await Filme.create(dados);
        return res.redirect('/filmes/');
    },

    edit: async (req, res) => {
        const { id } = req.params;
        const filme = await Filme.findByPk(id);
        const generos = await Genero.findAll();
        return res.render('filme/edit', {generos, filme})
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        const result = await Filme.update(dados, {where: {id}});
        return res.redirect('/filmes/');
    },

    deletar: async (req, res) => {
        const { id } =req.params;
        const result = await Filme.destroy({where:{id}});
        return res.redirect('/filmes/');
    }
}

module.exports = FilmeController;