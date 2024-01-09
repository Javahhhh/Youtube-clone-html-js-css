// const Userinformation = new URLSearchParams(window.location.search);//截取?号后的信息
// console.log(Userinformation.get("hashedlocalStorageKey"));
// var nowurl = sessionStorage.getItem("beforeUrlParams");
// console.log(nowurl)
if(sessionStorage.getItem("beforeUrlParams") !== null){//判断之前是否存储过url中的用户信息
	// const beforeUrl = sessionStorage.getItem("beforeUrlParams");//获取用户信息
	const Userinformation = new URLSearchParams(sessionStorage.getItem("beforeUrlParams")); //获取用户信息
	// console.log(Userinformation)
	const WhichUser = Userinformation.get("hashedlocalStorageKey");//截取数据
	// console.log(WhichUser);
	var nowurl = new URLSearchParams(window.location.search);
	console.log(nowurl);
	console.log(window.location.href);
	//				下列代码由于无论如何都会执行一次跳转，所以会反复判断反复跳转，要改！ 现在需要思考的是是否需要考虑url已经存在？号后的数据
	// 想了想，跳转后url应该绝对是不存在的，因为跳转的时是使用的开发者的地址，而现在要做的只是让这个url补充上数据而已
	var account_name = document.getElementById("account_name"); //个人资料的名字
	account_name.innerHTML = localStorage.getItem(WhichUser).split(":")[2];
	if(nowurl.get("hashedlocalStorageKey") == null){ //当跳转页面后url没有js文件需要的数据时需要改变url
		console.log("没找到用户信息哦")
		// console.log(window.location.href);
		// console.log(window.location.search);
		window.location.href = window.location.href + "?" + Userinformation;
	}
}else{
	alert("没找到之前存储过的用户信息，你是不是直接进的主页啊，请登录后再回来！");
	window.location.href = "pages-sign-in.html";
}
