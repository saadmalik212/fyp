const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    password: {
        type: "String",
        required: true,
    },
    phone_Number: {
        type: Number,
        required: true,
    },
    Year_of_experience: {
        type: Number,
        required: true,
    },
    physical_shop_address:{
        type:String,
        required:true,
    },
        physical_shop_address:{
        type:String,
        required:true,
    },
    billing_address:{
        type:String,
        required:true,
    },
    Specializations:{
        type:String,
        required:true,
    },
    operating_hours:{
        type:String,
        required:true,
    },
    stitching_price:{
        type:String,
        required:true,
    },
    
    double_price:{
        type:String,
        required:true,
    },
    Specializations:{
        type:String,
        required:true,
    },
    payment_method:{
        type:String,
        required:true,
    },





})

module.exports = mongoose.model('mbs_users', userSchema)