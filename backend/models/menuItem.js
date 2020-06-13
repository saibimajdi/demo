const mongoose = require('mongoose')

const MenuItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true, get: getPrice, set: setPrice },
    description: {type: String, required: true }
})

function getPrice(num){
    return (num/100).toFixed(2);
}

function setPrice(num){
    return num*100;
}

const MenuItem = mongoose.model('MenuItem', MenuItemSchema)
module.exports = MenuItem