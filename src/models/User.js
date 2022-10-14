const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    userName:{
      type:DataTypes.STRING
    },
    name:{
      type: DataTypes.STRING,
    },
    lastName:{
      type:DataTypes.STRING
    },
    email:{
      type: DataTypes.STRING,
    },
    password:{
      type: DataTypes.STRING,
    },
    role:{
      type: DataTypes.STRING,
       defaultValue: "user"
    }
  },
  {
    timestamps:false
  });
};