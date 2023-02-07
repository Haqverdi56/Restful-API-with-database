const {default: mongoose} = require('mongoose');
const { Schema } = mongoose;

const OrdersSchema = Schema({
    streetName: String,
    city: String,
    region: String,
    postalCode: Number
})

const MOrders = mongoose.model('buyer', OrdersSchema)

module.exports = {
    MOrders
}