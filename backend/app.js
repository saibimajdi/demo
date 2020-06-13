const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const tableModel = require('./models/table').default
const cors = require('cors')
dotenv.config()

const PORT = process.env.PORT
const DB_URI = process.env.dbURI
const app = express()
const mongoDB = DB_URI
app.use(cors())

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(client =>  {
            console.log('connected to the database...');
        });

let db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => {
    console.log(`Demo app listening at http://localhost:${PORT}`)
})

app.get('/table', async(req, res) => {
    const tables = await tableModel.find({});

    try{
        res.send(tables)
    }catch(err){
        res.status(500).send(err)
    }
})

app.post('/table', async (req, res) => {
    const table = new tableModel(req.body)
    console.log(req.body);
    try {
      await table.save()
      res.send(table)
    } catch (err) {
      res.status(500).send(err)
    }
  })


app.get('/', (req, res) => {
    res.send({data: 'Hello from the NodeJS server.'})
})

app.get('/items', (req, res) => {
    let items = [
        {id: 0, title: "Item #1", text: "This is item number 1"},
        {id: 1, title: "Item #2", text: "This is item number 2"},
        {id: 2, title: "Item #3", text: "This is item number 3"}
    ]
    res.send(items)
})
