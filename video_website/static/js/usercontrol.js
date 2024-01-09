var realEveryone = document.getElementsByClassName("realEveryone")[0];
var InsertNewButton = document.getElementsByClassName("InsertNew")[0];
var InsertUserInformation = document.getElementsByClassName("InsertUserInformation")[0];
var normal_choose = document.getElementById("normal_choose");
var superAdmin_choose = document.getElementById("superAdmin_choose");
var submitTheInformation_Yes = document.getElementsByClassName("submitTheInformation_Yes")[0];
var submitTheInformation_No = document.getElementsByClassName("submitTheInformation_No")[0];
normal_choose.onchange = function(){
	if(this.checked){ //如果已选中
		superAdmin_choose.checked = false; //清空另一个单选框状态
	}
}
superAdmin_choose.onchange = function(){
	if(this.checked){ //如果已选中
		normal_choose.checked = false; //清空另一个单选框状态
	}
}

InsertNewButton.onclick = function(){
	//创建页面的那个操作界面
	InsertUserInformation.style.display = 'block';
	submitTheInformation_Yes.onclick = function(){
		var username = document.getElementById('Username').value; //预设账号名
		var userAccount = document.getElementById('UserAccount').value; //预设账号
		var password = document.getElementById('UserPassword').value; //预设密码
		if(username == ''){
			alert("请输入姓名");
		}else if(userAccount == ''){
			alert("请输入账号");
		}else if(password == ''){
			alert("请输入密码");
		}else{
			if(normal_choose.checked == true){ //勾选了普通用户选项
				var key = 'user_' + md5(userAccount);
				if(localStorage.getItem(key) != null){
					alert("该普通用户账号已存在！"); 
				}else{
					var userInformation = userAccount + ":" + password + ":" + username;
					localStorage.setItem(key, userInformation);
					alert("普通用户创建成功！"); //这里可以打算不换成弹窗，换成别的操作成功
					InsertUserInformation.style.display = 'none';
					location.href = 'usercontrol.html';
				}
			}else if(superAdmin_choose.checked == true){ //判断是否选中按钮
				// console.log("用户账号是：" + userAccount);
				var key = 'admin_' + md5(userAccount);
				// console.log("加密后的key：" + key);
				if(localStorage.getItem(key) != null){
					alert("该管理员账号已存在！");
				}else{
					var AdminInformation = userAccount + ":" + password + ":" + username;
					// console.log("用户相关数据：" + AdminInformation);
					// console.log("用户数据用md5加密后:" + md5(AdminInformation));
					localStorage.setItem(key, AdminInformation);
					// console.log("试图用现场生成的key来获取数据：" + localStorage.getItem(key));
					alert("管理员用户创建成功！"); //这里可以打算不换成弹窗，换成别的操作成功
					InsertUserInformation.style.display = 'none';
					location.href = 'usercontrol.html';
				}
			}
		}
	}
}

submitTheInformation_No.onclick = function(){
	InsertUserInformation.style.display = 'none';
}

var searchButton = document.getElementsByClassName("searchfor")[0];
var allUser = []; //打算做一个用户显示对应用户的，不受搜索结果影响的数组，也就是所有的tr行
var delUser = []; //搜索后的情况 (因为删除是直接影响到数组存储的，因此要做备份)
var showUser = []; //打算做一个当前显示用户的数组。
searchButton.onclick = function(){
	//难点解决！之所以做不到搜索后再搜索是因为remove删除元素是一种不可逆的操作，也就是说
	//删除页面上的元素后是真的删除了，即使在数组中存储了页面元素对象，应该也只是复制一份或者指向对应元素而已
	//假设如果底层逻辑是复制，那也就是暂存在数组中没有显示，那么只要判断页面对应位置是否生成好了对应的数据
	// 只要没生成就进行生成
	// 之所以没有办法第二次查询到数据是因为之前的第一次查询把元素已经删掉了
	// 所以第二次查询才会变成没有数据的样子（实际有匹配数据）
	// 那么就在没有数据显示的时候生成数据便解决了这个问题
	// 皆大欢喜！
	var searchWhat = document.getElementById("searchInput").value; //搜索框的值
	console.log("所有的tr行：" + allUser);
	//两个功能：
	// 1. 当搜索框什么都没有的时候就全部显示
	// 2. 当搜索框的值和用户数据有匹配的时候就显示对应数据
	if(searchWhat == ""){
		// 删除所有用户数据
		for(var i = 0; i < allUser.length; i++){
			allUser[i].remove(); //删除之前的查询结果
		}
		loadUser(); //并重加载数据
	}else{
		//remove似乎不是那么简单，因为remove数组中存储的element对象，同样会造成该元素在数组中删除并且不存在，remove会动态减数组长度，导致数组检索可能会报错等，并不只是在页面上不显示这么简单，
		for(var i = 0; i < allUser.length; i++){
			if(allUser[i].children[1].innerHTML == searchWhat){ // 如果存在用户名和查找名称一致的用户
				showUser.push(allUser[i]); //将该用户推入要显示的用户区域
				console.log("要展示的行：" + allUser[i].children[1].innerHTML);
			}else{
				delUser.push(allUser[i]);
				console.log("要删除的行：" + allUser[i].children[1].innerHTML);
			}
		}
		if(showUser == ''){
			alert("未查询到相关用户！请根据用户名进行查询！");
			for(var i = 0; i < allUser.length; i++){
				allUser[i].remove(); //删除之前的查询结果
			}
			loadUser();
		}else{
			for(var i = 0; i < delUser.length; i++){
				delUser[i].remove();
				console.log(delUser[i].children[1].innerHTML);
			}
		}
		console.log("除了搜索的用户之外要删除的用户" + delUser);
		console.log("展示的用户：" + showUser);
		if(realEveryone.innerHTML == ''){
			for(var i = 0; i < showUser.length; i++){
				realEveryone.append(showUser[i]);
			}
		}
		console.log("删除后：" + delUser);
		showUser = [];
		delUser = [];
	}
}


function loadUser(){
	var id = 1;
	allUser = []; // 清除之前存储的数据
	for(var i in localStorage){ //加载现有的用户信息
		// console.log(i);
		if(i.indexOf("admin_") != -1 || i.indexOf("user_") != -1){
			// console.log(localStorage.getItem(i));
			var account_information = localStorage.getItem(i);
			var tr = document.createElement("tr");
			var td = document.createElement("td");
			td.innerHTML = id;
			tr.append(td);
			id++;
			var td = document.createElement("td");
			td.innerHTML = account_information.split(":")[2];
			tr.append(td);
			var td = document.createElement("td");
			td.innerHTML = account_information.split(":")[0];
			tr.append(td);
			var td = document.createElement("td");
			td.innerHTML = account_information.split(":")[1];
			tr.append(td);
			var td = document.createElement("td");
			td.innerHTML = "暂时不支持，敬请期待";
			tr.append(td);
			var td = document.createElement("td");
			td.innerHTML = "<button class='control_information'>修改</button> <button class='delete_information'>删除</button>";
			tr.append(td);
			allUser.push(tr); //存储所有的用户数据
			realEveryone.append(tr);
			// arr.push(td);
			// arr.push(tr);
		}
		// console.log(localStorage.getItem(i));
	}
}

// promise对象用于区分异步操作的成功状态和失败状态，由于获取元素和添加
// resolve是代表成功的状态，reject是代表失败后的状态
var promise = new Promise((resolve, reject) => {
	// var arr = [];
		try{
			loadUser();
			resolve(null); //不执行这条会导致不执行then语句，也就是不知道异步成功与否
		}catch(error){
			reject(error);
		}
})

var control_No = document.getElementsByClassName("control_No"); //获取所有的操作界面的取消按钮
var control_Yes = document.getElementsByClassName("control_Yes"); //获取所有的操作界面的确认按钮
var close = document.getElementsByClassName('close'); //关闭按钮
var chooseUserInformation = document.getElementById("chooseUserInformation"); //关闭操作界面
for(var i = 0; i < close.length; i++){
	close[i].onclick = function(){
		chooseUserInformation.style.display = 'none';
	}
}
promise.then((elements) => {
	// 异步执行成功的操作
	// console.log("我执行了");
	var del_button = document.getElementsByClassName("delete_information");
	for(var i = 0; i < del_button.length; i++){
		del_button[i].onclick = function(){
			whichUser = this.parentNode.parentNode.children[2].innerHTML;
			// console.log(this);
			// console.log(this.parentNode);
			// console.log(this.parentNode.parentNode);
			// console.log(this.parentNode.parentNode.remove());
			var delElement = this.parentNode.parentNode; //实际不删除，只是试试效果
			console.log(delElement);
				var isUser = "user_" + md5(whichUser); //获取用户的名称
				var isAdmin = "admin_" + md5(whichUser); //获取用户的名称
				checkAndDelete.style.display = 'block';
				if(localStorage.getItem(isUser) != null){  //如果是用户
					var choose_title = document.getElementsByClassName("choose_title")[0];
					choose_title.innerText = "确认要将" + localStorage.getItem(isUser).split(":")[2] +"账户删除?";
					choose_Yes.onclick = function(){
						checkAndDelete.style.display = 'none';
						localStorage.removeItem(isUser);
						delElement.remove();
						alert("操作成功！");
						location.href = 'usercontrol.html';
					}
				}else{ //如果是管理员
					var choose_title = document.getElementsByClassName("choose_title")[0];
					choose_title.innerText = "确认要将" + localStorage.getItem(isAdmin).split(":")[2] +"账户删除?";
					choose_Yes.onclick = function(){
						checkAndDelete.style.display = 'none';
						localStorage.removeItem(isAdmin);
						delElement.remove();
						alert("操作成功！");
						location.href = 'usercontrol.html';
					}
				}
			
		}
	}
	// console.log(del_button);
	var whichUser = null; //存储要操作的用户名称
	var oldName = null;
	var oldPw = null;
	var control_button = document.getElementsByClassName("control_information");
	for(var i = 0; i < control_button.length; i++){
		control_button[i].onclick = function(){
			// console.log(this);
			// console.log(this.parentNode.parentNode);
			// console.log(this.parentNode.parentNode.children[2]); //对应账号
			// console.log(this.parentNode.parentNode.children[2].innerHTML);
			oldName = this.parentNode.parentNode.children[1].innerHTML;
			whichUser = this.parentNode.parentNode.children[2].innerHTML;
			oldPw = this.parentNode.parentNode.children[3].innerHTML;
			chooseUserInformation.style.display = 'block';
		}
	}
	// console.log(control_button);
	
	// console.log(control_No);
	for(var i = 0; i < control_No.length; i++){
		control_No[i].setAttribute('index', i);
		control_No[i].onclick = function(){
			var index = this.getAttribute('index');
			// console.log(i); //因为i用作绑定事件，所以绑完之后，i为绑定事件的按钮数
			if(index == 0){ //操作1的取消按钮
				show_div[parseInt(index) + 1].style.marginLeft = '0px';
				//清空之前填写的信息
				document.getElementById("newName").value = ''; 
			}else if(index == 1){ //操作2的取消按钮
				show_div[parseInt(index) + 1].style.marginLeft = '0px';
				//清空之前填写的信息
				document.getElementById("oldPassword").value = '';
				document.getElementById("newPassword").value = '';
				document.getElementById("checkPassword").value = '';
			}
		}
	}
	
	var checkAndDelete = document.getElementsByClassName("checkAndDelete")[0];
	var choose_Yes = document.getElementsByClassName("choose_Yes")[0];
	var choose_No = document.getElementsByClassName("choose_No")[0];
	choose_No.onclick = function(){
		checkAndDelete.style.display = 'none';
	}
	
	for(var i = 0; i < control_Yes.length; i++){
		control_Yes[i].setAttribute('index', i);
		control_Yes[i].onclick = function(){
			var index = this.getAttribute('index');
			if(index == 0){ //操作1的确认按钮
				var isUser = "user_" + md5(whichUser); //获取用户的名称
				var isAdmin = "admin_" + md5(whichUser); //获取用户的名称
				var newName = document.getElementById("newName").value; //用户输入的预定新名称
				if(newName != ''){
					checkAndDelete.style.display = 'block';
					console.log(localStorage.getItem(isUser));
					if(localStorage.getItem(isUser) != null){ //如果是用户
						// console.log(isUser);
						var nowUserName = localStorage.getItem(isUser).split(":")[2];
						var choose_title = document.getElementsByClassName("choose_title")[0];
						choose_title.innerText = "确认要将" + nowUserName + "改为" + newName + "?";
						choose_Yes.onclick = function(){
							checkAndDelete.style.display = 'none';
							chooseUserInformation.style.display = 'none';
							var email = localStorage.getItem(isUser).split(":")[0];
							var password = localStorage.getItem(isUser).split(":")[1];
							var newInformation = email + ":" + password + ":" + newName;
							oldName.innerHTML = newName;
							localStorage.setItem(isUser, newInformation);
							location.href = 'usercontrol.html';
						}
					}else{ //如果是管理员
						// console.log(isAdmin);
						var nowUserName = localStorage.getItem(isAdmin).split(":")[2];
						var choose_title = document.getElementsByClassName("choose_title")[0];
						choose_title.innerText = "确认要将" + nowUserName + "改为" + newName + "?";
						choose_Yes.onclick = function(){
							checkAndDelete.style.display = 'none';
							chooseUserInformation.style.display = 'none';
							var email = localStorage.getItem(isAdmin).split(":")[0];
							var password = localStorage.getItem(isAdmin).split(":")[1];
							var newInformation = email + ":" + password + ":" + newName;
							oldName.innerHTML = newName;
							localStorage.setItem(isAdmin, newInformation);
							location.href = 'usercontrol.html';
						}
					}
				}else{
					alert("新用户名不能为空");
				}
			}else if(index == 1){ //操作2的确认按钮
				var oldPassword = document.getElementById("oldPassword").value; //用户认为的原先的旧密码
				var newPassword = document.getElementById("newPassword").value; //用户想要的新密码
				var checkPassword = document.getElementById("checkPassword").value; //确认密码，是否和新密码一致
				var isUser = "user_" + md5(whichUser); //获取用户的名称
				var isAdmin = "admin_" + md5(whichUser); //获取用户的名称
				if(oldPassword == ''){
					alert("请输入旧密码");
				}else if(newPassword == ''){
					alert("请输入新密码");
				}else if(newPassword !== checkPassword){
					alert("新密码与确认密码不一致！");
				}else{
					if(localStorage.getItem(isUser) != null){ //是用户
						checkAndDelete.style.display = 'block';
						var choose_title = document.getElementsByClassName("choose_title")[0];
						choose_title.innerText = "确认变更密码?";
						choose_Yes.onclick = function(){
							chooseUserInformation.style.display = 'none';
							checkAndDelete.style.display = 'none';
							var email = localStorage.getItem(isUser).split(":")[0];
							var name = localStorage.getItem(isUser).split(":")[2];
							var newInformation = email + ":" + newPassword + ":" + name;
							oldPw.innerHTML = newPassword;
							localStorage.setItem(isUser, newInformation);
							location.href = 'usercontrol.html';
						}
					}else{ //是管理员
					checkAndDelete.style.display = 'block';
						var choose_title = document.getElementsByClassName("choose_title")[0];
						choose_title.innerText = "确认变更密码?";
						choose_Yes.onclick = function(){
							chooseUserInformation.style.display = 'none';
							checkAndDelete.style.display = 'none';
							var email = localStorage.getItem(isAdmin).split(":")[0];
							var name = localStorage.getItem(isAdmin).split(":")[2];
							var newInformation = email + ":" + newPassword + ":" + name;
							oldPw.innerHTML = newPassword;
							localStorage.setItem(isAdmin, newInformation);
							location.href = 'usercontrol.html';
						}
					}
				}
			}
		}
	}
}).catch((error) => {
	// 异步执行失败的操作
});

var account_name = document.getElementById("account_name");
const urlParams = new URLSearchParams(window.location.search); //截取url中?号往后的内容 const变量相当于Java中的final，是常量，不可改变的
var userInformation = localStorage.getItem(urlParams.get("hashedlocalStorageKey")); //获取姓名、账号和密码
var userName = userInformation.split(":")[2];
account_name.innerHTML = userName;
var logout = document.getElementById("logout");
logout.onclick = function(){
	window.location.href = "pages-sign-in.html";
}
sessionStorage.setItem("beforeUrlParams", window.location.search); //将之前的信息(url中的变量)存储起来，打算做一个公用的js以方便跳转之后仍然使变量赋值生效
