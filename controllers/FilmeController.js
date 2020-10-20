// const config = require('./../config/database');
const { Filme, Genero } = require('../models')
var FilmeController = {
    exemplo: async (req, res) => {
        // const db = new Sequelize(config);

        // const result = await db.query("SELECT * FROM filmes", {type: Sequelize.QueryTypes.SELECT})
        // const result = await db.query("SELECT * FROM atores", {type: Sequelize.QueryTypes.SELECT})
        // const result = await db.query("SELECT * FROM filmes where id = 10", {type: Sequelize.QueryTypes.SELECT})
        // const result = await db.query("SELECT * FROM episodes", {type: Sequelize.QueryTypes.SELECT})
        // const result = await db.query("SELECT * FROM atores ORDER BY nome, sobrenome", {type: Sequelize.QueryTypes.SELECT})
        // Importar a model
        // Executa o metodo que vai retornar uma promise que retorna-ra o resultado.
        // Console.log
        // Filme.findAll() -> Busca todos os registros na tabela e retorna em array
        result = await Filme.findAll();
        // Filme.findOne() -> Busca o primeiro registro que encontra e retorna ele
        result = await Filme.findOne({
            where: {id: 10}
        });
        // Filme.findAll() Com Where -> Busca todos os registros que atendem o filtro
        result = await Filme.findAll({
            where: {genero_id: 3}
        })

        // AGREGADORES
        // Count
        result = await Filme.count('id')
        // sum
        result = await Filme.sum('premios');
        // avg Filme.avg -> retorna a media do campo
        // max retorna o maior valor
        // min retorna o menor valor

        console.log(result);
        res.send('Olá');
    },

    home: async (req, res) => {
        const result = await Filme.findAll();
        console.log(result);
        return res.render('filme/home', {result})
    },

    criar: async (req, res) => {
        const generos = await Genero.findAll();
        return res.render('filme/criar', {generos})
    },

    guardar: async (req, res) => {
        const dados = req.body;
        console.log("DADOS", dados);
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
        console.log("DADOS", dados);
        const result = await Filme.update(dados, {where: {id}});
        return res.redirect('/filmes/');
    }
}

module.exports = FilmeController;