const express= require('express');
const body_parser= require('body-parser');
const modell= require('./user_model');
const db= require('./db');
const userRouter= require('./routes/user_routes');
const cors= require('cors');

const PORT= 3000;
const app= express();
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:false}));
app.use(cors());
  
var jsonparser= body_parser.json();
app.use(express.json());
app.listen(PORT, ()=>{
    console.log(`App Listning at ${PORT}`);
})
db();
app.get('/', (req, res)=>{
    res.send('Hello FlutNode');
});
app.get('/users', (req, res)=>{
    modell.find().then((result)=>{
        var p= result;
        console.log(p[0]['name']);
        res.send(result);
    }).catch((err)=>{
        console.log(err);
    })
});
app.use('/', userRouter);
