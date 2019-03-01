;(function(){
	//表单验证
	$(function(){
		$('#form1').validate({
			rules:{
				username:{
					required:true,
					minlength:3,
					maxlength:15,
					remote:{
						type:'post',
						url:'http://10.31.162.32/meizu/php/reg.php'
					}
				},
				password:{
					required:true,
					minlength:6,
				},
				
			},
			messages:{
				username:{
					required:'<em class="err">用户名不能为空</em>',
					minlength:'<em class="err">用户名不能小于3</em>',
					maxlength:'<em class="err">用户名不能大于15</em>',
					remote:'<em class="err">用户名已存在</em>',
				},
				password:{
					required:'<em class="err">密码不能为空</em>',
					minlength:'<em class="err">密码不能小于6位</em>',
				}
			}
		});
	});
	$.validator.setDefaults({
	    success: function(label){
	        label.append('<img src="img/2.png" >');
	    }
	});
})();

;(function($){
	//注册账号协议勾选
	$('#submit').on('click',function(){
		if(!$('.remember input').prop('checked')){
			return false
		}else{
			alert('注册成功！')
		}
	})
})(jQuery);
