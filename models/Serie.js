module.exports = (sequelize, DataTypes) => {
    const Serie = sequelize.define("Serie",{
        titulo: {
            type: DataTypes.STRING,
            allowNull: false
        },

        data_lancamento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        data_termino: {
            type: DataTypes.DATE,
            unsigned: false
        },
        genero_id: {
            type: DataTypes.INTEGER,
            unsigned: true
        }
    },{timestamps: false, tableName: "series"}); // created_at e updated_at
    return Serie;
}