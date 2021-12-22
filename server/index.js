require('dotenv').config();
const express = require('express')
const cors = require('cors');
const bookRouter = require('./routes/booksRouter.js');
const { restart } = require('nodemon');
const PORT = process.env.PORT || 5042

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api', bookRouter)

const start = async () => {
    try {
        app.listen(5042, () => console.log(`Сервер запущен на порту 5042`))
    } catch (e) {
        console.log(e);
    }
}

start();
