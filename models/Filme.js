module.exports = (sequelize, DataTypes) => {
    const Filme = sequelize.define("Filme",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
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
        },
        esta_alugado: DataTypes.BOOLEAN,
        id_user:DataTypes.INTEGER
        
    },{timestamps: false, tableName: "filmes"});
    
    Filme.associate = (models) => {
       Filme.hasOne(models.user, {foreignKey: 'id', as: 'user'});
       Filme.belongsTo(models.Genero, {foreignKey: 'genero_id',targetKey:'id',name: 'id', as: 'generos'});
    }

   
    return Filme;
}