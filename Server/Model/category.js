const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        require: true,
        trim: true,
    },
    images: {
        type: Array,
        require: true,
    }
})

const userModel = mongoose.model('category', categorySchema);//table name

module.exports = userModel

