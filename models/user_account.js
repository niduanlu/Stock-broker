const mongoose = require('mongoose');


const AccountSchema = mongoose.Schema({
    username :{
        type:String,
    },
    balance :{
        type:Number,
    },
    portfolio_balance: {
        type:Number,
    }
})

const Account_Summary = module.exports = mongoose.model('Account_Summary',AccountSchema);