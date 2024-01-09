var uploadButton = document.getElementById("uploadButton"); // 视频上传页按钮
var write_video_information = document.getElementById("write_video_information");  //视频详情
var information_submit = document.getElementById("information_submit"); //视频提交按钮
var information_quxiao = document.getElementById("information_quxiao"); // 取消按钮
var InsertImgComplete = document.getElementById("InsertImgComplete"); // 上传图片位置
var InsertVideoComplete = document.getElementById("InsertVideoComplete") //上传视频位置
var uploadImage = document.getElementById("uploadImage"); //视频封面上传按钮
var uploadVideo = document.getElementById("uploadVideo"); //视频上传按钮
var imageUploadInput = document.getElementById("imageUpload"); //上传视频封面表单控件
var uploadVideoInput = document.getElementById("videoUpload"); // 上传视频表单控件

//详情页的出现和消失
uploadButton.onclick = function(){ 
	write_video_information.style.display = 'block';
	var videoTitle = document.getElementById("videoTitle"); //标题
	var videoContent = document.getElementById("videoContent"); //描述
	videoTitle.onfocus = function(){
		if(videoTitle.value == "请输入标题"){
			videoTitle.value = "";
			videoTitle.style.color = 'black';
		}
	}
	videoTitle.onblur = function(){
		if(videoTitle.value == ''){
			videoTitle.value = '请输入标题';
			videoTitle.style.color = 'gray';
		}
	}
	
	videoContent.onfocus = function(){
		if(videoContent.value == "请留下对视频的描述"){
			videoContent.value = "";
			videoContent.style.color = 'black';
		}
	}
	videoContent.onblur = function(){
		if(videoContent.value == ''){
			videoContent.value = '请留下对视频的描述';
			videoContent.style.color = 'gray';
		}
	}
}

information_quxiao.onclick = function(){
	write_video_information.style.display = 'none';
}

uploadImage.onclick = function(){
	imageUploadInput.click();
}

//检测是否上传了视频封面
imageUploadInput.onchange = function(e){
	console.log("检测到有文件");
	console.log(e.target.files[0]);
	var file = e.target.files[0];
	var reader = new FileReader();
	reader.onloadstart = function(){
		console.log("开始读取文件");
		uploadImage.style.display = 'none';
	}
	
	reader.onloadend = function(){
		console.log(reader.result);
		console.log("文件读取结束");
		var img = document.createElement("img");
		img.src = reader.result;
		InsertImgComplete.appendChild(img);
		var close = document.createElement('div');
		close.innerText = "X";
		close.className = 'ImageCloseButton';
		close.id = 'ImageCloseButton';
		InsertImgComplete.appendChild(close);
		var close = document.getElementById('ImageCloseButton');
		close.onclick = function(){
			uploadImage.style.display = 'inline-block';
			// InsertImgComplete.children[0].style.display = 'none';
			img.remove();
			close.remove();
		}
		imageUploadInput.value = '';
	}
	reader.readAsDataURL(file);
	console.log("我被执行了");
	// console.log(imageUploadInput.value); //给出的是图片的绝对路径
}

uploadVideo.onclick = function(){
	uploadVideoInput.click();
}

//检测是否上传了视频
uploadVideoInput.onchange = function(e){
	console.log("检测到有文件");
	console.log(e.target.files[0]);
	var file = e.target.files[0];
	var reader = new FileReader();
	reader.onloadstart = function(){
		console.log("开始读取文件");
		uploadVideo.style.display = 'none'; //添加按钮消失
	}
	
	reader.onloadend = function(){
		console.log(reader.result);
		console.log("文件读取结束");
		var video = document.createElement("video");
		video.src = reader.result;
		InsertVideoComplete.appendChild(video);
		var close = document.createElement('div');
		close.innerText = "X";
		close.className = 'VideoCloseButton';
		close.id = 'VideoCloseButton';
		InsertVideoComplete.appendChild(close);
		var close = document.getElementById('VideoCloseButton');
		close.onclick = function(){
			uploadVideo.style.display = 'inline-block';
			// InsertVideoComplate.children[0].style.display = 'none';
			video.remove();
			close.remove();
		}
		uploadVideoInput.value = ''; //上传完毕后将原来表单存有的路径清空以便下次上传和上次相同的文件不会不执行
	}
	reader.readAsDataURL(file);
	console.log("我被执行了");
}

information_submit.onclick = function(){
	var videoTitle = document.getElementById("videoTitle"); //标题
	var videoContent = document.getElementById("videoContent"); //描述
	if(videoTitle.value == '' || videoTitle.value == '请输入标题'){
		alert("未填写标题");
	}else if(videoContent.value == ''){
		alert("未填写内容");
	}else if(InsertImgComplete.innerHTML == "" || uploadImage.style.display != 'none' ){
		console.log(InsertImgComplete.innerHTML == "");
		console.log(uploadImage.style.display !== 'none');
		alert("图片未上传");
	}else if(InsertVideoComplete.innerHTML == ""|| uploadVideo.style.display != 'none'){
		console.log(InsertVideoComplete.innerHTML == "");
		console.log(uploadVideo.style.display !== 'none');
		alert("视频未上传");
	}else{
		console.log("提交条件满足");
		// var div = document.createElement("div");
		// div.className = 
	}
}
