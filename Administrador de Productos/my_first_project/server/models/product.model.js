const mg = require('../config/mongoose.config');

const Product = mg.model('Product', mg.Schema({
    title: {
        type:String,
        required: [true, "There must be a title"],
        minlength: [3, "The title has to be at least 3 characters long"]},
    price: {
        type:Number,
        required: [true, "It can't be priceless"],
    },
    description: {
        type:String,
        required: [true, "There must be a description"],
        minlength: [5, "The description has to be at least 5 characters long"]},

}, {timestamps: true}));
module.exports = {
    Product
}
// {
// "firstName":"john",
// "lastName":"Wick"
// }