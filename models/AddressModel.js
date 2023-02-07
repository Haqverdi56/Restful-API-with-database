const {default: mongoose} = require('mongoose');
const { Schema } = mongoose;

const AddressSchema = Schema({
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

const MAddress = mongoose.model('address', AddressSchema)

module.exports = {
    MAddress
}