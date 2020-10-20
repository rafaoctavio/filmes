module.exports = (sequelize, DataTypes) => {
    const Generos = sequelize.define("Genero", {
        nome: DataTypes.STRING,
        ranking: {
            type: DataTypes.INTEGER,
            unique: true,
            unsigned: true
        },
        ativo: DataTypes.BOOLEAN
    }, {timestamps:false, tableName: "generos"});

    return Generos;
}