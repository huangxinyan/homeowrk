$(".data-list>li:gt(6):not(:last)").hide();
$(".search>li").hide();
var flag = true;
//为“更多”按钮添加一个点击事件
$(".more").click(function(){
	if(flag){
		$(".data-list>li").show();
		$(".search>li").show();
		$(".more").html("隐藏");
		flag = false;
	}else{
		$(".data-list>li:gt(6):not(:last)").hide();
        $(".search>li").hide();
        $(".more").html("更多");
        flag = true;
	}
});

//给品牌列表的第二个开始的li添加点击事件
var $listLi = $(".search>li[class!=on]");
var length = $listLi.length;
//console.log($(".data-list>li>a[brand=A]"));
for(var i=0;i<length;i++){
	//$(".search>li[class!=on]:eq('"+i+"')")：表示除第一个li的其他li
	//为每一个点击的li添加一个索引属性：属性值为li的内容值
    $listLi[i].index = $(".search>li[class!=on]:eq('"+i+"')").html();
	//用变量接收后，只能用onclick事件
	/*$listLi[i].onclick = function(){
		$(".data-list>li>a[brand!="+this.index+"]").hide();
		$(".data-list>li>a[brand="+this.index+"]").show();
	};*/
	//直接写的话就可以用click事件
	$(".search>li[class!=on]:eq('"+i+"')").click(function(){
		$(".data-list>li>a[brand!="+this.index+"]").hide();
		$(".data-list>li>a[brand="+this.index+"]").show();
	});	
}

$(".on").click(function(){
	$(".data-list>li>a").show();
});
