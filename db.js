// // const mongooes= require('mongoose')
// import mongoose from "mongoose";

// const connection= async ()=>{
//     // const URL=`mongodb+srv://Mrunal:Mrunal@cluster0.i0uy7fi.mongodb.net/?retryWrites=true&w=majority&ssl=true`;
//     const URL= `mongodb://Mrunal:Mrunal@ac-dtrpiym-shard-00-00.i0uy7fi.mongodb.net:27017,ac-dtrpiym-shard-00-01.i0uy7fi.mongodb.net:27017,ac-dtrpiym-shard-00-02.i0uy7fi.mongodb.net:27017/?ssl=true&replicaSet=atlas-w4o7ra-shard-0&authSource=admin&retryWrites=true&w=majority`;
//     try{
//        await mongoose.connect(URL, {useNewUrlParser: true,
//         useUnifiedTopology: true});
//        console.log("Database Connect sucessufully");
//     }
//     catch(error){
//         console.log("Got error while connectting to database", error);
//     }
// }

// export default connection;


const mongoose= require('mongoose')

const connection= async ()=>{
    const URL = `mongodb+srv://Mrunal:Mrunal@cluster0.5fk385z.mongodb.net/?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL, {useNewUrlParser: true,
                     useUnifiedTopology: true});
        console.log("Database Connected");
        
    }
    catch(err){
        console.log("Its an error", err);
    }
}

module.exports= connection;