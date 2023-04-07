// aquiring express
const express=require("express");
const port=8000;
const app=express();

//aquiring mongoose
const db= require('./config/mongoose')

//set ejs(view engine)
app.set('view engine', 'ejs');
// set ejs path
app.set('views','./views')

//middelwares
//for getting to access of assets.
app.use(express.static("assets"))


//declase a root route
app.get('/',require('./routes'))


// creating server at port 8000
app.listen(port,(err)=>{
    if(err){
        console.log(`error while creating server : ${err}`);
    }
    console.log(`Your server is running successfully at port : 127.0.0.1:${port}`)
})