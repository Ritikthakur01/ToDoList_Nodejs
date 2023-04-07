const express=require('express');
const router= express.Router();
const home_cnt=require('../controllers/home_cnt')

router.get('/',home_cnt.home)


module.exports=router;