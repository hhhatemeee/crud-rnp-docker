const db = require('../db.js')

class BookController {
    async newBook(req, res) {
        const { title, author, releaseDate, genre, price } = req.body
        try {
            const book = await db.query('insert into Books (title, author, releaseDate, genre, price) values ($1,$2,$3,$4,$5) returning *',
                [title, author, releaseDate, genre, price])
            res.json(book.rows)

        } catch (e) { console.log(e.message) }
    }
    async getBooks(req, res) {
        try {
            const books = await db.query('select * from Books')
            res.json(books.rows)
        } catch (e) { console.log(e.message) }
    }
    async getOneBook(req, res) {
        
        res.json('rabotaet')
    }
    async updateBook(req, res) {
        const { id, title, author, releaseDate, genre, price } = req.body
        const book = await db.query('update Books set title = $2, author = $3, releaseDate = $4, genre = $5, price = $6 where id = $1 RETURNING *',
            [id, title, author, releaseDate, genre, price]);
        res.json(book.rows)
    }
    async deleteBook(req, res) {
        const id = req.params.id
        console.log(id)
        const book = await db.query('delete from Books where id = $1', [id])
        res.json(book.rows)
    }

}

module.exports = new BookController()