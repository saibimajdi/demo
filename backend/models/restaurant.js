const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    name:{
        required: true,
        type: String,
    },
    address: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        required: true
    },
    url: {
        required: false,
        type:String
    }
})

const Restaurant = mongoose.model('Restaurant', RestaurantSchema)
module.exports = Restaurant