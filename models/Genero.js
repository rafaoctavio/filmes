module.exports = (sequelize, DataTypes) => {
    const Generos = sequelize.define("Genero", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        nome: DataTypes.STRING,
        ranking: {
            type: DataTypes.INTEGER,
            unique: true,
            unsigned: true
        },
        ativo: DataTypes.BOOLEAN
    }, {timestamps:false, tableName: "generos"});

    Generos.associate = (models) => {
        Generos.hasMany(models.Filme, {foreignKey: 'genero_id', targetKey: 'genero_id', as: 'filme'});
     }
 

    return Generos;
}