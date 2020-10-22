// const config = require('./../config/database');
const { Serie, Genero } = require('../models')
var SerieController = {
    
    home: async (req, res) => {
        const result = await Serie.findAll();
        return res.render('serie/home', {result})
    },

    criar: async (req, res) => {
        const generos = await Genero.findAll();
        return res.render('serie/criar', {generos})
    },

    guardar: async (req, res) => {
        const dados = req.body;
        const result = await Serie.create(dados);
        return res.redirect('/series/');
    },

    edit: async (req, res) => {
        const { id } = req.params;
        const serie = await Serie.findByPk(id);
        const generos = await Genero.findAll();
        return res.render('serie/edit', {generos, serie})
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        const result = await Serie.update(dados, {where: {id}});
        return res.redirect('/series/');
    },

    deletar: async (req, res) => {
        const { id } =req.params;
        const result = await Serie.destroy({where:{id}});
        return res.redirect('/series/');
    }
}

module.exports = SerieController;