const { DataTypes } = require("sequelize");
const db = require("../config/db");



const product=db.define("product",{

        item:DataTypes.STRING,
        price:DataTypes.DECIMAL(10,2)

})


module.exports = product