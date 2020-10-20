const { Genero } = require('../models')

var FilmeController = {
    home: async (req, res) => {
        // Listar os produtos
        // Receber os dados do banco
        // Chamar a view e passar os dados que vieram do banco
        const result = await Genero.findAll();
        res.render('genero/home', {result});
    }
}

module.exports = FilmeController;