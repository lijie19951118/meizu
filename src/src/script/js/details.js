;(function($){
	$('#footer').load('footer.html');
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
	var $arrsid=[];
	var $arrnum=[];
	function cookietoarray(){//数据存在
		if(getcookie('cookiesid') && getcookie('cookienum')){
			$arrsid=getcookie('cookiesid').split(',');
			$arrnum=getcookie('cookienum').split(',');
		}
	}
	
	var $picid=(location.search.substring(1).split('=')[1]);
	$('.details-joinshop').on('click',function(){
		var $sidnum=$('.details-xinghao .last-num em').html();
		cookietoarray();//数据存在
		
		if(!getcookie('sid')){
			addcookie('sid',$picid,7);
			addcookie('num',$sidnum,7)
		};
		
	})
})(jQuery);


