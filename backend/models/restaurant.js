import { Schema, model } from 'mongoose'

const RestaurantSchema = new Schema({
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

const Restaurant = model('Restaurant', RestaurantSchema)
export default RestaurantSchema