const express = require("express");
const session = require("express-session");
const router = express.Router();
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const  urlencodedParser = bodyParser.urlencoded({ extended: false })


let account_summaries = require('../models/user_account');
const user = require("../models/user");

let FundHistory = require("../models/fund_history");

router.get('/',(req,res)=>{
 
    account_summaries.find({ username:req.session.username})
    .then(summary =>{
        
      FundHistory.find({username:req.session.username})
      .then(f_history => {
         
        res.render('profile',{
          summary:summary[0],
            f_history: f_history,
            username: req.session.username,
     });
      }).catch(err => {
        console.log(err);
      })
    
    })
    .catch(err =>{
      res.json({success:false, result:err});
    });



});

router.post('/', urlencodedParser, (req,res) =>{
     const username = req.session.username;
     if(req.body.logout_button){
         req.session.destroy();
         res.redirect('user');
     }
 
    
     if(req.body.withdraw_button == 1){
        const withdraw_amount = req.body.withdraw;
       account_summaries.findOne({username:username}).then((result) => {
         result.balance = Number(result.balance) - Number(withdraw_amount);
         

         account_summaries.findOneAndUpdate({username:username}, {balance: result.balance } ).then( () =>
         {
           
          account_summaries.findOne({username:username}).then((result) => {
          const fund_histories = new FundHistory({
            username: username,
            fund_amount: withdraw_amount,
            operation_type: "Withdraw",
            operation_time: new Date(),

          });
          fund_histories.save();
          
             account_summaries.find({ username:req.session.username})
         .then(summary =>{
          FundHistory.find({username:req.session.username})
          .then(f_history => {
             
            res.render('profile',{
              summary:summary[0],
                f_history: f_history,
         });
          }).catch(err => {
            console.log(err);
          })
         
         })
         .catch(err =>{
           res.json({success:false, result:err});
         });
     
         })
     
         
         });
  
   
    
 
   
});
    
 
 
}



if(req.body.deposit_button == 1){
    const deposit_amount = req.body.deposit;
    account_summaries.findOne({username:username}).then((result) => {
      result.balance = Number(result.balance) + Number(deposit_amount);


      account_summaries.findOneAndUpdate({username:username}, {balance: result.balance } ).then( () =>
      {account_summaries.findOne({username:username}).then((result) => {
  
        const fund_histories = new FundHistory({
          username: username,
          fund_amount: deposit_amount,
          operation_type: "Deposit",
          operation_time: new Date(),

        });
        fund_histories.save();
          account_summaries.find({ username:req.session.username})
      .then(summary =>{

        FundHistory.find({username:req.session.username})
        .then(f_history => {
           
          res.render('profile',{
            summary:summary[0],
              f_history: f_history,
       });
        }).catch(err => {
          console.log(err);
        })
          
          
      
      })
      .catch(err =>{
        console.log(err);
        res.json({success:false, result:err});
      });
  
      })
  
      
      });


 


});
 


}


});

module.exports = router;