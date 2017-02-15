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
