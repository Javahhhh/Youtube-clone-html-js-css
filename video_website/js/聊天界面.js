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
		    // 获取元素
		    const messageInput = document.getElementById('message-input');
		    const sendButton = document.getElementById('send-button');
		    const chatMessages = document.getElementById('chat-messages');
		    
		    // 发送按钮点击事件
		    sendButton.addEventListener('click', () => {
		      sendMessage();
		    });
		    
		    // 输入框回车键按下事件
		    messageInput.addEventListener('keydown', (event) => {
		      if (event.key === 'Enter') {
		        sendMessage();
		      }
		    });
		    
		   function sendMessage() {
		     const message = messageInput.value;
		   
		     if (message.trim() !== '') {
		       const messageElement = document.createElement('div');
		       messageElement.classList.add('sent');
		   
		       const contentElement = document.createElement('div');
		       contentElement.textContent = message;
		       contentElement.classList.add('sent-message');
		       messageElement.appendChild(contentElement);
		   
		       const avatarElement = document.createElement('img');
		       avatarElement.src = '../img/电影/梅艳芳.png';
		       avatarElement.alt = '自己的头像';
		       avatarElement.classList.add('sent-img');
		       messageElement.appendChild(avatarElement);
		   
		       chatMessages.appendChild(messageElement);
		       chatMessages.scrollTop = chatMessages.scrollHeight;
		   
		       messageInput.value = '';
		     }
		   }

		  