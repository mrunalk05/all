const router= require('express').Router();
const User= require('../user_model');
const bodyParser= require('body-parser');
const express= require('express')
const app= express();
var jsonparser= bodyParser.json();
// const userController= require('../controller/user_controller');

router.post('/register', jsonparser, function(req, res){
    console.log(req.body.email);
    console.log(req.body.password);
    console.log("pppp");
    const user= User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        // gender: req.body.gender,
        age: req.body.age
    })
    user.save().then(user=>{
        console.log(user)
        res.json({
            message:'Successfully Registered'
        })
    }).catch(error=>{
        // res.json({
        //     message:"Error",
            
        // })
        res.send(error)
    })
})
module.exports = router;

