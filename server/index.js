require('dotenv').config();
const express = require('express')
const cors = require('cors');
const bookRouter = require('./routes/booksRouter.js');
const { restart } = require('nodemon');
const PORT = process.env.PORT || 5000

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api', bookRouter)

const start = async () => {
    try {
        app.listen(5000, () => console.log(`Сервер запущен на порту ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}

let retries = 5;

while(retries){
    try{
        start()
        break;
    }catch(err){
        console.log(err);
        retries-=1;
        console.log(`retirs left: ${retries}`);
        async () => await new Promise(res => setTimeout(res,5000))
    }
}

