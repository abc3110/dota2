const express=require("express");
const pool=require("../pool.js");
var router=express.Router();
//1.获取商品列表
router.use("/getProductList",(req,res)=>{
	res.send("服务器成功");
});
module.exports=router;