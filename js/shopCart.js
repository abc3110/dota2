$(function(){
    var storeProducts=localStorage.getItem("carts");
    console.log(storeProducts)
    var productArr=JSON.stringify(storeProducts);
    if(productArr==null){
        $(".cart-null").css("display","block");
        console.log(cartNull);   
    }else{
        var $elem=$("<div style='font-size:30px'>我是购物车</div>");
        $(".theme-content").prepend($elem);
    }
})