
			var articleImg=['../img/电影/万里归途.png',
			'../img/电影/特技英雄黄继光.png',
			'../img/电影/梅艳芳.png',
			'../img/电影/隐入尘烟.png',
			'../img/电影/点点星光.png',
			'../img/电影/你好，北京.png',
			'../img/电影/特技英雄黄继光.png'];
			var articleH3=['《万里归途》：主流叙事的一次细腻转型',
			'电影《特级英雄黄继光》：用生命捍卫祖国尊严',
			'电影《梅艳芳》：人与时代的精神共振',
			'善良勤劳与贫困搏战的人生告白——观电影《隐入尘烟》',
			'《点点星光》：儿童电影为乡村振兴画像立传',
			'电影《您好，北京》：聚焦“北漂”奋斗故事，描绘当代追梦人',
			'电影《特级英雄黄继光》：用生命捍卫祖国尊严'];
			var articleP=['近期，国庆档电影《万里归途》成为一部票房与口碑俱佳的电影，作为以外交官为主角的主旋律电影，挑战了外交官的传统形象，把动作电影的“燃炸”与文弱的外交官形象结合起来，是主旋律动作电影的新突破。相比《战狼2》...',
			'近年来，不少主旋律电影以精良的制作水平和鲜明的价值导向，赢得了观众口碑和市场表现双丰收，为主流文化传播和主流价值引领起到了良好示范效应。今年国庆期间上线播出的网络电影《特级英雄黄继光》，以精致光影再现红色经典，以真挚情感致敬英雄先烈，正是......',
			'电影《梅艳芳》采用年少成名、挫折与隐忍、涅槃重生“三段式”结构，通过刻画中国香港明星梅艳芳充满传奇又令人唏嘘的一生，再现了她对舞台的热爱和执着、对身边人的至情至性的爱，以及乐观地与命运抗争的奋斗精神。这种精神是伴随她成长、深入到她骨髓的自卑与要强激发的，也是她逆境涅槃、跳出自身局限、成就光彩人生的终极力量，更是...',
			'在一种文艺性很强，而一路人生更为震撼的叙事中，农村故事影片《隐入尘烟》带来一曲艰难生活中美丽人性的朴素赞歌，一段农民脱贫中勤奋努力与自为选择的力量反思。影片叙事体现了高度的电影化，充分运用镜头画面表达故事内容，语言对话极为简省。女主角曹贵英一开始就出现...',
			'文以载道和教化社会的观念在中国电影早期便根植于电影创作中。左翼电影时期，电影一直承载着教化观众和宣传进步思想的作用，我国的儿童电影作为一种类型也不例外。“十七年”时期由北京电影制片厂出品、崔嵬与欧阳红樱导演的《小兵张嘎》，以及上海天马制片厂出品、高衡导演的...',
			'聚焦“北漂”题材的电影《您好，北京》，讲述了一位创业中年人、一位快递员和一位年轻的歌手在北京奋斗生活的温暖励志感人故事，展现了平凡生活中的烟火气和当代国人积极向上的精神面貌。由中国影协指导、电影艺术杂志社主办的电影《您好，北京》研讨会日前在京举办...',
			'近年来，不少主旋律电影以精良的制作水平和鲜明的价值导向，赢得了观众口碑和市场表现双丰收，为主流文化传播和主流价值引领起到了良好示范效应。今年国庆期间上线播出的网络电影《特级英雄黄继光》，以精致光影再现红色经典，以真挚情感致敬英雄先烈，正是...'];
			
			var imgLink=document.querySelectorAll('.article a');
			var img=document.querySelectorAll('.article a img');
			var h3=document.querySelectorAll('h3 a');
			
			var p=document.querySelectorAll('p');
			
			function articleContent() {
			  for (var i = 0; i < h3.length; i++) {
			    img[i].setAttribute('src', articleImg[i]);
			    h3[i].innerHTML = articleH3[i];
			    p[i].innerHTML = articleP[i];
			  }
			}
			
			articleContent();