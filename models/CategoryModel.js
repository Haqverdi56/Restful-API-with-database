const {default: mongoose} = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = Schema({
    categoryName: String,
    categoryDescription: Number
})

const MCategory = mongoose.model('buyer', CategorySchema)

module.exports = {
    MCategory
}