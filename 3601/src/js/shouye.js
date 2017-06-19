//客户服务
$('.ke').mouseenter(function(){
	$('.xia').show();
}).mouseleave(function(){
	$('.xia').hide();
});

//轮播菜单栏移入移除事件
$("#xiu>ul>li").mouseenter(function (){
	for(var i in $("#xiu>ul>li")){
		var a = $(this).index();
		$("#xiu>div").hide().eq(a).show();
		$(".sanjiao").show().css({"top":(a*87+35)+"px"});
	}
});
$("#xiu").mouseleave(function (){
	$("#xiu>div").slideUp(200);
	$(".sanjiao").hide();
});

//二级联动事件
$("body").click(function (){
	$(".value1").hide();
	$(".value2").hide();
	$(".value3").hide();
});
$("#sheng").click(function (ev){
	$(".value1").show();
	$(".value2").hide();
	$(".value3").hide();
	ev.stopPropagation();
});
$(".guanbiChengshi").click(function (){
	$(".value1").hide();
});
$("#shi").click(function (ev){
	$(".value2").show();
	$(".value1").hide();
	$(".value3").hide();
	ev.stopPropagation();
});
$(".guanbiQuxian").click(function (){
	$(".value2").hide();
})
$("#qu").on("focus",function (){
	$("#qu").attr("placeholder","");
	$(".value3").show();
	$(".value1").hide();
	$(".value2").hide();
}).on("blur",function (){
	$(".value3").hide();
	$("#qu").attr("placeholder","请输入您的位置查找附近的商家");
});

//店铺筛选
$(".biaozhu>li").click(function (){
	for(var i=0;i<$(".biaozhu>li").length;i++){
		var j = $(this).index();
		if(j<3){
			$(".biaozhu>li").css({"background":"#eee","border-left":"none","border-right":'none'}).eq(j).css({"background":"#fff","border-left":"1px solid #666","border-right":'1px solid #666'});
		}
	}
});

//地图开关
$("#ditu").click(function (){
	$(".yincangtu").show();
});
$(".guanbiDitu").click(function (ev){
	ev.stopPropagation();
	$(".yincangtu").hide();
});

//店铺触发事件
$(".ziliao>dl").mouseenter(function (){
	for(var i=0;i<$(".ziliao>dl").length;i++){
		var a = $(this).index();
		$(".ziliao>dl").eq(a).css("background","#e3e5e5");
		$(".ziliao>dl").eq(a).find($(".jinru")).show();
	}
}).mouseleave(function (){
	for(var i=0;i<$(".ziliao>dl").length;i++){
		var a = $(this).index();
		$(".ziliao>dl").eq(a).css("background","#fff");
		$(".ziliao>dl").eq(a).find($(".jinru")).hide();
	}
});

//分页点击事件
var numYe = 0;
$("#btnT").click(function (){
	numYe--;
	if(numYe<0){
		numYe = 0;
	}
	for(var i=0;i<$(".ziliao").length;i++){
		$(".ziliao").hide().eq(numYe).show();
		$(".fenye>ul>li").css("background","#fff").eq(numYe).css("background","orangered");
	}
	$(document).scrollTop(1350);
});
$("#btnB").click(function (){
	numYe++;
	if(numYe>4){
		numYe = 4;
	}
	for(var i=0;i<$(".ziliao").length;i++){
		$(".ziliao").hide().eq(numYe).show();
		$(".fenye>ul>li").css("background","#fff").eq(numYe).css("background","orangered");
	}
	$(document).scrollTop(1350);
});
$(".fenye>ul>li").click(function (){
	for(var i=0;i<$(".ziliao").length;i++){
		numYe = $(this).index();
		$(".ziliao").hide().eq(numYe).show();
		$(".fenye>ul>li").css("background","#fff").eq(numYe).css("background","orangered");
	}
	$(document).scrollTop(1350);
});


//$.ajax({
//			type:'get',
//			url:'http://172.18.20.24/miaosha.php',
//			async:"true",
//			dataType:"json",
//			success:function(data){
//				var arr=data.product;
//				var uls=document.querySelector("ul");
//				for(var i=0;i<arr.length;i++){
//					var lis=document.createElement("li");
//					lis.innerHTML="<img src="+arr[i].app_mimg+"/><h3>"+arr[i].long_name+"<br/>"+arr[i].number+"<br/></h3>"
//					uls.append(lis);
//				}
//				console.log(data)
////				console.log(data.product.length);
////				console.log(data.product[0].app_mimg);
//			}
//		});

//加盟同城帮
$("#jiameng").click(function (){
	var a = $("body").width();
	var b = $("body").height();
	$(".mengban").css({"width":a+"px","height":b+"px","background":"rgba(0,0,0,0.5)"}).show();
	//alert(a+","+b);
});
$(".guanbiMB").click(function(){
	$(".mengban").hide();
});