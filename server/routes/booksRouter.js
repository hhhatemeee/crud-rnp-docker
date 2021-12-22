const Router = require('express');
const bookController = require('../controllers/bookController');
const router = new Router();
const BookController = require('../controllers/bookController')


router.post('/books', bookController.newBook)
router.get('/books', bookController.getBooks)
router.get('/books/test', bookController.getOneBook)
router.put('/books/:id', bookController.updateBook)
router.delete('/books/:id', bookController.deleteBook)






module.exports = router;