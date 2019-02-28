/*;(function(){
	$(function(){
		$('#form2').validate({
			rules:{
				username:{
					required:true,
					minlength:6,
					maxlength:14,
					remote:{
						type:'post',
						url:'reg.php'
					}
				},
				password:{
					required:true,
					minlength:6
				}
			},
			messages:{
				username:{
					required:'<em class="err">用户名不能为空</em>',
					minlength:'<em class="err">用户名不能小于6</em>',
					maxlength:'<em class="err">用户名不能大于14</em>',
					remote:'<em class="err">用户名已存在</em>'
				},
				password:{
					required:'<em class="err">密码不能为空</em>',
					minlength:'<em class="err">密码不能小于6位</em>'
				}
			}
			
		});
	});
})();*/