const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const PORT = process.env.PORT
const DB_URI = process.env.dbURI
const app = express()
const mongoDB = DB_URI
app.use(cors())

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send({data: 'Hello from the NodeJS server.'})
});

app.get('/items', (req, res) => {
    let items = [
        {id: 0, title: "Item #1", text: "This is item number 1"},
        {id: 1, title: "Item #2", text: "This is item number 2"},
        {id: 2, title: "Item #3", text: "This is item number 3"}
    ]
    res.send(items)
})

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`Demo app listening at http://localhost:${PORT}`)
})