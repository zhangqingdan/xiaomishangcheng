/*
var Base={
	getId:function (id) {
		return document.getElementById(id);
	},
	getName:function (name) {
		return document.getElementsByName(id);
	},
	gettagName:function (tag) {
		return document.getElementBytagName(id);
	}
};
*/
function addHandler(element,type,handler){
	if(element.addEventListener){
		element.addEventListener(type,handler,false);
	}else if(element.attachEvent){
		element.attachEvent('on'+type,handler);
	}else{
		element['on'+type]=handler;
	}
};
function removeHandler(element,type,handler){
    if(element.removeEventListener){
		element.removeEventListener(type,handler,false);
	}else if(element.detachEvent){
		element.detachEvent('on'+type,handler);
	}else{
		element['on'+type]=null;
	}
};

// 前台调用
var $=function(args){
	return new Base(args);
}

//基础库
function Base(args){
// 创建一个数组	
	this.elements=[];
	if(typeof args=='object'){
		if(args!=undefined){
		this.elements[0] =args;
		}
	}else if(typeof args=='function'){
		if(args!=undefined){
		this.elements[0] =args();
		}
	}
}

// 获取Id节点
Base.prototype.getId=function(id){
	 this.elements.push(document.getElementById(id));	
	 return this;
},
// 获取元素节点
Base.prototype.getTagName=function(tag){
	var tags=document.getElementsByTagName(tag);
	for(var i=0;i<tags.length;i++){
		this.elements.push(tags[i]);
	}		 
	 return this;
}
// 获取class节点
Base.prototype.getClass=function(className,id){
	var node=null;
    if(arguments.length==2){
    	node=document.getElementById(id);
    }else{
    	node=document;
    }
	var all=node.getElementsByTagName('*');
	for(var i=0;i<all.length;i++){
		if(all[i].className==className){
			this.elements.push(all[i]);
		}
	}
	return this;	
}
// 获取某一个节点
Base.prototype.getElement=function(num){
	var element=this.elements[num];
	this.elements=[];
	this.elements[0]=element;
	return this;
}

// 设置CSS
Base.prototype.css=function(attr,value){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length==1){
			if(typeof window.getComputedStyle!='undefined'){
				return window.getComputedStyle(this.elements[i],null)[attr];
			}else if(typeof this.elements[i].currentStyle!='undefined'){
				return this.elements[i].currentStyle[attr]+'px';
			}
		}
    	this.elements[i].style[attr]=value;		
	}
    return this;
}

// 跨浏览器获取style
function getStyle(element,attr){
	var value;
	if(typeof window.getComputedStyle!='undefined'){
		value= parseInt(window.getComputedStyle(element,null)[attr]);
	}else if(typeof element.currentStyle!='undefined'){
		value= parseInt(element.currentStyle[attr]);
	}
	return value;
}

// 设置动画
var timer=null;
Base.prototype.animate=function(attr,step,start,target,t){
	for(var i=0;i<this.elements.length;i++){
		var element=this.elements[i];
		if(start>target) step=-step;
		element.style[attr]=start+'px';
		clearInterval(window.timer);
		timer=setInterval(function(){
			element.style[attr]=getStyle(element,attr)+step+'px';
			if(step>0&&getStyle(element,attr)>=target){
				 clearInterval(timer);
				 element.style[attr]=target+'px';
			}else if(step<0&&getStyle(element,attr)<=target){
				 clearInterval(timer);
				 element.style[attr]=target+'px';
			}
			document.getElementById('bbb').innerHTML+=getStyle(element,attr)+'<br>';
		},t);
	}
	return this;
}
// 添加Class
Base.prototype.addClass=function(className){
	for(var i=0;i<this.elements.length;i++){
		if(!this.elements[i].className.match(new RegExp('(\\s|)'+className+'(\\s|$)'))){
			this.elements[i].className+=' '+className;
		}
	}
	return this;
}
// 移除Class
Base.prototype.removeClass=function(className){
	for(var i=0;i<this.elements.length;i++){
		if(this.elements[i].className.match(new RegExp('(\\s|)'+className+'(\\s|$)'))){
			this.elements[i].className=this.elements[i].className.replace(RegExp('(\\s|)'+className+'(\\s|$)'),' ')
		}
	}
	return this;
}

// 设置innerHTML
Base.prototype.html=function(str){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length==0){
		return this.elements[i].innerHTML;
	}
    	this.elements[i].innerHTML=str;		
	}
    return this;
}

// 设置鼠标移入事件
Base.prototype.hover=function(over,out){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onmouseover=over;
		this.elements[i].onmouseout=out;
	}		
    return this;
}
// 设置点击切换方法
Base.prototype.toggle=function(){
	for(var i=0;i<this.elements.length;i++){
		(function (element,args){
			var count=0;
			addEvent(element ,'click',function(){
    			args[count++ %args.length].call(this);
   			});
		})(this.elements[i],arguments)
	}		
    return this;
}



// 设置显示
Base.prototype.show=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='block';
	}		
    return this;
}
// 设置隐藏
Base.prototype.hide=function(){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].style.display='none';
	}		
    return this;
}

// 触发点击事件
Base.prototype.click=function(fn){
	for(var i=0;i<this.elements.length;i++){
    	this.elements[i].onclick=fn;		
	}
    return this;
}

// 获取当前节点的下一个元素
Base.prototype.next=function(){
	for(var i=0;i<this.elements.length;i++){
    	this.elements[i]=this.elements[i].nextSibling;
    	if(this.elements[i]==null) throw new Error;
    	if(this.elements[i].nodeType==3) this.next();
	}
    return this;
}

// 获取当前节点的上一个元素
Base.prototype.prev=function(){
	for(var i=0;i<this.elements.length;i++){
    	this.elements[i]=this.elements[i].previousSibling;
    	if(this.elements[i]==null) throw new Error;
    	if(this.elements[i].nodeType==3) this.prev();
	}
    return this;
}

































