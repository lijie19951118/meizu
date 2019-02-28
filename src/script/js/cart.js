;(function($){
	$('#footer').load('footer.html');
})(jQuery);

;(function($){
	function goodslist(id,count){
		$.ajax({
			url:'http://10.31.162.32/meizu/php/meizudata.php',
			dataType:'json'
		}).done(function(data){
			$.each(data, function(index,value) {
				if(id==value.sid){//第几个id
					//console.log(value);
					var $clonebox=$('.cart-main-center:hidden').clone(true,true);
					$clonebox.find('.phone-img img').attr('src',value.url);
					$clonebox.find('.phone-title1').html(value.name);
					$clonebox.find('.phone-title2').html(value.title);
					$clonebox.find('.danjia').html(value.price);
					$clonebox.find('.shuzi').val(n[$.inArray(value.sid,s)]);
					$clonebox.find('.xiaoji').html(n[$.inArray(value.sid,s)]*value.price);
					$clonebox.css({"display":"block"});
					$clonebox.find('.phone-img img').attr('sid',value.sid);
					$('.cart-appbox').append($clonebox);
					priceall();//计算总价
				}
			});
		})
	};
	//console.log(getcookie('cookiesid'));//字符串，cookieli都是
	if(getcookie('cookiesid') && getcookie('cookienum')){
		$('.cart-main').show();
		$('.cart-main2').hide();
		//判断cookie是否存在
		var n=getcookie('cookienum').split(',');//num数组
		var s=getcookie('cookiesid').split(',');//sid数组
		$.each(s,function(i,value){
			goodslist(s[i],n[i]);
		});
	};	//变成数组【4，5】
	
	//点击删除按钮
	$('.shanchu').on('click',function(){
		if(confirm('您确定删除此商品吗？')){
			$(this).parent().parent().parent().remove();
			var deletesid=$(this).parent().parent().find('.phone-img img').attr('sid');
			cookietoarray();
			var $index=$.inArray(deletesid,arrsid);
			arrsid.splice($index,1);
			arrnum.splice($index,1);
			addcookie('cookiesid',arrsid.toString(),7);
			addcookie('cookienum',arrnum.toString(),7);
			have();//判断有没有cookie函数
		};
	});
	
	//点击删除选中按钮
	$('.deleteall').on('click',function(){
		if(confirm('您确定删除所有选中商品吗')){
			$('.cart-main-center:visible .gouxuan:checked').each(function(index,ele){
				$(ele).parent().parent().parent().parent().remove();
				cookietoarray();//arrsid;arrnum
				var $sid=$(ele).parent().find('img').attr('sid');
				var $index=$.inArray($sid,arrsid);
				arrsid.splice($index,1);
				arrnum.splice($index,1);
				addcookie('cookiesid',arrsid.toString(),7);
				addcookie('cookienum',arrnum.toString(),7);
				have();
			});
		}
	});
	
	//点击上全选选按钮
	$('.quanxuan').on('click',function(){
		//alert(1);
		if($('.quanxuan').prop('checked')){
			$('.bottomquanxuan').prop('checked',true)
		}else{
			$('.bottomquanxuan').prop('checked',false)
		}
	
		if(!$('.quanxuan').prop('checked')){
			$('.gouxuan').prop('checked',false)
		}else if($('.quanxuan').prop('checked')){
			$('.gouxuan').prop('checked',true)
		}
		choicepriceall();
	});
	
	//按下面的全选
	$('.bottomquanxuan').on('click',function(){
		if($('.bottomquanxuan').prop('checked')){
			$('.quanxuan').prop('checked',true)
		}else{
			$('.quanxuan').prop('checked',false)
		}
		if(!$('.bottomquanxuan').prop('checked')){
			$('.gouxuan').prop('checked',false)
		}else if($('.quanxuan').prop('checked')){
			$('.gouxuan').prop('checked',true)
		}
		choicepriceall();
	});
	
	//点击单选按钮
	$('.gouxuan').on('click',function(){
		//alert()
		if($('.gouxuan:checked').length==$('.gouxuan').length){
			$('.quanxuan').prop('checked',true);
			$('.bottomquanxuan').prop('checked',true);
		}else{
			$('.quanxuan').prop('checked',false);
			$('.bottomquanxuan').prop('checked',false);
		}
		choicepriceall();
	});
	
	//直接设置数量
	$('.shuzi').on('input',function(){
		var $reg =/^\d+$/g; //只能输入数字
		var num=$(this).val();
		if($reg.test(num)){//是数字
			if(num>=99){
				$(this).val(99);
			}else if(num<=1){
				$(this).val(1);
			}else{
				$(this).val(num);
			}
		}else{//不是数字
			$(this).val(1);
			
		}
		xiaoji($(this),num);//计算小计
		cookiechange($(this));//调用改变cookie的函数
		priceall();//计算总价
	});
	
	//点加减按钮
	$('.shuliang .jian').on('click',function(){
		var num=$(this).parent().find('.shuzi').val();
		num--;
		if(num<1){
			num=1
		}
		$(this).parent().find('.shuzi').val(num);
		//计算小计的总和
		xiaoji($(this),num);//计算小计
		cookiechange($(this));//调用改变cookie的函数
		priceall();//计算总价
		
	})
	$('.shuliang .jia').on('click',function(){
		var num=$(this).parent().find('.shuzi').val();
		num++;
		if(num>=99){
			num=99
		};
		$(this).parent().find('.shuzi').val(num);
		//计算小计的总和
		xiaoji($(this),num);//计算小计
		cookiechange($(this));//调用改变cookie的函数
		priceall();//计算总价
	})
	
	//点击勾选框时总价的变化函数
	function choicepriceall(){
		var $sum=0;
		var $count=0;
		$('.cart-main-center:visible').find('.gouxuan:checked').parent().parent().parent().parent().each(function(index,element){
		  if($(element).find('.phone-img input').prop('checked')){
		  	$sum+=parseInt($(element).find('.shuzi').val());
			$count+=parseInt($(element).find('.xiaoji').html());
		  }
		});
		$('.cart-main-buttom').find('.yixuan').html($sum);
		$('.zongjia').html($count);
	};
	
	//计算总价和总的商品件数，必须是选中的商品。常用函数；
	function priceall(){
		var $sum=0;
		var $count=0;
		$('.cart-main-center:visible').each(function(index,element){
		  if($(element).find('.phone-img input').prop('checked')){
		  	$sum+=parseInt($(element).find('.shuzi').val());
			$count+=parseInt($(element).find('.xiaoji').html());
		  }
		});
		$('.cart-main-buttom').find('.yixuan').html($sum);
		$('.zongjia').html($count);
	}
	
	//计算小计总数函数，常用
	function xiaoji(obj,num){
		var xiaojinum=num*parseInt(obj.parent().parent().find('.danjia').html());
		obj.parent().parent().find('.xiaoji').html(xiaojinum);
	}
	
	//封装得到cookie数组的函数
	function cookietoarray(){
		if(getcookie('cookiesid') && getcookie('cookienum')){
			arrsid=getcookie('cookiesid').split(',');//cookie商品的sid  
			arrnum=getcookie('cookienum').split(',');//cookie商品的num
		}
	}
	
	//封装函数改变cookie
	function cookiechange(obj){
		cookietoarray();//arrsid数组
		var sid=obj.parent().parent().parent().find('.phone-img img').attr('sid');
		arrnum[$.inArray(sid,arrsid)]=obj.parent().find('.shuzi').val();
		addcookie('cookienum',arrnum.toString());
	}
	
	//判断有没有商品
	function have(){
		if(getcookie('cookiesid') && getcookie('cookienum')){
			$('.cart-main').show();
			$('.cart-main2').hide();
		}else{
			$('.cart-main').hide();
			$('.cart-main2').show();
		}
	}

})(jQuery);