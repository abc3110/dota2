const express=require("express");
const productRouter=require("./router/product.js");
//创建服务器
var app=express();
express.listen(3000);
//静态资源扩展
express.use(express.static("public"));
express.use("/product",prdocutRouter);
