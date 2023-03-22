const mg = require('../config/mongoose.config');

const Author = mg.model('Author', mg.Schema({
    name: {
        type:String,
        required: [true, "An author can't be nameless"],
        minlength: [3, "The author's name can't be shorter than 3 characters"]},
}, {timestamps: true}));
module.exports = {
    Author
}
// {
// "firstName":"john",
// "lastName":"Wick"
// }