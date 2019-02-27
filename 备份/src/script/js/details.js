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
		console.log(data);
		$('.details-name,.details-title h1').html(data.name);
		$('.details-title span').html(data.title);
		$('.details-peicr p').html('<small>¥</small>'+data.price);
		$('.details-shop-bigimg img').attr('src',data.url);
		$('.details-shop-bigimg img').attr('sid',data.sid);
		var arr = data.urls.split(',');
		var str='';
		$.each(arr,function(index,value){
			str+='<li><img src="' + value + '"/></li>';
		});
		$('.details-shop-img .imgul').html(str);
	})
	
	
	
})(jQuery);

