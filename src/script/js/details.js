;(function($){
	$('#footer').load('footer.html');
})(jQuery);

;(function($){
	//购物车图标变化
	if(getcookie('cookiesid') && getcookie('cookienum')){
		arrsid=getcookie('cookiesid').split(',');//cookie商品的sid  
		arrnum=getcookie('cookienum').split(',');//cookie商品的num
		var num=0;
		$(arrnum).each(function(index,ele){
			num+=parseInt(ele);
			$('#details-header .cart span').html(num);
		});
	}
})(jQuery);

;(function($){//?sid=4
	var picid=(location.search.substring(1).split('=')[1]);
	$.ajax({
		url:'http://10.31.162.32/meizu/php/detail.php',
		data:{
			sid:picid
		},
		dataType:'json'
	}).done(function(data){
		$('.details-name,.details-title h1').html(data.name);
		$('.details-title span').html(data.title);
		$('.details-peicr p em').html(data.price);
		$('.details-shop-bigimg img').attr('sid',data.sid);
		var arr = data.urls.split(',');
		$('.details-shop-bigimg img').attr('src',arr[0]);
		$('.details-shop-fdj img').attr('src',arr[0]);
		var str='';
		$.each(arr,function(index,value){
			str+='<li><img src="' + value + '"/></li>';
		});
		$('.details-shop-img .imgul').html(str);
	}).done(function(data){
		var arr = data.urls.split(',');
		$('.imgul li').on('click',function(){
			$('.details-shop-bigimg img').attr('src',arr[$(this).index()]);
			$('.details-shop-fdj img').attr('src',arr[$(this).index()]);
		})
	})
})(jQuery);

;(function($){
	//放大镜效果
	var $sf=$('.sf');
	var $spic=$('.details-shop-bigimg img');
	var $bf=$('.details-shop-fdj');
	var $bpic=$('.details-shop-fdj img');
	var $spicbox=$('.details-shop-bigimg');
	$sf.width($bf.width()/980*$spic.width());
	$sf.height($bf.height()/980*$spic.height());
	$bili=$bf.width()/$sf.width();
	//移动小放大镜的效果
	$spicbox.hover(function(){
		$sf.show();
		$bf.show();
		$(this).on('mousemove',function(ev){
			var x=ev.pageX-($sf.width()/2)-$spicbox.offset().left;
			var y=ev.pageY-($sf.height()/2)-$spicbox.offset().top;
			if(x<=0){
				x=0
			}else if(x>=$spicbox.width()-$sf.width()){
				x=$spicbox.width()-$sf.width()
			}
			if(y<=0){
				y=0
			}else if(y>=$spicbox.height()-$sf.height()){
				y=$spicbox.height()-$sf.height()
			}
			$sf.css({left:x,top:y});
			$bpic.css({left:-x*$bili,top:-y*$bili});
		})
	},function(){
		$sf.hide();
		$bf.hide();
	});
	
	
	
})(jQuery);

;(function($){
	var em=$('.last-num em').html();
	$('.last-num .left').on('click',function(){
		em--;
		if(em<1){
			em=1
		};
		//alert(em);
		$('.last-num em').text(em);
		//return false;
	})
	$('.last-num .right').on('click',function(){
		em++;
		//alert(em);
		$('.last-num em').text(em);
	})
})(jQuery);

;(function($){	
	//点击加入购物车
	//sid:sidnum
	var arrsid=[];
	var arrnum=[];
	function cookietoarray(){//数据存在
		if(getcookie('cookiesid') && getcookie('cookienum')){
			arrsid=getcookie('cookiesid').split(',');
			arrnum=getcookie('cookienum').split(',');
		}
	}
	
	var $sid=(location.search.substring(1).split('=')[1]);
	$('.details-joinshop').on('click',function(){
		var emnum=parseInt($('.last-num em').html());
		cookietoarray();//判断商品有没有存在
		
		if($.inArray($sid,arrsid)!=-1){//存在
			var num=emnum+parseInt(arrnum[$.inArray($sid,arrsid)]);
			arrnum[$.inArray($sid,arrsid)]=num;
			addcookie('cookienum',arrnum.toString(),7)
		}else{//不存在
			arrsid.push($sid);
			addcookie('cookiesid',arrsid.toString(),7);
			arrnum.push($('.last-num em').html());
			addcookie('cookienum',arrnum.toString(),7);
		}	
		//购物车图标变化
		arrsid=getcookie('cookiesid').split(',');//cookie商品的sid  
		arrnum=getcookie('cookienum').split(',');//cookie商品的num
		var num=0;
		$(arrnum).each(function(index,ele){
			num+=parseInt(ele);
			$('#details-header .cart span').html(num);
		});
	});
	
})(jQuery);


