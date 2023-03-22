const AuthorController = require('../controllers/author.controller');
const express = require('express')

const router = express.Router()

router.get('/api/authors', AuthorController.getAllAuthors);
router.get('/api/authors/:id', AuthorController.getOneAuthor);
router.delete('/api/authors/:id/delete', AuthorController.deleteAuthor);
router.put('/api/authors/:id/edit', AuthorController.editAuthor);
router.post('/api/authors', AuthorController.createAuthor)

module.exports = router