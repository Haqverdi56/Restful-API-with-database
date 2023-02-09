const {default: mongoose} = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = Schema({
    productName: String,
    productPrice: Number,
    productDescription: String,
    buyerId: {
        type: 'ObjectId',
        ref: 'buyer'
    },
    categoryId: {
        type: 'ObjectId',
        ref: 'category'
    },
    isDeleted: {type: Boolean, default: false},
    date: {
        type: Date,
        default: Date()
    }
})

const MOrders = mongoose.model('orders', OrdersSchema)

module.exports = {
    MOrders
}