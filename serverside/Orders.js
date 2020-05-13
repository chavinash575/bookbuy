const mongoose = require('mongoose')

const orderschema = new mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    city:{
        type: String
    },
    street:{
        type: String
    },
    zipcode:{
        type: String
    },
    username:{
        type: String
    }
})
const orders = mongoose.model('orders', orderschema);
module.exports = orders;