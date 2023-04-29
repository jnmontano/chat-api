const { DataTypes } = require("sequelize");

const db = require("../utils/database");
//const Users = require("./users.models");

const Conversations = db.define("conversations", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  profileImage:{
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isGroup: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

//seccion importaciones
module.exports = Conversations