import { Schema, model } from 'mongoose'

const MenuItemSchema = new Schema({
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