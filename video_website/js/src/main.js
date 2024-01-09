let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];
console.log("main"+basket)

//shopItemsData.map((x),为什么会有map,,,对数组中的每个空对象执行一次提供的函数，并返回一个新的数组
//对象解构赋值,将x对象中的id、name、price、desc、img属性分别赋值给五个新的变量（id、name、price、desc、img）。

let generatrShop = () =>{
    return (shop.innerHTML = shopItemsData.map((x)=>{
        let {id,name,price,desc,img} = x;
        let search = basket.find((x) => x.id ===id) || [];
        return  `
        <div id=product-id-${id} class="item" style="display: block">
            <img width="220" src=${img} alt="">
            <div class="details">
              <h3 id=product-id-${id}-3>${name}</h3>  
              <p>${desc}</p>
              <div class="price-quantity">
                <h2>$ ${price} </h2>
                <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                  <div id=${id} class="quantity">
                  ${search.item === undefined ? 0 : search.item}
                  </div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
              </div>
            </div>
			
			<select id="twoaction" name="action" onchange="handleActionChange('product-id-${id}',this)">
			    <option value="emem">...</option>
			    <option value="delete">删除</option>   
			    <option value="update">修改</option>
			</select>
          </div>
          `;
    }).join(""));
};

generatrShop();



// 定义一个函数来处理onchange事件
function handleActionChange(elementId, selectElement) {    
  const selectedValue = selectElement.value;  
    
  if (selectedValue === "delete") {    
    deleteProduct(elementId);    
  } else if (selectedValue === "update") {    
   updateProduct(elementId); 
  }    
}  
  
// 删除产品    
function deleteProduct(elementId) {  
	console.log(elementId)
  var element = document.getElementById(elementId);    
  element.parentNode.removeChild(element);    
}

//更新产品
function updateProduct(elementId) {  
    // 获取需要操作的div元素  
    var floatDiv = document.getElementById('updatefloat');  
    // 将display属性设置为'block'，使该元素变为可视  
    floatDiv.style.display = 'block';  
	document.getElementById("update").addEventListener("click", function () {
			// var filesInput = document.getElementById("files");
			var goodsNameInput = document.getElementsByName("goodsname")[0];
			var describeInput = document.getElementsByName("describe")[0];
			var priceInput = document.getElementsByName("price")[0];
			console.log(goodsNameInput.value);
			console.log(elementId);

			//更新的关键步骤
			document.getElementById(elementId + '-3').textContent = goodsNameInput.value;  
			// document.querySelector('#elementId .details p').innerHTML = describeInput.value;
			// document.querySelector('#elementId .price-quantity h2').innerHTML = priceInput.value;
			
		let updatefile = document.getElementById('updatefile')
		 let update_imgs = document.getElementById('update_imgs')
		update_imgs.src = URL.createObjectURL(updatefile.files[0]);
		 //查找div的id
		 let productIdDiv = document.getElementById(elementId);
		 console.log("要更新的id"+productIdDiv);
		 if (productIdDiv) {
		     let imgElement = productIdDiv.querySelector('img');
		     if (imgElement) {
		       imgElement.src = update_imgs.src;
		     }
		   }	
		});		
}


//更新商品
let update_imgs = document.getElementById('update_imgs')
updatefile.onchange = function(){
	update_imgs.src =URL.createObjectURL(this.files[0])
	console.log("更新图片路径"+update_imgs.src);
}

// 取消浮动	
document.getElementById('cancle').addEventListener('click', function() {  
    document.getElementById('updatefloat').style.display = 'none';  
});


function increment(id) {
    let selectedItem = basket.find((x) => x.id === id);
    
    if (selectedItem === undefined) {
        basket.push({ id, item: 1 });
    } else {
        selectedItem.item += 1;
    }
    
    update(id);
    localStorage.setItem("basket", JSON.stringify(basket));
}

function decrement(id) {
    let selectedItem = basket.find((x) => x.id === id);
    
    if (selectedItem !== undefined && selectedItem.item > 0) {
        selectedItem.item -= 1;
        
        if (selectedItem.item === 0) {
            basket = basket.filter((x) => x.id !== id);
        }
    }
    
    update(id);
    localStorage.setItem("basket", JSON.stringify(basket));
}

function update(id) {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
}

localStorage.clear();
function calculation() {
    let cartIcon = document.getElementById("cartAmount");
	localStorage.clear();
	let total = basket.reduce((x, y) => {
	    console.log('x:', x);
	    return x + y.item;
	}, 0);
	console.log('Total:', total);
	cartIcon.innerHTML = total;
    // cartIcon.innerHTML = basket.reduce((x, y) => x + y.item, 0);
}




// 搜索
const searchButton = document.querySelector('.search-form .search-button');

searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // 阻止默认提交行为
	console.log("点击成功")
	let searchInput = document.getElementById('searchInput').value;
	console.log("搜索词为："+searchInput)
	if (searchInput) {
	    shopData = shopItemsData.filter(item => item.name.includes(searchInput));
	    console.log(shopData);
		
		document.getElementById('shop').innerHTML = '';
	//代码复用	
		let htmlArray = shopData.map((item) => {    
		    // 使用解构赋值提取 item 的属性  
		    let {id, name, price, desc, img} = item;  
		    // 返回一个 HTML 字符串  
		    return `    
		        <div id=product-id-${id} class="item" style="display: block">    
		            <img width="220" src=${img} alt="">    
		            <div class="details">    
		                <h3 id=product-id-${id}-3>${name}</h3>      
		                <p>${desc}</p>    
		                <div class="price-quantity">    
		                    <h2>$ ${price} </h2>    
		                    <div class="buttons">    
		                        <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>    
		                        <div id=${id} class="quantity">    
		                            
		                        </div>    
		                        <i onclick="increment(${id})" class="bi bi-plus-lg"></i>    
		                    </div>    
		                </div>    
		            </div>    
		     
		            <select id="twoaction" name="action" onchange="handleActionChange('product-id-${id}',this)">    
		                <option value="emem">...</option>    
		                <option value="delete">删除</option>       
		                <option value="update">修改</option>    
		            </select>    
		        </div>    
		    `;    
		});  
		  
		// 将生成的 HTML 字符串赋值给 shop 的 innerHTML  
		shop.innerHTML = htmlArray.join('\n');
		}  
		 else {
	    console.log("请输入搜索词");
	  }
	 document.getElementById('searchInput').value = '';
});



//添加按钮--悬浮窗
var floatDiv = document.getElementById('float');
        var controlButton = document.getElementById('control-button');
        controlButton.addEventListener('click', function() {
            if (floatDiv.style.display === 'none') {
                floatDiv.style.display = 'block';
            } else {
                floatDiv.style.display = 'none';
            }
        });

//添加功能--上传照片--上传商品信息
document.getElementById("uploadBtn").addEventListener("click", function () {
    let goodsName = document.getElementById("goodsname").value;
    let describe = document.getElementById("describe").value;
    let price = document.getElementById("price").value;

	console.log(goodsName);
	console.log(describe);
	console.log(price);
	
    // 获取文件输入元素
   let files = document.getElementById('files')
   let imgs = document.getElementById('imgs')
  imgs.src = URL.createObjectURL(files.files[0]);  
      console.log("图片路径"+imgs.src );  
    
      let infoString = `<div id="product-id-" class="item">  
          <img width="220" src="${imgs.src}" alt="">  
          <div class="details">  
          <h3>${goodsName}</h3>  
          <p>${describe}</p>  
          <div class="price-quantity">  
          <h2>${price} </h2>  
          <div class="buttons">  
          <i onclick="decrement()" class="bi bi-dash-lg"></i>  
          <div id="" class="quantity"></div><ionclick="increment()" class="bi bi-plus-lg"></i>  
          </div>  
          </div>  
          </div>  
          <select id="twoaction" name="action" onchange="deleteProduct('product-id-')">  
              <option value="emem">...</option>  
              <option value="delete">删除</option>     
              <option value="update">修改</option>  
          </select>  
          </div>`;    
      const demoDiv = document.getElementById("shop");  
      const newNode = document.createElement('div');  
      newNode.innerHTML = infoString;  
      demoDiv.appendChild(newNode);  
  });

let files = document.getElementById('files')
//显示图片
let imgs = document.getElementById('imgs')
files.onchange = function(){
	imgs.src =URL.createObjectURL(this.files[0])
	console.log(imgs.src);
}