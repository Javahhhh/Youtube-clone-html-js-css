 const showMenu = (headerToggle, navbarId) => {
     const toggleBtn = document.getElementById(headerToggle),
         nav = document.getElementById(navbarId)

     if (headerToggle && navbarId) {
         toggleBtn.addEventListener('click', () => {
             nav.classList.toggle('show-menu')
             toggleBtn.classList.toggle('fa-times')
         })
     }
 }
 showMenu('header-toggle', 'navbar')

 const linkcolor = document.querySelectorAll('.nav_link');

 function colorLink() {
     linkcolor.forEach(l => l.classList.remove('active'))
     this.classList.add('active')
 }
 linkcolor.forEach(l => l.addEventListener('click', colorLink))

 // ----------------------------------------------------------------------------------------------
 // ----------------------------------------------------------------------------------------------
 // ----------------------------------------------------------------------------------------------
 // ----------------------------------------------------------------------------------------------

 window.onload = function() {
     //搜索框实现
     //-------------------------------------------------------------------
     var searchList = ["王者荣耀&nbsp;100次", "刺激战场", "英雄联盟", "全军出击", "地下城勇士","核废水","德川家康","NBA","普京","Java","特朗普","美国","金正恩"];
	 
     var oul = document.getElementById("conter");
     for (var i = 0; i < searchList.length; i++) {
         let oli = document.createElement("li");
         oli.innerHTML = '<a href="single-page.html">' + searchList[i] + '</a>';
         oul.appendChild(oli);
     }
	
     let modal = document.querySelector('.modal')
     let searchInput = document.querySelector('#searchInput')
     let conter = document.querySelector('#conter')
     let seek = document.querySelector('#seek')

     searchInput.addEventListener('click', () => {
         document.querySelector('.search').style.border = '1px solid skyblue';
         modal.classList.add('show')
         conter.style.display = ''
     })

     window.onclick = () => {
         if (event.target.tagName != 'UL' && event.target.tagName != 'LI' && event.target != modal && event.target != searchInput && event.target != seek) {
             console.log(event.target.tagName);
             document.querySelector('.search').style.border = '';
             modal.classList.remove('show');
             conter.style.display = 'none';
         }
     }

     seek.onclick = function() {
         //获取input框的value值
         var inputcom = searchInput.value;
         //定义新数组，保存符合搜索内容要求的数据
         var a = [];
         var k = 0;
         //循环判断符合要求的数据
         for (var j = 0; j < searchList.length; j++) {
             //数据中不包含搜索内容值的返回-1
             if (searchList[j].indexOf(inputcom) != -1) {
                 a[k++] = searchList[j];
             }
         }
         //清空ul里面的内容
         conter.innerHTML = "";
         //循环将数据输出到ul下
         for (var p = 0; p < a.length; p++) {
             //创建li
             let oli = document.createElement("li");
             //定义li里的内容
             oli.innerHTML = '<a href="single-page.html">' + a[p] + '</a>';
             //将li添加到ul里
             oul.appendChild(oli);
         }
		 
         searchInput.click()
		 
     }

     //------------------------------------------------------------------------------------------
     //点赞...功能实现
     const icon_button = document.querySelectorAll('.flex2 .icon')

     icon_button.forEach(icon => {
         icon.addEventListener('mouseover', () => {
             icon.style.color = 'red'
         })

         icon.addEventListener('mouseout', () => {
             icon.style.color = ''
         })

         icon.onclick = () => {
             if (icon == icon_button[0]) {
                 if (icon_button[1].classList.contains('active')) {
                     return
                 }
             }

             if (icon == icon_button[1]) {
                 if (icon_button[0].classList.contains('active')) {
                     return
                 }
             }

             if (icon == icon_button[4]) {
                 return
             }
             icon.classList.toggle('active')
         }
     })


     //--------------------------------------------------------------------
     //评论区功能

     //赞踩
     let likeOrDislike = () => {
         let details_CommentArry = document.querySelectorAll('.details_Comment')
         details_CommentArry.forEach(details_Comment => {
             let iconArry = details_Comment.querySelectorAll('.comment-like .icon');
             iconArry.forEach(icon => {
                 icon.addEventListener('mouseover', () => {
                     icon.style.color = 'red'
                 });

                 icon.addEventListener('mouseout', () => {
                     icon.style.color = ''
                 })

                 icon.onclick = () => {
                     if (icon == iconArry[0]) {
                         if (iconArry[1].classList.contains('active')) {
                             return
                         }
                         if (!icon.classList.contains('active')) {
                             let likeNum = parseInt(icon.querySelector('label').textContent)
                             icon.querySelector('label').innerHTML = likeNum + 1
                         } else {
                             let likeNum = parseInt(icon.querySelector('label').textContent)
                             icon.querySelector('label').innerHTML = likeNum - 1
                         }
                     }

                     if (icon == iconArry[1]) {
                         if (iconArry[0].classList.contains('active')) {
                             return
                         }
                     }

                     if (icon == iconArry[2]) {
                         return
                     }
                     icon.classList.toggle('active')
                 }
             })

             //-------------------------------------
             iconArry[2].onclick = () => {
                 console.log(iconArry[2].classList.contains('open'));
                 if (!iconArry[2].classList.contains('open')) {
                     iconArry[2].classList.add('open')
                     let replay_modal = document.createElement("div");
                     replay_modal.classList.add('details', 'comment_self', 'flex', 'replay-modal')
                     replay_modal.innerHTML =
                         `
                    <div class="img" style="width: 40px; height: 40px;">
                        <img class="subscribe" src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png">
                    </div>
                    <div class="heading">
                        <input class='replay_text' type="text " placeholder="Add a comment.... ">
                        <button class='replay_submit' type="submit ">Submit</button>
                    </div>
                        `
                     details_Comment.append(replay_modal)


                     //-------------------------------------
                     details_Comment.querySelector('.replay-modal .replay_submit').addEventListener('click', () => {
                             let replay_new_text = details_Comment.querySelector('.replay_text')
                             let replay_new_comment = document.createElement('div')
                             replay_new_comment.classList.add('replay-details', 'flex')
                             replay_new_comment.innerHTML =
                                 `
                            <div class="img">
                                <img class="subscribe" src="https://img.icons8.com/external-victoruler-flat-victoruler/64/000000/external-boy-occupation-and-people-victoruler-flat-victoruler.png">
                            </div>
                            <div class="text">
                                <h4> <label>GorkCoder</label> <span>....秒前</span> </h4>
                                <p>${replay_new_text.value}</p>
                            </div>
                             `
                             details_Comment.querySelector('.replay').append(replay_new_comment);
                             replay_new_text.value = ''
                             iconArry[2].classList.remove('open')
                             details_Comment.querySelector('.replay-modal').remove()
                         })
                         //------------------------------------
                 } else {
                     iconArry[2].classList.remove('open')
                     details_Comment.querySelector('.replay-modal').remove()
                 }
             }

         })
     }
     likeOrDislike()

     //----------------------------------------------------------------
     //回复显示||回复
     let replayShowOrHide = () => {
         let show_commentsArry = document.querySelectorAll('.show_comments .details_Comment')
         console.log(show_commentsArry);
         show_commentsArry.forEach((show_comment) => {
             let tagArry = show_comment.querySelectorAll('.tags')
             tagArry.forEach((tag) => {
                 tag.addEventListener('mouseover', () => {
                     tag.style.color = 'red'
                 })
                 tag.addEventListener('mouseout', () => {
                     tag.style.color = ''
                 })

                 //显示隐藏
                 tag.addEventListener('click', () => {
                     if (tag == tagArry[0]) {
                         tagArry[0].classList.add('change')
                         show_comment.querySelector('.replay').classList.remove('change')
                     }
                     if (tag == tagArry[1]) {
                         tagArry[0].classList.remove('change')
                         show_comment.querySelector('.replay').classList.add('change')
                     }
                 })
             })
         })
     }
     replayShowOrHide()

     //----------------------------------------------------------------
     //评论
     let show_commentsEle = document.querySelector('.show_comments')
     let commentEle = document.querySelector('#comment')
     let summitEle = document.querySelector('#submit')
     console.log(show_commentsEle.querySelectorAll('.details_Comment')[0]);
     console.log(commentEle);
     console.log(summitEle);

     summitEle.onclick = () => {
         let text = commentEle.value

         let newComment = document.createElement("div");
         newComment.classList.add('details_Comment', 'no-replay')

         newComment.innerHTML =
             `
        <div class="details flex">
            <div class="img">
                <h1>M</h1>
            </div>
            <div class="heading">
                <h4>Matheus Silva <span>...秒前</span> </h4>
                <p>${text}</p>
                <div class="comment-like flex">
                    <div class="icon">
                        <i class="fa fa-thumbs-up"></i>
                        <label>0</label>
                    </div>
                    <div class="icon">
                        <i class="fa fa-thumbs-down"></i>
                        <label>DISLIKE</label>
                    </div>
                    <div class="icon">
                        <label>REPLY</label>
                    </div>
                </div>
                <label class="tags"> <i class="fa fa-caret-down"> </i> View Replay From GorkCoder </label>
            </div>
        </div>
        <div class="replay change">
            <label class="tags"> <i class="fa fa-caret-up"></i> Hide Reply </label>
        </div>
            `
         show_commentsEle.insertBefore(newComment, show_commentsEle.firstElementChild);
         commentEle.value = ''
         likeOrDislike()
         replayShowOrHide()
     }
 }