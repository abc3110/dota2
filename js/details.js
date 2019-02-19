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
})