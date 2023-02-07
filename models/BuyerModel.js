const {default: mongoose} = require('mongoose');
const { MAddress } = require('./AddressModel');
const { Schema } = mongoose;

const BuyerSchema = Schema({
    buyerName: String,
    phoneNumber: Number,
    buyerAddress: MAddress,
    isDeleted: {type: Boolean, default: false},
    date: {
        type: Date,
        default: Date()
    }
})

const MBuyer = mongoose.model('buyer', BuyerSchema)

module.exports = {
    MBuyer
}