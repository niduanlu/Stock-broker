const express = require("express");
const session = require("express-session");
const router = express.Router();
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');
const  urlencodedParser = bodyParser.urlencoded({ extended: false })



const bcrypt = require('bcryptjs');


let User = require('../models/user');
const { Mongoose } = require("mongoose");

let Account_Summary = require('../models/user_account');

router.get('/', (req, res) => {
   res.render('user');

});


router.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));



router.post('/', urlencodedParser, (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    if(req.body.login == 1){
        console.log("this is login");
         User.find({username: req.body.username})
         .exec()
         .then(user => {
             if(user.length < 1 ){
                 // then we got no users 
                 return res.status(404).json({
                     message : "username not found",
                 });

              } // this is the if 
                bcrypt.compare(req.body.password,user[0].password, (err,result) =>{
                    if(err){

                        return res.status(404).json({
                            message : 'wrong password',
                        });
                    }
                    console.log("the result is " + result + ".....");
                    if(result){
                        // console.log("password ok inside");
                        // return res.status(200).json({
                        //    message  : "Authentication good",
                        // });
                        // res.send(res.session);
                        //req.session.username = username;
                        req.session.username = username;
                        res.redirect('profile');
                    }
                      
                });


         })

    }
    if(req.body.signup == 1){
        console.log("this is signup ");
        
    console.log("the user name is :" + req.body.username);
  
   const phone = req.body.phone;
   const email = req.body.email;


       bcrypt.hash(req.body.password,10, (err,hash) => {
           if(err){
               return res.status(500).json({
                   error:err
               });
           }else{
               const user = new User({
                 username: username,
                 password:hash,
                 phone:phone,
                 email:email,
               });
               const account_summary = new Account_Summary({
                   username: username,
                   balance : 0,
                   portfolio_balance : 0,
               });
               user.save()
              
               .then(result => {
                   // res.status(201).json({
                   //           message : 'User created',
                   // });
                   account_summary.save();
                   req.session.username = username;
                   res.redirect('profile');
               })
               .catch(err => {
                     console.log(err);
                     res.status.json({
                       error:err
                     });
               });
           }
       })
    }

    


      
   
     



});



module.exports = router;