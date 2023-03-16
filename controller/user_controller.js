// const userService = require('../services/user_services');
const bcrypt= require('bcryptjs');
const jwt= require('jsonwebtoken');
const UserService = require('../services/user_services');

const register= async(req, res)=>{
    console.log('YEPPPP');
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }

        let user= new user({
            email: req.body.email,
            password: hashedPass
        })
        user.save().then(user=>{
            res.json({
                message:'Successfully Registered'
            })
        }).catch(error=>{
            res.json({
                message:"Error"
            })
        })
    })

    
}

module.exports= register;


// exports.register = async(req, res, next)=>{
//     try{
//         const {email, password}= req.body;

//         const sucessRes= await UserService.registerUser(email, password);
//         res.json({status:'sucess', message:'done'});
//     }
//     catch(err){
//         throw err
//     }
// }

// module.exports= register;