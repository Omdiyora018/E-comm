const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const db =  mongoose.connect("mongodb://127.0.0.1:27017/std",(err)=>{
    if(!err){
        console.log("DB Connected...");
    }else{
        console.log("DB Not Connected...");
    }
})

module.exports = db

