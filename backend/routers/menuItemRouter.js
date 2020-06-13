const router = require('express').Router()
const menuItem = require('../models/menuItem')

router.get('/', async(req, res) => {
    res.send('menuItem GET. No implementation.')
})

module.exports = router