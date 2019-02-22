$(function(){
    showCartProduct();
    function showCartProduct(){
        //获取localStorage
        var storeProducts=localStorage.getItem("carts");
        var productArr=JSON.parse(storeProducts);
        //判断是否有值
        if(productArr==null){                           //本地存储为空显示：空空如也
            var $elem=$(".cart-list");
            if($elem){
                $elem.remove();
            }
            $(".cart-null").css("display","block");
            console.log($(".cart-null"));   
        }else{                                          //本地存储不为空，创建购物车表
            $(".cart-null").css("display","none");                               
            var str="";
            for(var item of productArr){
                str+=`<tr>
                    <td><input type="checkbox"></td>
                    <td>${item.title}</td>
                    <td>${item.price}</td>
                    <td>${item.likeNum}</td>
                    <td><a href="javascript:;" class="del"></a></td>
                </tr>`
            }
            var html=`<div class="cart-list">
                        <form>
                            <table>
                                <thead>
                                    <tr>
                                        <td>
                                            <input type="checkbox">全选
                                        </td>
                                        <td>商品名称</th>
                                        <td>价格</th>
                                        <td>关注</th>
                                        <td>操作</th>
                                    <tr>
                                    ${str}
                                </thead>
                            </table>
                        </form>
                    </div>`;
            var $elem=$(html);
            $(".theme-content").prepend($elem);
        }
    }
    //删除按钮单击事件：
    $("a.del").click(function(){
        localStorage.removeItem("carts");
        showCartProduct();
    })
    //window.onstorage
    window.onstorage=function(){
        showCartProduct();
    }
})