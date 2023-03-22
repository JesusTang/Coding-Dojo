const {Author} = require('../models/author.model')


module.exports.getAllAuthors = async (req, res) => {
    const authors = await Author.find()
    res.json(authors)
}
module.exports.getOneAuthor = async (req, res) => {
    const id = req.params.id
    const author = await Author.findOne({_id: id})
    res.json(author)
}
module.exports.createAuthor = async (req,res) => {
    try {
        const new_author = await Author.create({
            ...req.body
        })
        console.log(req.body)
        res.json(new_author)
    }
    catch (error) {res.status(400).json(error)}
}
module.exports.deleteAuthor = async (req, res) => {
    const id = req.params.id
    await Author.findOneAndRemove({_id: id})
    res.json(id + "has been deleted")
}
module.exports.editAuthor = async (req, res) => {
    const id = req.params.id
    try {
        await Author.findOneAndUpdate(
            {_id: id},
            { ...req.body },
            { runValidators: true }
        )
        console.log(req.body)
        res.json(req.body)
    }
    catch (error) {res.status(400).json(error)}
}

