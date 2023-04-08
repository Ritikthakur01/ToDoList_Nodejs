const mongoose=require('mongoose');

const todoSchema=new mongoose.Schema({
    desc:{
        type:String,
        required:true
    },
    category:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        required:true
    },
    iscomplete:{
        type:Boolean,
        default:false
    }
});

const TodoList=mongoose.model('TodoList',todoSchema);

module.exports=TodoList;