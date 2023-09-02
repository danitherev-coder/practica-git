import { DataTypes } from "sequelize" // comentarios xd
import db from "../config/db.postgres.js";

const UserModels = db.define('user', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  token: {
    type: DataTypes.STRING
  }
})

export default UserModels;