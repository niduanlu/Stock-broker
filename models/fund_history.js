

const mongoose = require("mongoose");



const fundSchema = mongoose.Schema({
        username :{
            type: String,
            require : true 
        },
        fund_amount : {
            type: Number,
            require: true
        },
        operation_type:{
            type: String,
            require: true 
        } ,
        operation_time:{
            type:String,
            require: true
        },

    })

FundHistory = module.exports = mongoose.model("FundHistory",fundSchema);





