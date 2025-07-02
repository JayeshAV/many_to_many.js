const { DataTypes } = require("sequelize")
const db = require("../config/db")



const category=db.define("category",{

    name:DataTypes.STRING
    
})


module.exports = category