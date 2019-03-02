$(function(){
    $(".addCart").on("click",function(){
        var $btn=$(this);
        var $parent=$btn.parent().parent();
        var likeNum=$parent.children(".like")
                        .children("font").html();
        var title=$parent.children(".name").html();
        var price=$parent.children(".price").html();
        //创建商品对象保存数据
        var product={
            likeNum:likeNum,
            title:title,
            price:price
        }
        var pArray=new Array();
        pArray.push(product);
        var pArrStr=JSON.stringify(pArray);
        //将数据存入localStorage
        localStorage.setItem("carts",pArrStr);
        console.log(localStorage.getItem("carts"));
        //跳转到购物车页面
        location.href="shopcart.html";
    });
    //异步获取商品列表
    ajax({
        url:"http://127.0.0.1:3000/product/list",
        type:"get",
        dataType:"json"
    }).then((res)=>{
        //console.log(res.data);
        var $ul=$("<ul></ul>");
        for(var i=0;i<res.data.length;i++){
            var html=`<li>
                <a href="#" class="like">
                    <span></span>
                    <font>${res.data[i].attention}</font>
                </a>
                <a href="product_details.html?id=${res.data[i].id}"><img src="${res.data[i].imgUrl}" alt=""></a>
                <p class="name">${res.data[i].title}</p>
                <p class="price">￥${res.data[i].price}</p>
                <div class="add-cart-btn">
                    <a href="javascript:;" class="stars"></a>
                    <a href="javascript:;" class="btn addCart">
                        <span></span>加入购入车
                    </a>
                </div>
            </li>`;
            var $li=$(html);
            $ul.append($li);
        }
        $(".product-list").append($ul);
    });
})