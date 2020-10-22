const { Genero } = require('../models')

var GeneroController = {
    home: async (req, res) => {
        // Listar os produtos
        // Receber os dados do banco
        // Chamar a view e passar os dados que vieram do banco
        const result = await Genero.findAll();
        res.render('genero/home', {result});
    },

    criar: async (req, res) => {
        const generos = await Genero.findAll();
        return res.render('genero/criar', {generos})
    },

    guardar: async (req, res) => {
        const dados = req.body;
        const result = await Genero.create(dados);
        return res.redirect('/generos/');
    },

    edit: async (req, res) => {
        const { id } = req.params;
        const genero = await Genero.findByPk(id);
        return res.render('genero/edit', {genero})
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