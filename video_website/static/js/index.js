var account_name = document.getElementById("account_name");
const urlParams = new URLSearchParams(window.location.search); //截取url中?号往后的内容 const变量相当于Java中的final，是常量，不可改变的
var userInformation = localStorage.getItem(urlParams.get("hashedlocalStorageKey")); //获取姓名、账号和密码
var userName = userInformation.split(":")[2];
account_name.innerHTML = userName;
var logout = document.getElementById("logout");
logout.onclick = function(){
	window.location.href = "pages-sign-in.html";
}
// sessionStorage 用于临时存储数据，数据会在关闭浏览器或标签页的时候会消失，在当前标签页进行跳转后还是可以获取跳转前设置的sessionStorage的值
// sessionStorage.setItem();
sessionStorage.setItem("beforeUrlParams", window.location.search); //将之前的信息(url中的变量)存储起来，打算做一个公用的js以方便跳转之后仍然使变量赋值生效
var changeMyImage = document.getElementById("changeMyImage"); // 上传文件的input按钮
var changeButton = document.getElementById("changeButton"); //更换图片按钮
var userImage = document.getElementById("userImage");//用户头像显示位置
var account_Image = document.getElementById("account_Image"); //导航栏用户头像
var information_userName = document.getElementById("information_userName"); //个人资料的名字
information_userName.innerHTML = userName;
// if(userInformation.split(":")[3] != undefined){
// 	userImage.src = userInformation.split(":")[3] + "" + userInformation.split(":")[4];
// }
changeButton.onclick = function(){ //点击自己设置的按钮时会触发表单的上传文件事件
	changeMyImage.click();
}

changeMyImage.onchange = function(e){ //onchange方法可判断用户是否上传了图片，如果上传了就显示图片，如果未上传，则返回undefined
	console.log(e.target.files[0]);
	var file = e.target.files[0];
	var reader = new FileReader();
	reader.onloadstart = function(){ //文件读取开始
		console.log("文件读取开始了")
	}
	reader.onloadend = function(){ //文件读取完毕后 onloadend事件用于处理文件上传结束后的操作
		console.log(reader.result);
		//下面的代码是可以实现的，但是由于浏览器的localStorage存储数据量不能太大，导致图像无法存储到里头，需要关联数据库才能做到下面的操作。
		// console.log(localStorage.getItem(urlParams.get("hashedlocalStorageKey")));
		// if(userInformation.split(":")[3] != undefined){
		// 	var temp = localStorage.getItem(urlParams.get("hashedlocalStorageKey"))
		// 	userinformation = temp.split(":")[0] + temp.split(":")[1] + temp.split(":")[2] + ":" + reader.result;
		// 	localStorage.setItem(urlParams.get("hashedlocalStorageKey"), userInformation);
		// 	console.log("用户上传过图片");
		// }else{
		// 	userInformation = localStorage.getItem(urlParams.get("hashedlocalStorageKey")) + ":" + reader.result;
		// 	localStorage.setItem(urlParams.get("hashedlocalStorageKey"), userInformation); //将用户上传的图片加载到localStorage中
		// 	console.log("用户没上传过图片");
		// }
		userImage.src = reader.result; //改变图片路径
		userImage.style.width = '128px'; //强制变形
		userImage.style.height = '128px';
		account_Image.src = reader.result;
		// 原本今天看到在上传过图片的input表单控件的value中存有文件的路径，就想着是不是可以存入localStorage中，下次直接指向对应的文件路径位置就好了？这样就解决了之前的文件过大的问题
		// 但是！现在又有新的问题，就是此上传按钮非彼上传按钮。表面上是上传文件用的，实际上只是一个类似于本地显示的功能，本身不具备下载和查看用户文件资源管理器的功能
		// 反正就是做这个功能就需要要其他语言进行联动处理，比如php,mysql,python
		// if(userInformation.split(":")[3] != undefined){ //曾经上传过头像
		// 	var temp = localStorage.getItem(urlParams.get("hashedlocalStorageKey")); //获取对应用户的相关信息
		// 	userinformation = temp.split(":")[0] + temp.split(":")[1] + temp.split(":")[2] + ":" + changeMyImage.value; //拼接一个全新的用户信息
		// 	localStorage.setItem(urlParams.get("hashedlocalStorageKey"), userInformation); //将原先的用户信息覆盖
		// 	console.log("用户上传过图片");
		// }else{ //上传过头像
		// 	userInformation = localStorage.getItem(urlParams.get("hashedlocalStorageKey")) + ":" + changeMyImage.value; //在原先的用户信息末尾添加信息
		// 	localStorage.setItem(urlParams.get("hashedlocalStorageKey"), userInformation); //将用户上传的图片加载到localStorage中
		// 	console.log("用户没上传过图片");
		// }
		console.log("文件读取结束了")
	}
	 reader.readAsDataURL(file);
}