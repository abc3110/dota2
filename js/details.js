$(function(){
    getProductInfo();
    getProductPic();
    //获取商品信息
    function getProductInfo(){
        var qs=location.href.split("?")[1];
        var id=qs.split("=")[1];
        $.ajax({
            method:"get",
            url:"http://127.0.0.1:3000/product/detail",
            data:{id},
            success:function(res){
                console.log(res);
                $(".commodity-infor>.com-item>h1").html(res.data[0].title);
                $(".commodity-infor>.com-item>.subtitle").html(res.data[0].subtitle);
                $(".commodity-infor>.com-item>.price>span").html(res.data[0].price.toFixed(2));
                $(".commodity-infor>.com-img>.like>font").text(res.data[0].attention);
            }
        }) 
    } 
    //获取商品图片
    function getProductPic(){
        var qs=location.href.split("?")[1];
        var id=qs.split("=")[1];
        $.ajax({
            method:"get",
            url:"http://127.0.0.1:3000/product/pic",
            data:{id},
            success:function(res){
                console.log(res);
                var $ul=$(".bg-img>ul");
                var $sul=$(".sm-img>ul");
                var $p=$(".comm-intro>p");
                for(var i=0;i<res.data.length;i++){
                    if(res.data[i].md!=null){
                        var $bg=$(`<li><img src="${res.data[i].md}"></li>`);
                        var $sm=$(`<li><img src="${res.data[i].sm}"></li>`);
                        $bg.appendTo($ul);
                        $sm.appendTo($sul);
                    }if(res.data[i].intro!=null){
                        var $intro=$(`<img src="${res.data[i].intro}" title="intro0${i}.jpg" alt="0${i}.jpg">`);
                        $intro.appendTo($p);
                    }
                }
                   
            }
        }) 
    } 
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