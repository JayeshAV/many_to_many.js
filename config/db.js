const sequelize = require("sequelize")
require('dotenv').config()

const db = new sequelize({
    host:process.env.host,
    dialect:"mysql",
    username:process.env.username,
    database:process.env.database,
    password:process.env.password
})


module.exports = db