$(function(){
    $(".addCart").on("click",function(){
        var $btn=$(this);
        var $parent=$btn.parent().parent();
        var likeNum=$parent.children(".like")
                        .children("font").html();
        var title=$parent.children(".name").html();
        var price=$parent.children(".price").html();
        //创建商品对象保存数据
        var product={
            likeNum:likeNum,
            title:title,
            price:price
        }
        var pArray=new Array();
        pArray.push(product);
        var pArrStr=JSON.stringify(pArray);
        //将数据存入localStorage
        localStorage.setItem("carts",pArrStr);
        console.log(localStorage.getItem("carts"));
        //跳转到购物车页面
        location.href="shopcart.html";
    })
})