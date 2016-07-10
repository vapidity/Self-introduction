//鼠标滚轮事件封装
function mouseWheel( obj,upFn,downFn ){
	var direction = true;  //设置变量，获取滚轮状态
	var timer = null;
	//判断ie、chrome下
	obj.onmousewheel = function(ev){
		var ev = ev || window.event;
		clearTimeout(timer);
		timer = setTimeout(function(){
			wheel(ev);
		},300);
	};   
	//判断 FF 下
	if( obj.addEeventListener ){   
		obj.addEeventListener('DOMMouseScroll',function(ev){
			var ev = ev || window.event;
			clearTimeout(timer);
			timer = setTimeout(function(){
				toChange(ev);
			},300);
		},false);
	}

	function wheel(ev){
		var e = ev || event;
		
		//ie/chrome 滚轮向上向下
		if( e.wheelDelta ){
			direction = e.wheelDelta > 0 ? true : false;
		}
		//FF 滚轮向上向下
		if( e.detail ){
			direction = e.detail < 0 ? true : false;
		};

		//通过状态，不同浏览器执行不同的函数，判断是上下滚动
		if( direction ){
			upFn && typeof upFn === "function" && upFn(e);
		}else{
			downFn && typeof downFn === "function" && downFn(e);
		}

		//阻止默认事件
		if( e.preventDefault ){  //FF下
			e.preventDefault();
		};
		e.returnValue = false;  //ie下
	}
}
//css3兼容
function setStyle(obj,attr,value){
	obj.style[attr] = value;
	obj.style['webkit'+attr.substring(0,1).toUpperCase() + attr.substring(1)] = value;
	obj.style['moz'+attr.substring(0,1).toUpperCase() + attr.substring(1)] = value;
}
//添加动画结束监听
function addEnd( obj,attr,Fn ){
	obj.addEventListener( 'webkit'+attr.substring(0,1).toUpperCase()+attr.substring(1) +'End',Fn,false);
	obj.addEventListener( 'moz'+attr.substring(0,1).toUpperCase()+attr.substring(1) +'End',Fn,false);
	obj.addEventListener( attr+'End',Fn,false );
}
//移除动画事件监听
function removeEnd( obj,Fn ){
	obj.removeEventListener( 'webkit'+attr.substring(0,1).toUpperCase()+attr.substring(1) +'End',Fn,false );
	obj.removeEventListener( 'moz'+attr.substring(0,1).toUpperCase()+attr.substring(1) +'End',Fn,false );
	obj.removeEventListener( attr+'end',Fn,false );
}
//导航圆弧坐标计算
function toLT(iR,iDeg){
	return {
		l:Math.round(Math.sin( iDeg/180 * Math.PI ) * iR),
		t:Math.round(Math.cos( iDeg/180 * Math.PI ) * iR)
	}
}

//工具函数
function $( selector,content ){
	var first = selector.charAt(),
		arr = [],
		content = content || document;

	if( first === "#" ){
		return document.getElementById( selector.slice(1) );
	}else if( first === "." ){ 
		var allEle = content.getElementsByTagName("*");//找到所有的标签
			for( var i = 0; i < allEle.length; i++ ){
			//把元素上的className转化为数组
			var allClassName = allEle[i].className.split(" ");
			
			for( var j = 0; j < allClassName.length; j++ ){
				if( selector.slice(1) === allClassName[j] ){
					arr.push( allEle[i] );
					break;
				}
			}
		}
		return arr;
	}else{
		return content.getElementsByTagName( selector );
	}
}

function view(){
	return {
		W:document.documentElement.clientWidth,
		H:document.documentElement.clientHeight
	}
}

function first( obj ){
	var firstChild = obj.firstElementChild || obj.firstChild;
	if( !firstChild || firstChild.nodeType  !== 1 ){  //如果first不存在，或节点类型不是1 <元素节点>
		return null;
	} else{
		return firstChild;
	}
}

function bind( obj,enName,enFn ){
	if( obj.addEventListener ){
		obj.addEventListener( enName,enFn,false );
	} else{
		obj.attachEvent('on' + enName,function(){  //将当前this指向改为obj
			enFn.call(obj);
		})
	}
}

function getStyle( obj,attr ){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
};