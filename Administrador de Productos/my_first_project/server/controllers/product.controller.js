const {Product} = require('../models/product.model')


module.exports.getAllProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}
module.exports.getOneProduct = async (req, res) => {
    const id = req.params.id
    const product = await Product.findOne({_id: id})
    res.json(product)
}
module.exports.createProduct = async (req,res) => {
    const new_product = await Product.create({
        ...req.body
    })
    console.log(req.body)
    res.json(new_product)
    // .catch(err => res.json(err))
}