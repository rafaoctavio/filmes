module.exports = (sequelize, DataTypes) => {
    const Filme = sequelize.define("Filme",{
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avaliacao: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        premios: {
            type: DataTypes.INTEGER,
            unsigned: true
        },
        data_lancamento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        duracao: {
            type: DataTypes.INTEGER,
            unsigned: true
        },
        genero_id: {
            type: DataTypes.INTEGER,
            unsigned: true
        }
    },{timestamps: false, tableName: "filmes"}); // created_at e updated_at
    return Filme;
}