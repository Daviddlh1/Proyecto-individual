const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT
    },
    description: {
      type: DataTypes.TEXT,
    },
    release_date: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING)
    },
  },
  {
    timestamps: false,
  }
  );
};
