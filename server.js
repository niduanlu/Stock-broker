
const express = require('express');

const ejs = require('ejs');
const mongoose = require('mongoose');
const session = require("express-session");

const app = express();
const path = require('path');
// this generates a expression object called app 

const router = express.Router();
const config = require('./config/database');
// const passport = require('./config/passport');


mongoose.connect(config.database,{useNewUrlParser:true,useUnifiedTopology:true});
let connection = mongoose.connection;


const port = 3000;

 //C:\Program Files\MongoDB\Server\4.4\data\
connection.once('open', () => {console.log("connecting to database now...")
connection.db.collection("product_details", (err, collection) => {

    collection.find({}).toArray((err,data) => {
        console.log(data[0].name);
    })
});

});

connection.on('error',(err) => {if(err){console.log(err)}});
// check on db error, check connection 


app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));



let User = require('./models/user');
 


let stock = require('./controller/stock');
 
app.use('/stock',stock);
console.log("here");

let user = require('./controller/user');
app.use('/user', user );

let detail = require('./controller/detail');
const database = require('./config/database');
app.use('/detail', detail);

let profile = require('./controller/profile');
app.use('/profile',profile);

app.use(express.static('public'));
app.use('/css',express.static(__dirname + './public/css'));
app.use('/js',express.static(__dirname + './public/js'));
app.use('/images',express.static(__dirname + './public/images'));
app.set('/views', path.join(__dirname + 'views'));
app.set('view engine','ejs');
// I tried pug but I did not like it , bascially works as python django template 

let index = require('./controller/index');
app.use('/',index);

app.use('/',router); // this set all slashes as routers 

 




app.listen(port || process.env.PORT, ()=> console.log(`app on port 127.0.0.1:${port}`));
