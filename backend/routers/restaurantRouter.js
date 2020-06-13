const router = require('express').Router()
const restaurant = require('../models/restaurant')

router.get('/', async(req, res) => {
    res.send('restaurant GET. No implementation.')
})

module.exports = router