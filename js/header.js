$(window).load(function(){
    /*logo栏购物车片段，显示和隐藏 */
    $("a.mycart.top_cart_btn").mouseover(function(){
        var $mycart=$(this);
        $mycart.addClass("on");
        $("div.mycart-list.top_cart_list").css("display","block");
    })
    var n;
    $("a.mycart.top_cart_btn").mouseout(function(){
        var $mycart=$(this);
        n=setTimeout(function(){
            $mycart.removeClass('on');
            $("div.mycart-list.top_cart_list").css("display","none");
        },50);
    })
    $("div.mycart-list.top_cart_list").mouseover(function(){
        clearTimeout(n);
    });
    $("div.mycart-list.top_cart_list").mouseout(function(){
        $mycartlist=$(this);
        $("a.mycart.top_cart_btn").removeClass('on');
        $mycartlist.css("display","none");
    });
    /*导航栏导航单击切换 */
    $("div.wrap_dota2-top-nav>a").click(function(e){
        var $a=$(this)
        var $parent=$a.parent();
        if(!$a.hasClass("on")){
            $parent.find(".on").removeClass("on");
            $a.addClass("on");
        }
    })
    /**左侧浮动提示框的关闭按钮**/
    $(".close").on("click",function(){
        var $btnC=$(this);
        var $parent=$btnC.parent();
        $parent.css("display","none");

    })
})