const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('movie', {
    img:{
      type: DataTypes.STRING,
    },
    title:{
      type: DataTypes.STRING,
    },
    created:{
      type: DataTypes.STRING,
    },
    qualification:{
      type: DataTypes.ENUM('1','2','3','4','5')
    }
  },
  {
    timestamps:false
  });
};