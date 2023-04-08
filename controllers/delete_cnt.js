const TodoList=require("../index")
module.exports.delete=async function(req,res){
    if(req){
        let id=req.query.id;
        await TodoList.todoList.deleteOne({_id:id})
    }
    return res.redirect("back")
}