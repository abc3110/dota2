$(function(){
    var storeProducts=localStorage.getItem("carts");
    var productArr=JSON.parse(storeProducts);
    if(productArr==null){
        $(".cart-null").css("display","block");
        console.log($(".cart-null"));   
    }else{
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
                                    <th>
                                        <input type="checkbox">全选
                                    </th>
                                    <th>商品名称</th>
                                    <th>价格</th>
                                    <th>关注</th>
                                    <th>操作</th>
                                <tr>
                                ${str}
                            </thead>
                        </table>
                    </form>
                </div>`;
        var $elem=$(html);
        $(".theme-content").prepend($elem);
    }
    $("a.del").click(function(){
        alert();
        localStorage.removeItem("carts");
    })
})