const db= require('./db');
const mongoose= require('mongoose');

const {Schema}= mongoose;

const userSchema= new Schema({
    name:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        
    },
    password:{
        type: String,
        required: true
    },
    // gender:{
    //     type: String,
    //     enum: ["male"||"female"],
    //     required: true
    // },
    age:{
        type: Number,
        required: true
    }
});

const UserModel= mongoose.model('user', userSchema);

module.exports= UserModel;