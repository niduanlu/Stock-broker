const localStrategy = require('password-local').Strategy;

const User = require('../models/user');
const config = require('../config/database');
const bycrypt = require('bycryptjs');
const passport = require('passport');


module.exports = (passport) => {
    passport.use(new localStrategy((username,password,done)=>{
        let query = {username:username};
        User.findOne(query,(err,user) =>{
            if(err) throw err;
            if(!user){
                return done(null,false,{message:'no user found'});
            }

             bycrypt.compare(password, user.password, (err,isMatch) =>{
                 if(err) throw err;

                 if(isMatch){
                   return done(null,user);
                 }else{
                      return done(null,false, {message:'Wrong password'});
                 }
             });



        });

        passport.serializeUser((user, done) => {
            done(null,user.id);
        });

        passport.deserializeUser((id,done) => {
            User.findById(id, (err,user) =>{
                done(err,user);
            });
        });

    }))


}
    
