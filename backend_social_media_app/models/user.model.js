const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstname : String,
    lastname: String,
    password: String,
    email: String,

    role: {
        type:String,
        enum: ['admin','user'],
        default: 'user'
    },

    bio: String,
    picture: String,
    birthday: Date

})


module.exports = mongoose.model('users',userSchema)