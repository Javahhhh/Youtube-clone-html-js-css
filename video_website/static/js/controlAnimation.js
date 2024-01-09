var lis = document.getElementsByClassName("choose_text")[0].getElementsByTagName("li");
var show_div = document.getElementsByClassName("choose_show")[0].children;
var returnButton = document.getElementsByClassName("return");
for(var i = 0; i < lis.length; i++){
	lis[i].setAttribute('index',i);
	lis[i].onclick = function(){
		var index = this.getAttribute('index');
		// console.log(lis[0]);
		// console.log(lis[i]);
		// console.log(this);
		// console.log(index);
		// console.log(this.getAttribute('index'))
		if(index == 0){
			// console.log(index);
			show_div[parseInt(index) + 1].style.marginLeft = "-450px";
		}else if(index == 1){
			// console.log(index);
			show_div[parseInt(index) + 1].style.marginLeft = "-900px";
		}else if(index == 2){
			// console.log(index);
			show_div[parseInt(index) + 1].style.marginLeft = "-1350px";
		}
	}
}

for(var i = 0; i < returnButton.length; i++){
	returnButton[i].parentNode.setAttribute('index', i);
	returnButton[i].onmousedown = function(){
		this.style.backgroundColor = 'rgba(0,0,0,0.3)';
	}
	
	returnButton[i].onmouseenter = function(){
		this.style.backgroundColor = 'rgba(0,0,0,0.2)';
	}
	
	returnButton[i].onmouseleave = function(event){
		this.style.backgroundColor = 'white';
	}
	
	
	
	returnButton[i].onclick = function(){
		// console.log(this.parentNode)
		var index = this.parentNode.getAttribute('index');
		if(index == 0){
			console.log(show_div[index]);
			show_div[parseInt(index) + 1].style.marginLeft = "0px";
		}else if(index == 1){
			console.log(show_div[index]);
			show_div[parseInt(index) + 1].style.marginLeft = "0px";
		}else if(index == 2){
			console.log(show_div[index]);
			show_div[parseInt(index) + 1].style.marginLeft = "0px";
		}
	}
}