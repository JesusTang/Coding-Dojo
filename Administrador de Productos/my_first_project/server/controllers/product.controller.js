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
}
module.exports.deleteProduct = async (req, res) => {
    const id = req.params.id
    await Product.findOneAndRemove({_id: id})
    res.json(id + "has been deleted")
}
module.exports.editProduct = async (req, res) => {
    const id = req.params.id
    const product = await Product.updateOne(
        {_id: id},
        { ...req.body }
    )
    return res.json(product)
}