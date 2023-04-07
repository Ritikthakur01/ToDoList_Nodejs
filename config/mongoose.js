//requiring mongoose
const mongoose=require('mongoose');

// making a connection with mongodb
mongoose.connect('mongodb://127.0.0.1:27017/To-Do_List_db'); 

//making a connection
const db=mongoose.connection

//handleing error and results
db.on('error',console.error.bind(console,"error found while connecting with mongodb"))

db.once('open',function(){
    console.log("mongodb is successfully connected")
})




