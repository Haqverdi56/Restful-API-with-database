const {default: mongoose} = require('mongoose');
const { Schema } = mongoose;

const AddressSchema = Schema({
    streetName: String,
    city: String,
    region: String,
    postalCode: Number
})

const MAddress = mongoose.model('buyer', AddressSchema)

module.exports = {
    MAddress
}