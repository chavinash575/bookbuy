const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({
    email:{
        type: String
    },
    password:{
        type: String
    }
})
const users = mongoose.model('users', Userschema);
module.exports = users;