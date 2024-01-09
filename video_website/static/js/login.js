var button = document.getElementById("login_button");
var remember_button = document.getElementById("customControlInline");
button.onclick = function(){
	check();
}

document.onkeydown = function(e){
	if(e.keyCode == 13){
		check();
	}
}

function check(){
	var getUser = document.getElementById("loginEmail").value;
	var getPassword = document.getElementById("loginPassword").value;
	var whichUser = "user_" + md5(getUser);
	var whichAdmin = "admin_" + md5(getUser);
	// if(getPassword === password && getUser === user){
	// 	console.log("登录成功");
	// }else{
	// 	console.log("登录失败");
	// }
	// console.log(localStorage.getItem(whichUser).split(":")[2].includes("管理员"))
	// console.log(localStorage.getItem(whichAdmin).split(":")[2].includes("管理员"));
	if(localStorage.getItem(whichAdmin) != null){//如果是管理员
			var AdminAndPassword = localStorage.getItem(whichAdmin);
			var AdminName = AdminAndPassword.split(":")[0];
			var password = AdminAndPassword.split(":")[1];
			// console.log(Admin)
			// console.log(password);
			if(getUser === AdminName && getPassword === password){
				alert("登录成功");
				var redirectUrl = 'admin.html?hashedlocalStorageKey=' + whichAdmin;
				window.location.href = redirectUrl;
			}else{
				alert("密码错误");
		}
	}else if(localStorage.getItem(whichUser) != null){
		var userAndPassword = localStorage.getItem(whichUser);
		var user = userAndPassword.split(":")[0];
		var password = userAndPassword.split(":")[1];
		// console.log(user)
		// console.log(password);
		if(getUser === user && getPassword === password){
			alert("登录成功");
			var redirectUrl = 'index.html?hashedlocalStorageKey=' + whichUser;
			window.location.href = redirectUrl;
		}else{
			alert("密码错误");
		}
	}else{
		alert("登录失败,无此账户");
	}
}