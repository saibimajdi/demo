const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const PORT = process.env.PORT
const DB_URI = process.env.dbURI
const app = express()
const mongoDB = DB_URI

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });


let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('/ root');
});

app.get('/users', (req, res) => {
    res.send(users);
});

app.listen(PORT, () => {
    console.log(`Demo app listening at http://localhost:${PORT}`)
})