

let mongoose = require('mongoose');


let productDetailSchema = mongoose.Schema({
     name : String,
     code: String,
        
     value:   Number,
     change : Number,
       
     change_range : Number,
        
     closed :String,
      exchange: String,
        sector : String,
         indudstry :String,
        todays  :Number,
      average_volume: Number,
        previous_close :Number,
       market_cap: Number,
        annualized_devidend: Number,
         current_yield:Number,
        earning_per_share: Number,
         
     

});
const detail = [{name:'Apple Inc.',code:'AAPL',value:1136,change:-3.34, change_range:2.87, closed: 'Oct. 6, 7:59 p.m. EDT',exchange:'Exchange',sector:'Techology',indudstry:'Computer Software',todays:'$210',average_volume:33788715,previous_close:210.38,market_cap:1558255415846,annualized_devidend:2.24,current_yield:0.99,earning_per_share:5.75}];
let product_detail = module.exports = mongoose.model('product_detail', productDetailSchema);

 

