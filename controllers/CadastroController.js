// const bcrypt = require('bcrypt');
// const {usuario} = require ('../models');
const CadastroController = {
    index: (req, res) => {
        return res.render('cadastro');
    },
      
    
    criar: async (req, res) => {
        const {nome, email,senha} = req.body;
        const {filename} = req.file;
        // const salt = bcrypt.genSaltSync(10);
        // const hash = bcrypt.hashSync(senha, salt);
        console.log(req.body)
        const result = await usuario.create({nome, email, senha:"hash"});
        return res.redirect('/profile/');
    }
}

module.exports = CadastroController;