const router = require('express').Router()
const tableModel = require('../models/table')

router.get('/', async(req, res) => {
    console.log('tableRouter-GET')
    const tables = await tableModel.find({});

    try{
        res.send(tables)
    }catch(err){
        res.status(500).send(err)
    }
})

router.post('/', async (req, res) => {
    console.log('tableRouter-POST')

    console.log('req.body')
    console.log(req.body)

    const table = new tableModel(req.body)
    console.log('table')
    console.log(table)

    try {
      await table.save()
      res.send(table)
    } catch (err) {
      res.status(500).send(err)
    }
  })

  module.exports = router