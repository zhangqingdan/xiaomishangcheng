window.onload=function () {
	 $().getId('sit_header_01').hover(function(){
         $().getId('sit_header_hid').show()
     },function(){
        $().getId('sit_header_hid').hide()
     })


	var input=document.getElementById('input');
	var sss=document.getElementById('sss');
	var sit_header_0_hid2=document.getElementById('sit_header_0_hid2');


	input.onclick=function(){
		 $().getId('sit_header_0_hid2').css('display','block');

		 $().getId('input').css('border','1px solid orange');
		 $().getId('input').css('borderBottom','0');

		 $().getId('sss').css('border','1px solid orange')
		 $().getId('sss').css('borderLeft','0')

	}

	sit_header_0_hid2.onmouseleave=function(){
		 $().getId('sit_header_0_hid2').css('display','none');
		 $().getId('input').css('border','1px solid #E8E8E8');
		 $().getId('sss').css('border','1px solid #E8E8E8');
		 $().getId('sss').css('borderLeft','0');



		
	}


// 轮播图
	var container=document.getElementById('home_hero_01');
	var list=document.getElementById('lun_coner');
	var buttons=document.getElementById('next_prev').getElementsByTagName('div');
	var next=document.getElementById('next');
	var prev=document.getElementById('prev');
	var index=1;
	var animated=false;
	var timer;

	buttons[0].className='on'

	function showButton(){
		for(var i=0;i<buttons.length;i++){
			if(buttons[i].className=='on'){
				buttons[i].className='';
				break;
			}
		}
		buttons[index-1].className='on';

	}
	
	function animate(offset){
		animated=true;
		var newLeft=parseInt(list.style.left)+offset;
		var interval=0.008;   //位移间隔时间
		var speed=offset/122;  //每次的位移长度
		function go(){
			if(speed<0&&parseInt(list.style.left)>newLeft||speed>0&&parseInt(list.style.left)<newLeft){
				list.style.left=parseInt(list.style.left)+speed+'px';
				setTimeout(go,interval);
			}else{
				animated=false;
				list.style.left=newLeft+'px';
				if(newLeft>=-1226){
					list.style.left=-7356+'px';
				}
				if(newLeft<=-7356){
					list.style.left=-1226+'px';
				}
			}
		}
		go();
		
	}


	function play(){
		timer=setInterval(function(){
			next.onclick();
		},2000);
	}

	function stop(){
		clearInterval(timer);
	}
	play();
	container.onmouseover=stop;
	container.onmouseout=play;



	next.onclick=function(){
		if(index==buttons.length){
			index=1;
		}else{
			index+=1;
		}

		
		showButton();
		if(!animated){
			animate(-1226);

		}
		
	}
	prev.onclick=function(){
		if(index==1){
			index=buttons.length;
		}else{
			index-=1;
		}
		showButton();
		if(!animated){
			animate(1226);
		}
		
	}


	for(var i=0;i<buttons.length;i++){
		buttons[i].onclick=function(){
			if(this.className=='on'){
				return;
			}
			var myIndex=parseInt(this.getAttribute('index'));
			var offset=-1226*(myIndex-index);
			index=myIndex;
			showButton();
			if(!animated){
				animate(offset);				
			}
		}
	}





// 轮播图下面

	var next0=document.getElementById('home_hero_03_02_next');
	var prev0=document.getElementById('home_hero_03_02_prev');
	var contain=document.getElementById('home_hero_03_02');
	$().getId('home_hero_03_02_prev').css('borderColor','#D3D3D3');

	$().getId('sb').css('color','#D3D3D3');

	next0.onclick=function(){
		contain.style.left=-1246+'px';
        $().getId('home_hero_03_02_next').css('borderColor','#D3D3D3');
		$().getId('sa').css('color','#D3D3D3');
		$().getId('home_hero_03_02_prev').css('borderColor','gray');
		$().getId('sb').css('color','gray');




	}
	prev0.onclick=function(){
		contain.style.left=0+'px';
		$().getId('home_hero_03_02_prev').css('borderColor','#D3D3D3');
		$().getId('sb').css('color','#D3D3D3');
		$().getId('home_hero_03_02_next').css('borderColor','gray');
		$().getId('sa').css('color','gray');		
	}



// 、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、


	$().getId('span01').hover(function(){
		// alert($().getId('a').css('zIndex'))
        $().getId('a').css('zIndex',$().getId('a').css('zIndex')+10);
        $().getId('b').css('zIndex',1);
        $().getId('c').css('zIndex',1);
        $().getId('d').css('zIndex',1);


     })

	$().getId('span02').hover(function(){
         $().getId('b').css('zIndex',$().getId('b').css('zIndex')+10);
         $().getId('a').css('zIndex',1);
        $().getId('c').css('zIndex',1);
        $().getId('d').css('zIndex',1);
     })

	$().getId('span03').hover(function(){
         $().getId('c').css('zIndex',$().getId('c').css('zIndex')+10);
         $().getId('b').css('zIndex',1);
        $().getId('a').css('zIndex',1);
        $().getId('d').css('zIndex',1);
     })
	$().getId('span04').hover(function(){
         $().getId('d').css('zIndex',$().getId('d').css('zIndex')+10);
         $().getId('b').css('zIndex',1);
        $().getId('c').css('zIndex',1);
        $().getId('a').css('zIndex',1);
     })







// 、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、
	var next01=document.getElementById('home_hero_04_02_next');
	var prev01=document.getElementById('home_hero_04_02_prev');
	var contain1=document.getElementById('home_hero_04_02');
	$().getId('home_hero_04_02_prev').css('borderColor','#D3D3D3');

	$().getId('ssb').css('color','#D3D3D3');

	next01.onclick=function(){
		contain1.style.left=-1246+'px';
        $().getId('home_hero_04_02_next').css('borderColor','#D3D3D3');
		$().getId('ssa').css('color','#D3D3D3');
		$().getId('home_hero_04_02_prev').css('borderColor','gray');
		$().getId('ssb').css('color','gray');




	}
	prev01.onclick=function(){
		contain1.style.left=0+'px';
		$().getId('home_hero_04_02_prev').css('borderColor','#D3D3D3');
		$().getId('ssb').css('color','#D3D3D3');
		$().getId('home_hero_04_02_next').css('borderColor','gray');
		$().getId('ssa').css('color','gray');		
	}





	/////////////////////////////////////////////////////////////////////////////////

	// 轮播图
	var container11=document.getElementById('aaaa');
	var list11=document.getElementById('u11');
	var buttons11=document.getElementById('s11').getElementsByTagName('span');
	var next11=document.getElementById('n11');
	var prev11=document.getElementById('p11');
	var index11=1;
	var animated11=false;
	var timer11;
	buttons11[0].className='ooon';
	function showButton11(){
		for(var i=0;i<buttons11.length;i++){
			if(buttons11[i].className=='ooon'){
				buttons11[i].className='';
				break;
			}
		}
		buttons11[index11-1].className='ooon';
	}	
	function animate11(offset){
		animated11=true;
		var newLeft=parseInt(list11.style.left)+offset;
		var interval=0.001;   //位移间隔时间
		var speed=offset/70;  //每次的位移长度
		function go11(){
			if(speed<0&&parseInt(list11.style.left)>newLeft||speed>0&&parseInt(list11.style.left)<newLeft){
				list11.style.left=parseInt(list11.style.left)+speed+'px';
				setTimeout(go11,interval);
			}else{
				animated11=false;
				list11.style.left=newLeft+'px';
				if(newLeft>-296){
					list11.style.left=-1184+'px';
				}
				if(newLeft<-1184){
					list11.style.left=-296+'px';
				}
			}
		}
		go11();		
	}
	next11.onclick=function(){
		if(index11==buttons11.length){
			index11=1;
		}else{
			index11+=1;
		}		
		showButton11();
		if(!animated11){
			animate11(-296);
		}		
	}
	prev11.onclick=function(){
		if(index11==1){
			index11=buttons11.length;
		}else{
			index11-=1;
		}
		showButton11();
		if(!animated11){
			animate11(296);
		}		
	}
	for(var i=0;i<buttons11.length;i++){
		buttons11[i].onclick=function(){
			if(this.className=='on'){
				return;
			}
			var myIndex11=parseInt(this.getAttribute('index11'));
			var offset=-296*(myIndex11-index11);
			index11=myIndex11;
			showButton11();
			if(!animate11d){
				animate11(offset);				
			}
		}
	}





	$().getId('span001').hover(function(){
        $().getId('aa').css('zIndex',$().getId('aa').css('zIndex')+10);
        $().getId('bb').css('zIndex',1);
        $().getId('cc').css('zIndex',1);
        $().getId('dd').css('zIndex',1);


     })

	$().getId('span002').hover(function(){
         $().getId('bb').css('zIndex',$().getId('bb').css('zIndex')+10);
         $().getId('aa').css('zIndex',1);
        $().getId('cc').css('zIndex',1);
        $().getId('dd').css('zIndex',1);
     })

	$().getId('span003').hover(function(){
         $().getId('cc').css('zIndex',$().getId('cc').css('zIndex')+10);
         $().getId('bb').css('zIndex',1);
        $().getId('aa').css('zIndex',1);
        $().getId('dd').css('zIndex',1);
     })
	$().getId('span004').hover(function(){
         $().getId('dd').css('zIndex',$().getId('dd').css('zIndex')+10);
         $().getId('bb').css('zIndex',1);
        $().getId('cc').css('zIndex',1);
        $().getId('aa').css('zIndex',1);
     })







	// 轮播图
	var container22=document.getElementById('bbbb');
	var list22=document.getElementById('u22');
	var buttons22=document.getElementById('s22').getElementsByTagName('span');
	var next22=document.getElementById('n22');
	var prev22=document.getElementById('p22');
	var index22=1;
	var animated22=false;
	var timer22;
	buttons22[0].className='ooon';
	function showButton22(){
		for(var i=0;i<buttons22.length;i++){
			if(buttons22[i].className=='ooon'){
				buttons22[i].className='';
				break;
			}
		}
		buttons22[index22-1].className='ooon';
	}	
	function animate22(offset){
		animated22=true;
		var newLeft=parseInt(list22.style.left)+offset;
		var interval=0.001;   //位移间隔时间
		var speed=offset/70;  //每次的位移长度
		function go22(){
			if(speed<0&&parseInt(list22.style.left)>newLeft||speed>0&&parseInt(list22.style.left)<newLeft){
				list22.style.left=parseInt(list22.style.left)+speed+'px';
				setTimeout(go22,interval);
			}else{
				animated22=false;
				list22.style.left=newLeft+'px';
				if(newLeft>-296){
					list22.style.left=-1184+'px';
				}
				if(newLeft<-1184){
					list22.style.left=-296+'px';
				}
			}
		}
		go22();		
	}
	next22.onclick=function(){
		if(index22==buttons22.length){
			index22=1;
		}else{
			index22+=1;
		}		
		showButton22();
		if(!animated22){
			animate22(-296);
		}		
	}
	prev22.onclick=function(){
		if(index22==1){
			index22=buttons22.length;
		}else{
			index22-=1;
		}
		showButton22();
		if(!animated22){
			animate22(296);
		}		
	}
	for(var i=0;i<buttons22.length;i++){
		buttons22[i].onclick=function(){
			if(this.className=='on'){
				return;
			}
			var myIndex22=parseInt(this.getAttribute('index22'));
			var offset=-296*(myIndex22-index22);
			index22=myIndex22;
			showButton22();
			if(!animate22d){
				animate22(offset);				
			}
		}
	}






// 轮播图
	var container33=document.getElementById('cccc');
	var list33=document.getElementById('u33');
	var buttons33=document.getElementById('s33').getElementsByTagName('span');
	var next33=document.getElementById('n33');
	var prev33=document.getElementById('p33');
	var index33=1;
	var animated33=false;
	var timer33;
	buttons33[0].className='ooon';
	function showButton33(){
		for(var i=0;i<buttons33.length;i++){
			if(buttons33[i].className=='ooon'){
				buttons33[i].className='';
				break;
			}
		}
		buttons33[index33-1].className='ooon';
	}	
	function animate33(offset){
		animated33=true;
		var newLeft=parseInt(list33.style.left)+offset;
		var interval=0.001;   //位移间隔时间
		var speed=offset/70;  //每次的位移长度
		function go33(){
			if(speed<0&&parseInt(list33.style.left)>newLeft||speed>0&&parseInt(list33.style.left)<newLeft){
				list33.style.left=parseInt(list33.style.left)+speed+'px';
				setTimeout(go33,interval);
			}else{
				animated33=false;
				list33.style.left=newLeft+'px';
				if(newLeft>-296){
					list33.style.left=-1184+'px';
				}
				if(newLeft<-1184){
					list33.style.left=-296+'px';
				}
			}
		}
		go33();		
	}
	next33.onclick=function(){
		if(index33==buttons33.length){
			index33=1;
		}else{
			index33+=1;
		}		
		showButton33();
		if(!animated33){
			animate33(-296);
		}		
	}
	prev33.onclick=function(){
		if(index33==1){
			index33=buttons33.length;
		}else{
			index33-=1;
		}
		showButton33();
		if(!animated33){
			animate33(296);
		}		
	}
	for(var i=0;i<buttons33.length;i++){
		buttons33[i].onclick=function(){
			if(this.className=='on'){
				return;
			}
			var myIndex33=parseInt(this.getAttribute('index33'));
			var offset=-296*(myIndex33-index33);
			index33=myIndex33;
			showButton33();
			if(!animate33d){
				animate33(offset);				
			}
		}
	}





// 轮播图
	var container44=document.getElementById('dddd');
	var list44=document.getElementById('u44');
	var buttons44=document.getElementById('s44').getElementsByTagName('span');
	var next44=document.getElementById('n44');
	var prev44=document.getElementById('p44');
	var index44=1;
	var animated44=false;
	var timer44;
	buttons44[0].className='ooon';
	function showButton44(){
		for(var i=0;i<buttons44.length;i++){
			if(buttons44[i].className=='ooon'){
				buttons44[i].className='';
				break;
			}
		}
		buttons44[index44-1].className='ooon';
	}	
	function animate44(offset){
		animated44=true;
		var newLeft=parseInt(list44.style.left)+offset;
		var interval=0.001;   //位移间隔时间
		var speed=offset/70;  //每次的位移长度
		function go44(){
			if(speed<0&&parseInt(list44.style.left)>newLeft||speed>0&&parseInt(list44.style.left)<newLeft){
				list44.style.left=parseInt(list44.style.left)+speed+'px';
				setTimeout(go44,interval);
			}else{
				animated44=false;
				list44.style.left=newLeft+'px';
				if(newLeft>-296){
					list44.style.left=-1184+'px';
				}
				if(newLeft<-1184){
					list44.style.left=-296+'px';
				}
			}
		}
		go44();		
	}
	next44.onclick=function(){
		if(index44==buttons44.length){
			index44=1;
		}else{
			index44+=1;
		}		
		showButton44();
		if(!animated44){
			animate44(-296);
		}		
	}
	prev44.onclick=function(){
		if(index44==1){
			index44=buttons44.length;
		}else{
			index44-=1;
		}
		showButton44();
		if(!animated44){
			animate44(296);
		}		
	}
	for(var i=0;i<buttons44.length;i++){
		buttons44[i].onclick=function(){
			if(this.className=='on'){
				return;
			}
			var myIndex44=parseInt(this.getAttribute('index44'));
			var offset=-296*(myIndex44-index44);
			index44=myIndex44;
			showButton44();
			if(!animate44d){
				animate44(offset);				
			}
		}
	}



































}

