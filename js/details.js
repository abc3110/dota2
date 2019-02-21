$(function(){
    $(".shoppingPopus>.close").click(function(){
        var $close=$(this);
        $close.parent().hide();
        $(".addressTo").removeClass("on");
    })
    $(".addressTo").click(function(){
        var $ato=$(this);
        $(".shoppingPopus").show();
        $ato.addClass("on");
    })
    $(".btn_addCart").click(function(){
        var product={
            likeNum:19,
            title:"DOTA2 - 扭蛋手办 II",
            price:69.00
        }
        var pArray=new Array();
        pArray.push(product);
        var pArrayStr=JSON.stringify(pArray);
        localStorage.setItem("carts",pArrayStr);
        open("shopCart.html","_blank");
    })
    $("[data-toggle=tab]").click(function(){
        var $li=$(this);
        $("[data-toggle=tab]").removeClass("curr");
        $li.addClass("curr");
        $(".desc-pane>div").css("display","none");
        var id=$li.attr("data-target");
        $(id).css("display","block");
    })
})