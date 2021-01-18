const express = require("express");

const router = express.Router();
const session = require("express-session");

let product_details = require('../models/product_detail.js');


router.get("/:id", (req,res) => {
    console.log(req.params.id);
    const product_id = req.params.id;

    product_details.find({_id:product_id})
    .then(product =>{
  
        
        res.render('detail',{
            product:product,
            username:req.session.username,
        });
    })
    .catch(err => {
        console.log("something happened");
        console.log(err);
        res.json({success:false,result:err})
    })
        

}

);

router.get('/',async(req,res) => {
   
    product_details.find()
    .then(product =>{
        
     
        
        res.render('detail',{
            product:product,
        });
    })
    .catch(err => {
        console.log(err);
        res.json({success:false,result:err})
    })
        
});


module.exports = router;

