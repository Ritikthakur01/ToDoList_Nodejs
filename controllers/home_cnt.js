const TodoList=require("../index")

module.exports.home=async function(req,res){
    const To_do_list=await TodoList.todoList.find({})
    return res.render('home',{todolist:To_do_list})
}