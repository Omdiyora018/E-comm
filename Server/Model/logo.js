const mongoose=require("mongoose")
const logoSchema= new mongoose.Schema({
    logoname:{
        type:String,
        trim:true,

    },
    price:{
        type:Number,
    },
description:{
        type:String,
},

    images:{
         type:Array,
    }
}
)
const logo=new mongoose.model('logo',logoSchema)
module.exports=logo;