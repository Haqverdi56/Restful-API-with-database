const { default: mongoose } = require("mongoose")
const { Schema } = mongoose

const UserSchema = Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isDeleted: Boolean,
    date: {
        type: Date,
        default: Date()
    }
})

const MUser = mongoose.model('user', UserSchema)

module.exports = {
    MUser
}