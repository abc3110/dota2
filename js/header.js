$(window).load(function(){
    /*logo栏购物车片段，显示和隐藏 */
    $("a.mycart.top_cart_btn").mouseenter(function(){
        var $mycart=$(this);
        $mycart.addClass("on");
        $("div.mycart-list.top_cart_list").css("display","block");
    })
    var n;
    $("a.mycart.top_cart_btn").mouseleave(function(){
        var $mycart=$(this);
        n=setTimeout(function(){
            $mycart.removeClass('on');
            $("div.mycart-list.top_cart_list").css("display","none");
        },100);
    })
    $("div.mycart-list.top_cart_list").mouseenter(function(){
        clearTimeout(n);
    });
    $("div.mycart-list.top_cart_list").mouseleave(function(){
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
    /** 我的购物车内容显示 **/
    var carts=localStorage.getItem("carts");
    if(carts!=null){
        var pArray=JSON.parse(carts);
        //var html=`<div>${pArray[0].title}</div>`;
        //var $div=$(html);
        //$div.replaceAll($(".top_cart_list>p"));
    }
})