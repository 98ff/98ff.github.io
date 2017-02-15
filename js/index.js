//规定好每张图片处于的位置
var states = [
				{zIndex:1,width:120,height:150,top:69,left:134,ZOpcity:0.2,},
				{zIndex:2,width:130,height:170,top:59,left:0,ZOpcity:0.5,},
				{zIndex:3,width:170,height:218,top:35,left:110,ZOpcity:0.7,},
				{zIndex:4,width:224,height:288,top:0,left:263,ZOpcity:1,},
				{zIndex:3,width:170,height:218,top:35,left:470,ZOpcity:0.7,},
				{zIndex:2,width:130,height:170,top:59,left:620,ZOpcity:0.5,},
				{zIndex:1,width:120,height:150,top:69,left:498,ZOpcity:0.2,}
];
var lis = $('#box li');

//让每个li对应上面 states的每个状态
function move(){
	
	lis.each(function(index,ele){
		var state = states[index];
		$(ele).css('z-index',state.zIndex).finish().animate(state,1000).find('img').css('opacity',state.ZOpcity);
		
	});
}
function next(){
	states.unshift(states.pop());
	move();
}
function pre(){
	states.push(states.shift());
	move();
}
$('#box .next').click(function(){
	next();
});
$('#box .pre').click(function(){
	pre();
});
var timer = setInterval(next,3000);
//让li从正中间展开
//$('#box li').add('#box .pre').add('#box .next')  合并集合 等同于
$('#box li,#box .pre,#box .next').hover(function(){
	clearInterval(timer);
},function(){
	timer = setInterval(next,3000);
});
move();

//中午遗留问题:想一想轮播图能封装成插件吗?会产生什么问题?
//1.插件中最好不要使用id来最为选择器,插件能重复使用,也就是说在同一页面中可能多次使用,造成冲突
//2.变量的命名和方法命名:用户在使用插件的时候,可能还会引入自己创建的js,也有这样的命名,那么会冲突.
//解决方法:将封装在一个方法里面,形成一个闭包
//3.标签class的值问题,太大众化,会产生冲突

//4.标签固定,如果把index.html中的ul>li换成div>div,就会找不到

//5.插件文件名问题:index.js,index.css,如果别人也有这样命名的文件,就会冲突

//6.这里只能播放7张图片,如果是只有8张图片或者少一个就会出现问题
