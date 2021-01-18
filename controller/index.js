const express = require("express");
const router = express.Router();
const session = require("express-session");

router.get('/', (req,res) => {
    res.render('index',
    {username:req.session.username});
});

module.exports = router;