(function(){
    //获取5个英雄盒子
    var $zeros=$("div.zero-link").children();
    var $roleImg=$("div.role-img");
    //鼠标移入事件：
    $zeros.mouseover(function(){
        //1.切换自身背景图片
        var $zero=$(this);
        var h=$zero.css("height");
        $zero.css("background-position","0 -"+h);
        //2.切换角色图片
        var value=$zero.attr("data-role");
        $("img[data-role-img='"+value+"']").toggle();
        $("img[data-role-img='default']").toggle(); 
    })
    //鼠标移出事件
    $zeros.mouseout(function(){
        //1.恢复自身背景图片
        var $zero=$(this);
        var h=$zero.css("height");
        $zero.css("background-position","0 0");
        //2.切换角色图片
        var value=$zero.attr("data-role");
        $("img[data-role-img='"+value+"']").css("display","none");
        $("img[data-role-img='default']").css("display","inline");
    })
})()