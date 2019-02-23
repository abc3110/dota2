$(window).load(function(){
    /** 初始化购物车数量 **/
    function initCartNum(){
        var carts=localStorage.getItem("carts");
        var proArray=JSON.parse(carts);
        var proNum;
        if(proArray==null || proArray.length==0){
            proNum=0;
            $(".mycart-list").html("<p class='default'>购物车里暂无商品</p>");
        }else{
            proNum=proArray.length;
            var html=`<div class="product-list">
                        <ul>
                            <li data-pid="1">
                                <img src="img/index/header/pro01.jpg" alt="">
                                <span class="pname">DOTA2 - 扭蛋手办 IIDOTA2 - 扭蛋手办 II</span>
                                <span class="price">69.00 × 1</span>
                                <a href="product_details.html" class="link" targe="_blank"></a>
                            </li>
                            <li>
                                <img src="img/index/header/pro01.jpg" alt="">
                                <span class="pname">DOTA2 - 扭蛋手办 II</span>
                                <span class="price">69.00 × 1</span>
                                <a href="product_details.html" class="link" targe="_blank"></a>
                            </li>
                        </ul>
                    </div>`;
        }
        $(".cartNum").html(proNum);
    }
    initCartNum();
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