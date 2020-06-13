const router = require('express').Router()
const table = require('../models/table')

router.get('/', async(req, res) => {
    console.log('tableRouter-GET')
    const tables = await table.find({});

    try{
        res.send(tables)
    }catch(err){
        res.status(500).send(err)
    }
})

router.post('/', async (req, res) => {
    console.log('tableRouter-POST')
    const table = new tableModel(req.body)
    try {
      await table.save()
      res.send(table)
    } catch (err) {
      res.status(500).send(err)
    }
  })

  module.exports = router