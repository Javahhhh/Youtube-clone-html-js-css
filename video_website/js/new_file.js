			//轮播图
			var index = 0;
			 var slide = document.getElementsByClassName('slide');
			 var len = slide.length;
			 
			 function slideshow() {
			   slide[index].classList.remove("fade"); // 移除上一张图片的过渡效果
			   slide[index].style.display = "none"; // 隐藏上一张图片
			   index = (index + 1) % len; // 更新索引，取余确保循环切换
			   slide[index].style.display = "block"; // 显示当前图片
			   slide[index].classList.add("fade"); // 添加当前图片的过渡效果
			 setTimeout(slideshow, 10000); // 延迟10秒后再次调用slideshow函数
			 }
			 
			 setTimeout(slideshow, 10000); // 首次调用slideshow函数，延迟10秒
			 //上一个按钮
			 function last(){
			 	index--;
			 	if(index < 0){
			 		index = len - 1;
			 	}
			 	switchImage();
			 }
			 //下一个按钮
			 function next(){
			 	index++;
			 	if(index >= len){
			 		index = 0;
			 	}
			 	switchImage();
			 }
			 
			 function switchImage(){
			 	for (var i = 0; i < len; i++) {
			 		if(i === index){
			 			slide[i].style.display = "block";
			 			slide[i].classList.add("fade");
			 		}else{
			 			slide[i].style.display = "none";
			 			slide[i].classList.remove("fade");
			 		}
			 	}
			 }
			 
			 //上面是轮播图
			 
			 //收藏文章
			 var heart = document.getElementsByClassName('fa-heart-o');
			 var selectedIndex = -1;
			 var heartH3 = document.querySelectorAll('h3 a');
			 var heartContent = document.getElementsByClassName('mycollection');
			 var hearLink = [];
			 
			 for (let i = 0; i < heartH3.length; i++) {
			     hearLink.push(heartH3[i].getAttribute('href'));
			 }
			 
			 for (let i = 0; i < heart.length; i++) {
			     heart[i].addEventListener('click', function() {
			         selectedIndex = Array.prototype.indexOf.call(heart, this);
			         console.log('点击的图标索引为：', selectedIndex);
			         heart[selectedIndex].style.color = 'yellow';
			         heartContent[selectedIndex].innerHTML = heartH3[selectedIndex].innerHTML;
			         heartContent[selectedIndex].setAttribute('href', hearLink[selectedIndex]);
			     });
			 }

			 //上面是点击收藏收藏文章
			 //点击添加历史记录
			 var historClick = document.getElementsByClassName('myhistory');
			 for (let i = 0; i < heart.length; i++) {
			     heartH3[i].addEventListener('click', function() {
			         selectedIndex = Array.prototype.indexOf.call(heartH3, this);
			         console.log('点击的图标索引为：', selectedIndex);
			         
			         historClick[selectedIndex].innerHTML = heartH3[selectedIndex].innerHTML;
			         historClick[selectedIndex].setAttribute('href', hearLink[selectedIndex]);
			     });
			 }
			 //上面是点击添加历史记录
			 
			 //历史记录收藏消息下拉菜单
				 // 切换历史记录下拉菜单的显示状态
				  function toggleHistory() {
					
				    var historyContent = document.getElementById('history-content');
				    historyContent.style.display = historyContent.style.display === 'block' ? 'none' : 'block';
					
				  }
				
				  // 切换收藏下拉菜单的显示状态
				  function toggleColection() {
				    var collectionContent = document.getElementById('collection-content');
				    collectionContent.style.display = collectionContent.style.display === 'block' ? 'none' : 'block';
				  }
			
			
				  // 切换消息下拉菜单的显示状态
				  function togglemessage() {
				    var messageContent = document.getElementById('message-content');
				    messageContent.style.display = messageContent.style.display === 'block' ? 'none' : 'block';
				  }

			//历史记录收藏消息下拉菜单
			
			//添加新文章
			function openCreatePage() {
			  var articleList = document.getElementById('article-list');
			  var createWindow = window.open('写文章1.html', '_blank', 'width=500,height=400');
			  window.addEventListener('message', function(event) {
			    var packagedContent = event.data;
			    var content1 = packagedContent.content1;
			    var content2 = packagedContent.content2;
			    var content3 = packagedContent.content3;
			
			    // 在这里处理返回的内容，例如将其添加到页面中：
			    var newArticle = document.createElement('div');
			    newArticle.className = 'article';
			    newArticle.innerHTML = `
			      <img src="${content3}" alt="" class="article-left">
			      <div class="article-right">
			        <h3><a href="">${content1}</a></h3>
			        <p>${content2}</p>
			        <div class="article-module"></div>
			      </div>
			    `;
			
			    articleList.insertBefore(newArticle, articleList.firstChild);
			  });
			}
			//上面是添加文章
			
			//刷新
			/*刷新*/
			var titleIndex = 0; // 记录当前刷新到的标题组的索引，初始值为0
			var allTitles = [ // 所有的标题组，每个元素是一个新的标题数组
				["电影《红光》：循光向前，用信仰照亮未来",
					"《外太空的莫扎特》：打开成长的盲盒，窥见梦想的力量",
					"“诗性叙事”中回归的母爱——评电影《妈妈！》",
					"《人生大事》：用告别温暖生者，以温情治愈心灵",
					"《明日战记》：科幻片的壳，警匪片的核",
					"电影《高铁作证》：奔腾向前的中国速度"
				],
				["电影《农民院士》： 致敬时代楷模，把论文写在大地上",
					"极致真实！丨电影《你是我的春天》幕后故事",
					"写在人民奋斗征程中的崭新作品 ——评电影《安家》",
					"时代之“大”与人物之“小”——谈电影《柳浪闻莺》的改编",
					"《我心飞扬》：兼具体育精神与文学气质的励志电影",
					"《爱情神话》带给中国电影产业新启示"
				]
			];
			var linkUrls = [ // 所有的链接组，每个元素是一个新的链接数组
				["https://www.cflac.org.cn/ys/dy/yp/202211/t20221118_1265418.html",
					"https://www.cflac.org.cn/ys/dy/yp/202207/t20220726_1252983.html",
					"https://www.cflac.org.cn/ys/dy/yp/202210/t20221021_1262546.html",
					"https://www.cflac.org.cn/ys/dy/yp/202209/t20220905_1256553.html",
					"https://www.cflac.org.cn/ys/dy/yp/202208/t20220830_1255975.html",
					"https://www.cflac.org.cn/ys/dy/yp/202207/t20220713_1251650.html"
				],
				["https://www.cflac.org.cn/ys/dy/yp/202207/t20220726_1252984.html",
					"https://www.cflac.org.cn/ys/dy/yp/202207/t20220713_1251590.html",
					"https://www.cflac.org.cn/ys/dy/yp/202204/t20220421_590801.html",
					"https://www.cflac.org.cn/ys/dy/yp/202204/t20220413_589898.html",
					"https://www.cflac.org.cn/ys/dy/yp/202203/t20220311_586209.html",
					"https://www.cflac.org.cn/ys/dy/yp/202203/t20220301_584567.html"
				]
			];
			var titleContainer = document.getElementById("titleContainer");
			
			// 点击事件处理函数
			function handleClick() {
				var titles = titleContainer.getElementsByClassName("news-link");
			
				// 逐个移除原有标题
				Array.from(titles).forEach(function(title, index) {
					setTimeout(function() {
						title.style.opacity = 0;
						setTimeout(function() {
							titleContainer.removeChild(title);
						}, 500);
					}, index * 200);
				});
			
				// 清空容器
				titleContainer.innerHTML = "";
			
				// 获取下一组标题和对应的链接
				var newTitles = allTitles[titleIndex];
				var newLinkUrls = linkUrls[titleIndex];
				titleIndex = (titleIndex + 1) % allTitles.length;
			
				// 逐个添加新标题，并为每个标题添加链接
				newTitles.forEach(function(title, index) {
					var titleElement = document.createElement("a");
					titleElement.href = newLinkUrls[index]; // 使用对应组的链接数组中的链接
					titleElement.innerText = title;
					titleElement.className = "news-link";
					titleElement.style.opacity = 0;
					titleElement.style.transition = "opacity 0.5s";
					titleContainer.appendChild(titleElement);
			
					setTimeout(function() {
						titleElement.style.opacity = 1;
					}, index * 200);
				});
			
				titleContainer.style.opacity = 1;
			}
			//上面是刷新
			
			
			// 搜索
			
			
			// 搜索
			function search() {
			  var searchContent = document.getElementById('search-content');
			  var inputText = searchContent.value;
			  var titleElements = document.querySelectorAll('.article h3 a');
			  var resultsContainer = document.getElementById('search-results');
			
			  // 清空之前的搜索结果
			  resultsContainer.innerHTML = '';
			
			  // 遍历标题元素
			  for (var i = 0; i < titleElements.length; i++) {
			    var title = titleElements[i].textContent;
			    var link = titleElements[i].getAttribute('href');
			
			    // 判断标题是否匹配查询条件
			    if (title.toLowerCase().includes(inputText.toLowerCase())) {
			      var listItem = document.createElement('li');
			      var linkElement = document.createElement('a');
			      linkElement.setAttribute('href', link);
				  linkElement.setAttribute('target', '_blank');
			      linkElement.textContent = title;
			      listItem.appendChild(linkElement);
			      resultsContainer.appendChild(listItem);
			    }
			  }
			
			 
			   // 显示搜索结果容器
			   resultsContainer.style.display = 'block';
			   event.stopPropagation();
			 }
			 // 搜索框的输入事件处理函数
			 document.getElementById('search-content').addEventListener('input', function() {
			   search();
			 });
			 // 点击事件处理函数
			 function Click(event) {
			   var resultsContainer = document.getElementById('search-results');
			   if (!resultsContainer.contains(event.target)) {
			     resultsContainer.style.display = 'none';
			   }
			 }
			document.addEventListener('click', Click);
			
			
			
			