function ajax({url,type,data,dataType}){
	return new Promise(function(open,err){
		//创建对象
		var xhr=new XMLHttpRequest();
		//绑定事件监听
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
		
				//数据要求是json对象时
				if(dataType!==undefined 
						&&dataType.toLowerCase()==="json"){
					var res=JSON.parse(xhr.responseText); 
				}
				else{
					var res=xhr.responseText;
				}
				open(res);
			}	
		}
		if(type.toLowerCase()=="get"&&data!=undefined){
			url+="?"+data;
		}
		//打开链接
		xhr.open(type,url,true);
		if(type.toLowerCase()==="post"){
			//增加：设置请求头
			xhr.setRequestHead("Content-Type","applciation/x-www-form-urlencoded");
		}
		//发送请求
		if(type.toLowerCase()=="post"&&data!=undefined)
			xhr.send(data);
		else	
			xhr.send(null);
	})
}