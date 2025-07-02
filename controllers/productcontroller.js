const Category = require("../models/category")
const Product = require("../models/product")


exports.createCategory = async (req, res) => {

    const { name } = req.body

    if (!name) return res.status(400).json({ message: "category name is required !" })

    try {
        const category = await Category.create({
            name
        })
        res.status(200).json({ message: "category created !", category })
    } catch (err) {
        res.status(500).json({ message: "DB Error" })
    }

}

exports.createProduct = async (req, res) => {

    const { item, price, categoryID } = req.body

    if (!item || !price || !Array.isArray(categoryID) || categoryID.length === 0) return res.status(200).json({ message: "All fields are required !" })

    try {
        const product = await Product.create({ item, price })

        await product.setCategories(categoryID)

        const productwithcats = await Product.findByPk(product.id, {
            include: Category
        })

        res.status(200).json({ message: "Product created successfully !", product: productwithcats })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "something went wrong !" })
    }

}