const express = require('express');
const session = require('express-session');
const router = express.Router();
let product_details = require('../models/product_detail');

router.get('/',(req,res) => {
    product_details.find()
    .then(product => {
        console.log(product);
        res.render('stock',
        {product:product,
         username:req.session.username,
     });
 
    })
    .catch(err => {
       res.json({success:false, result: err});
    });
 });
 

 module.exports = router;