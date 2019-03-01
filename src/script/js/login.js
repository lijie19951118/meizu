
;(function($){
	if(getcookie('username') && getcookie('password')){
		var $user=getcookie('username');
		var $pass=getcookie('password');
		$('#username').val($user);
		$('#password').val($pass);
		$('.remember input').prop('checked',true);
	}
})(jQuery);


;(function($){
	$('.enter input').on('click',function(){
		if($('#username').val() && $('#password').val()){
			//如果有有数据
			var $user=$('#username').val();
			var $pass=$('#password').val();
			$.ajax({
				url:'http://10.31.162.32/meizu/php/validate.php',
				type:'POST',
				data:{
					username:$user,
					password:$pass
				},
				dataType:'json',
			}).done(function(data){
				//alert(1)
				//console.log(data)
				if(data){
					//成功
					if($('.remember input').prop('checked')){
						//记住密码
						addcookie('username',$user,7);
						addcookie('password',$pass,7);
						alert('登录成功');
						$(location).attr('href', 'http://10.31.162.32/meizu/src/index.html');
					}else{
						//登入
						delcookie('username');
						delcookie('password');
						alert('登录成功');
						$(location).attr('href', 'http://10.31.162.32/meizu/src/index.html');
					}
				}else{
					$('#password-error').html('账号或密码不正确');
				}
			})
		}
	})
})(jQuery);

	
	
	
	
	
	
	
	

