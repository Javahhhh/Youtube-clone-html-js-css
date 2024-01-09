
let label = document.getElementById("label");
let ShoppingCart = document.getElementById("shopping-cart");
//从本地存储获得
let basket = JSON.parse(localStorage.getItem("basket")) || [];
console.log(basket);

let calculation = () => {
    let cartIcon = document.getElementById("cartAmount2");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

let generateCartItems = () => {
	
    if (basket.length !== 0) {
        return (ShoppingCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = shopItemsData.find((y) => y.id === String(id)) || [];		
            return `
            <div class="cart-item">
             <img width="100" src="${search.img}" alt=""/>
              <div class="details">
                <div className="title-price-x">
                  <h4 class="title-price">
                    <p>${search.name}</p>                  
				  </h4>
                  <i onclick="removeItem(${id})" class="bi bi-x-lg"></i> 
                </div>
                <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
				 <div id=${id} class="quantity">0</div>
				  <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                </div>
                <h3 id=${id}>$${item * search.price}</h3>
              </div>
            </div>
			
            `;
        }).join(""));
		
    } else {
        ShoppingCart.innerHTML = ``;
        label.innerHTML = `
          <h2>购物车空了</h2>
          <a href="index.html">
            <button class="HomeBtn">回到首页</button>
          </a>
        `;
    }
	
};

generateCartItems();

let increment = (id) =>{
    let selectedItem = id;
    let search = basket.find((x) =>x.id ===selectedItem.id);

    if (search === undefined) {
        basket.push({
            id:selectedItem.id,
            item:1,
        });
    } else {
        search.item += 1;
    }

    generateCartItems();
    updata(selectedItem.id);
    localStorage.setItem("data",JSON.stringify(basket));
    
};
let decrement =(id) =>{
    let selectedItem = id;
    let search = basket.find((x) =>x.id ===selectedItem.id);

    if (search.item === 0) return;
     else if (search.item ===0) return;
     else {
        search.item -= 1;
    }
    updata(selectedItem.id);
    basket = basket.filter((x)=>x.item !==0);
    localStorage.setItem("data",JSON.stringify(basket));
};
let updata=(id) =>{
    let search =basket.find((x) =>x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculation();
    TotalAmount();
};

//移除全部
let clearCart =() =>{
    basket = [];
    generateCartItems();
    localStorage.setItem("data",JSON.stringify(basket));
};

let removeItem =(id) =>{
    let selectedItem =id;
    basket = basket.filter((x) =>x.id !==selectedItem.id);
    generateCartItems(); 
    TotalAmout();
   
    localStorage.setItem("data",JSON.stringify(basket));

}

let TotalAmout = ()=>{
    if(basket.length !==0){
        let amount =basket.map( (x) =>{
            let {item,id} = x;
            let search =shopItemsData.find((y) =>y.id===String(id)) || [];
            return item*search.price;
        }).reduce((x,y) =>x+y,0);
        
		label.innerHTML =`
        <h2 id="h2amount">总价：$${amount}</h2>
        <button class="checkout" id="checkout">买单</button>
        <button onclick = "clearCart" class="removeAll">移除全部</button>
        `;
    }
    else return;
};
TotalAmout(); 

 var checkoutButton = document.getElementById('checkout');   
  checkoutButton.addEventListener('click', function() {  
  // 创建确认框  
  var confirmBox = window.confirm("您确定要支付吗？");  
   window.alert("支付成功！");
	removecart();
}); 
//支付过后清除卡片
function removecart() {  
  // 获取所有的 cart-item div  
  var cartItems = document.getElementsByClassName('cart-item');    
  // 循环遍历每个 cart-item div 并移除  
  for (var i = cartItems.length - 1; i >= 0; i--) {  
    cartItems[i].parentNode.removeChild(cartItems[i]);  
  }  
	var h2Element = document.getElementById('h2amount');  	
	
	h2Element.textContent = '总价：$' + 0;
	
}