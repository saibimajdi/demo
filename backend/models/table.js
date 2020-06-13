const mongoose = require('mongoose')

const TableSchema = new mongoose.Schema({
    number:{
        type: Number,
        required: false,
        trim: true,      
    },
    place:{
        type: String,
        required: true,
        default: 'indoor',
        validate(value) {
            if(value != undefined && value != 'indoor' && value != 'outdoor')
                throw new Error('place must be indoor or outdoor.');
        }
    },
    size:{
        type: Number,
        required: false,
        default: 4
    }
})

const Table = mongoose.model('Table', TableSchema)
module.exports = Table