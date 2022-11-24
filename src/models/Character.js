const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('character', {
    img: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    history: {
      type: DataTypes.TEXT,
    },
  });
};
