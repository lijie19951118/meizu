$(function() {
	//懒加载插件
	$("img.lazy").lazyload({
		effect: "fadeIn"
	});
});

;(function($){
	//首页中导入单独的尾部
	$('#footer').load('footer.html');
	
	//顶部导航栏下拉动画
	$('.index-nav-ul>li').eq(0).hover(function(){
		$('.index-nav1').addClass('index-nav1-change');
		$('.index-nav2').stop(true,true).slideDown({height:179});
	},function(){
		$('.index-nav1').removeClass('index-nav1-change');
		$('.index-nav2').hide();
	});
	$('.index-nav-ul>li').eq(1).hover(function(){
		$('.index-nav1').addClass('index-nav1-change');
		$('.index-nav3').stop(true,true).slideDown({height:179});
	},function(){
		$('.index-nav1').removeClass('index-nav1-change');
		$('.index-nav3').hide();
	});
	$('.index-nav-ul>li').eq(2).hover(function(){
		$('.index-nav1').addClass('index-nav1-change');
		$('.index-nav4').stop(true,true).slideDown({height:179});
	},function(){
		$('.index-nav1').removeClass('index-nav1-change');
		$('.index-nav4').hide();
	});
	$('.index-nav-ul>li').eq(3).hover(function(){
		$('.index-nav1').addClass('index-nav1-change');
		$('.index-nav5').stop(true,true).slideDown({height:179});
	},function(){
		$('.index-nav1').removeClass('index-nav1-change');
		$('.index-nav5').hide();
	});
	$('.index-nav-ul>li').eq(8).hover(function(){
		$('.index-nav1').addClass('index-nav1-change');
		$('.index-nav-last').stop(true,true).slideDown({height:179});
	},function(){
		$('.index-nav1').removeClass('index-nav1-change');
		$('.index-nav-last').hide();
	});
	
	//悬浮图片，其他的变透明
	$('.index-nav-style li').hover(function(){
		$(this).siblings('li').stop(true,true).animate({opacity:"0.5"});
	},function(){
		$(this).siblings('li').stop(true,true).animate({opacity:"1"});
	});
	
	//鼠标悬浮在注册，显示下拉菜单
	$('.index-login').hover(function(){
		$('.index-login-ul').show();
	},function(){
		$('.index-login-ul').hide();
	});
})(jQuery);

;(function($){
	//给所有大图添加透明度动画
	$('#index-avd a,.phone-imgbox a,.audio-imgbox a,.parts-imgbox a,.house-imgbox a').hover(function(){
		$(this).stop(true,true).animate({opacity:"0.8"});
	},function(){
		$(this).animate({opacity:"1"});
		
	});
})(jQuery);

;(function($){
	//给所有小盒子添加阴影动画
	$('#index-phone li').hover(function(){
		$(this).css({'boxShadow':'0 5px 20px rgb(220,220,220)'})},
		function(){
		$(this).css({'boxShadow':'0 0px 0px rgb(220,220,220)'});
	});
})(jQuery);

;(function($){
	//给边上的侧边栏添加效果
	$(window).on('scroll',function(){
		var $top=$(window).scrollTop();
		var $cebianbtn=$('#index-cebian-nav');
		if($top>=700){
			$cebianbtn.show();
		}else{
			$cebianbtn.hide();
		}
		$('.cebianlan').each(function(index,element){
			var $cebiantop=$(element).offset().top+1300;
			if($cebiantop>$top){
				$('#index-cebian-nav li').removeClass('color-li');
				$('#index-cebian-nav li').eq(index).addClass('color-li');
				return false;
			}
		});
	});
	$('#index-cebian-nav li').not('.last').on('click',function(){
		$(this).addClass('color-li').siblings('li').removeClass('color-li');
		var $top=$('.cebianlan').eq($(this).index()).offset().top;
		$('html,body').animate({
    		scrollTop:$top-50
    	});
	});
	//回到顶部。
	$('#index-cebian-nav .last').on('click',function(){
		$('html,body').animate({
    		scrollTop:0
    	});
	})
})(jQuery);


;(function($){
	//从数据库渲染出来
	$.ajax({
		url:'http://10.31.162.32/meizu/php/meizudata.php',
		dataType:'json'
	}).done(function(data){
		var strhtml='<ul class="clear">';
		$.each(data,function(index,value){
			strhtml+=`
				<li class="${value.class}">
					<a href="details.html?sid=${value.sid}">
						<img src="${value.url}"/>
						<span class="phone-title">
							<span class="phone-name">${value.name}</span>
							<span class="phone-text">${value.title}</span>
							<span class="phone-price"><i>￥</i>${value.price}</span>
						</span>
						<span class="${value.color}">限时券</span>
					</a>
				</li>
			`;
		})
		strhtml+='</ul>';
		$('.phone-ulbox2').html(strhtml);
	})
})(jQuery);


;(function(){
	//轮播图
	var $box=$('.banner');
	var $pics=$('.banner .img-box li');
	var $btns=$('.banner-btn span');
	var $left=$('#left');
	var $right=$('#right');
	var $timer=null;
	var $autoplaytimer=null;
	var $num=0;
	$box.hover(function(){
		$('#left,#right').hide();
		clearInterval($autoplaytimer);
	},function(){
		$('#left,#right').hide();
		$autoplaytimer=setInterval(function(){
			$right.click();
		},3000);
	});
	$btns.hover(function(){
		$num=$(this).index();//当前的索引
		$timer=setTimeout(function(){
			change();
		},400)
		
	},function(){
		clearTimeout($timer);
	});
	$right.on('click',function(){
		$num++;
		if($num>$btns.length-1){
			$num=0;
		}
		change();
	});
	$left.on('click',function(){
		$num--;
		if($num<0){
			$num=$btns.length-1;
		}
		change();
	});
	function change(){
		$btns.eq($num).addClass('active').siblings('span').removeClass('active');
		$pics.eq($num).animate({
			opacity:1
		}).siblings('li').animate({
			opacity:0
		});
	}
	$autoplaytimer=setInterval(function(){
		$right.click();
	},3000);
	
	
})(jQuery);
