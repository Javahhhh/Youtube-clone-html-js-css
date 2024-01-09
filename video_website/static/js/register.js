var button = document.getElementById("register_button");
for(var key in localStorage){
	if(key.startsWith('admin')){
		//存在管理员账号
	}else{
		localStorage.setItem("admin_" + md5("admin114"), "admin114:123456789:管理员小郑");
	}
}

button.onclick = function(){
	check()
};
document.onkeydown = function(e){
	// console.log(e.keyCode);
	if(e.keyCode == 13){
		check();
	}
};
function check(){
	var register_Name = document.getElementById("register_Name").value;
	var register_Email = document.getElementById("register_Email").value;
	var register_Password = document.getElementById("register_Password").value;
	console.log(register_Name);
	console.log(register_Email);
	console.log(register_Password);
	console.log("name的类型：" + typeof(register_Name));
	if(register_Name != "" && register_Email != "" && register_Password != ""){
		if(typeof(register_Name) !== "string"){
			alert("姓名输入格式不对");
		}else{
			var key = 'user_' + md5(register_Email);
			
			if(localStorage.getItem(key) == null){
				alert("注册成功");
				localStorage.setItem(key, register_Email + ":" + register_Password + ":" + register_Name);
				window.location.href = "pages-sign-in.html";
			}else{
				alert("该账户已存在");
			}
			// localStorage.setItem(register_Email, register_Password);
			// localStorage.removeItem(key);
			// console.log(localStorage.getItem(key) !== null);
		}
	}else{
		if(register_Name == ""){
			alert("姓名不能为空");
		}else if(register_Email == ""){
			alert("账号不能为空");
		}else if(register_Password == ""){
			alert("密码不能为空");
		}
	}
}