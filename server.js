const express = require('express')
const db = require('./config/db')
const Product = require('./models/product')
const Category = require('./models/category')
require('dotenv').config()
const authControllers = require("./routes/product")

const app =express()

Product.belongsToMany(Category,{through:"product_categories"})
Category.belongsToMany(Product,{through:"product_categories"})


db.sync({alter:true})
db.authenticate()
.then((res)=>console.log(`db connected successfully !`))
.catch((err)=>console.log(`db can't connected`,err))


Product.sync({alter:true})
.then((res)=>console.log(`product table created successfully !`))
.catch((err)=>console.log(`product table can't created !`))


Category.sync({alter:true})
.then((res)=>console.log(`Category table created successfully !`))
.catch((err)=>console.log(`Category table can't created !`))




app.use(express.json())

app.use("/api",authControllers)

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on the ${PORT}`);
})