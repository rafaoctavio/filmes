const { Genero, User } = require('../models')

var GeneroController = {
    home: async (req, res) => {
        const {user} = req.session;
        const result = await Genero.findAll();
        res.render('genero/home', {result, user});
    },

    criar: async (req, res) => {
        const {user} = req.session;
        const generos = await Genero.findAll();
        return res.render('genero/criar', {generos, user})
    },

    guardar: async (req, res) => {
        const dados = req.body;
        const result = await Genero.create(dados);
        return res.redirect('/generos/');
    },

    edit: async (req, res) => {
        const {user} = req.session;
        const { id } = req.params;
        const genero = await Genero.findByPk(id);
        return res.render('genero/edit', {genero, user})
    },

    atualizar: async (req, res) => {
        const { id } = req.params;
        const dados = req.body;
        const result = await Genero.update(dados, {where:{id}});
        return res.redirect('/generos/');
    },

    deletar: async (req, res) => {
        const { id } =req.params;
        const result = await Genero.destroy({where:{id}});
        return res.redirect('/generos/');
    }

}

module.exports = GeneroController;