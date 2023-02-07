const {default: mongoose} = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = Schema({
    categoryName: String,
    categoryDescription: Number,
    isDeleted: {type: Boolean, default: false},
    date: {
        type: Date,
        default: Date()
    }
})

const MCategory = mongoose.model('category', CategorySchema)

module.exports = {
    MCategory
}