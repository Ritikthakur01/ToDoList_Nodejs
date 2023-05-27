//requiring mongoose
const mongoose=require('mongoose');

// making a connection with mongodb
mongoose.connect('mongodb+srv://bhadauriaritik:Ritik2000@cluster0.mu0g0wu.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}); 

//making a connection
const db=mongoose.connection

//handleing error and results
db.on('error',console.error.bind(console,"error found while connecting with mongodb"))

db.once('open',function(){
    console.log("mongodb is successfully connected")
})




