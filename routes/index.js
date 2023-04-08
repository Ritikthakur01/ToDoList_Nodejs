const express=require('express');
const router= express.Router();
const home_cnt=require('../controllers/home_cnt')
const delete_cnt=require("../controllers/delete_cnt")
const add_todo_cnt=require("../controllers/add_todo_cnt")

router.get("/",home_cnt.home)

router.post("/add_todo",add_todo_cnt.add_todo)

router.get("/delete",delete_cnt.delete)

module.exports=router;