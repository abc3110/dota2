$(function(){
    $(".addCart").on("click",function(){
        var $btn=$(this);
        var $parent=$btn.parent().parent();
        var likeNum=$parent.children(".like")
                        .children("font").html();
        var title=$parent.children(".name").html();
        var price=$parent.children(".price").html();
        var product={
            likeNum:likeNum,
            title:title,
            price:price
        }
        var pArray=new Array();
        pArray.push(product);
        var pArrStr=JSON.stringify(pArray);
        alert(pArrStr);
        localStorage.setItem("carts",pArray);
        console.log(localStorage.getItem("carts"));
    })
})