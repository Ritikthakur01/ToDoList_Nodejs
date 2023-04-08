const TodoList=require('../index')
// const TodoList=require("../models/TodoList")
try{
    module.exports.add_todo= async function(req,res){
        if(req){
                await TodoList.todoList.create({
                    desc:req.body.description,
                    category:req.body.category,
                    date:req.body.date,
                    iscomplete:req.body.iscomplete
                })
        }

        return res.redirect('back');
    } 
}
catch(err){
    console.log(err)
}

