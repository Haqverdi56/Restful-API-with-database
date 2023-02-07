const {default: mongoose} = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = Schema({
    streetName: String,
    city: String,
    region: String,
    postalCode: Number,
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