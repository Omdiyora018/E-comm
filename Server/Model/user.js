const mongoose = require('mongoose');

const stdSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    address: String,
    phone: Number,
    isadmin:{
        type:String,
        default:false
    }
    // lastname: String,
    // state: String,
    // city: String,
    // pincode: Number,
  
    // gender: String,
    // age: Number,
   
});

const userModel = new mongoose.model('krushil', stdSchema);

module.exports = userModel
