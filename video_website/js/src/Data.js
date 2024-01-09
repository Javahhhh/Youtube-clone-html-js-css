let shopItemsData = [
    {
      id: "1",
      name: "休闲衬衫",
      price: 45,
      desc: "法曼斯长袖翻领免烫百搭衬衣 灰色",
      img: "images/img-1.jpg",
    },
    {
      id: "2",
      name: "商务衬衫",
      price: 100,
      desc: "男士春季工装正装职业上衣服衬衣.",
      img: "images/img-2.jpg",
    },
    {
      id: "3",
      name: "T Shirt",
      price: 25,
      desc: "纯棉短袖2022夏季青年半袖打底衫百搭潮流.",
      img: "images/img-3.jpg",
    },
    {
      id: "4",
      name: "西服正装",
      price: 300,
      desc: "23秋新轻商务经典系列职场婚礼.",
      img: "images/img-4.jpg",
    },
	
	
	{
	  id: "5",
	  name: "燃气热水器",
	  price: 25,
	  desc: "燃气热水器零冷水天然气16升一级能效冷凝 节能省气30% 水量伺服恒温增压JSLQ27-WMLS5W16小体积降噪.",
	  img: "images/img-5.jpg",
	},
	{
	  id: "6",
	  name: "手机壳",
	  price: 25,
	  desc: "苹果14ProMax手机壳iPhone14promax保护套MagSafe磁吸充电透明全包防摔简约款 透紫 .",
	  img: "images/img-6.jpg",
	},
	{
	  id: "7",
	  name: "酒",
	  price: 25,
	  desc: "珍酒佳品经典 53度酱香型白酒500ml*1单瓶装 酒中珍品 珍贵酱香口粮酒.",
	  img: "images/img-7.jpg",
	},
	{
	  id: "8",
	  name: "耳机",
	  price: 25,
	  desc: "S35 ANC头戴式耳机 42dB深度降噪跑步运动音乐无线蓝牙耳机 有线带麦克风电竞耳机.",
	  img: "images/img-8.jpg",
	},
	
	
	{
	  id: "9",
	  name: "蓝色墨镜",
	  price: 25,
	  desc: "男士气质偏光太阳镜显瘦防紫外线开车镜个性 黑框黑灰片,近视可戴太阳镜 偏光眼镜近视.",
	  img: "images/img-9.jpg",
	},
	{
	  id: "10",
	  name: "条纹包包",
	  price: 25,
	  desc: "途尊（kingtrip）春夏欧美时尚手提包女包休闲百搭手拎包轻便上班小包 深蓝.",
	  img: "images/img-10.jpg",
	},
	{
	  id: "11",
	  name: "打字机",
	  price: 25,
	  desc: "复古怀旧系列兼容乐高难度微颗粒拼装模型积木玩具 复古黑打印机【1136】.",
	  img: "images/img-11.jpg",
	},
	{
	  id: "12",
	  name: "汉堡",
	  price: 25,
	  desc: "早餐老北京奥尔良速食微波炉加热即食 奥尔良鸡腿堡*5.",
	  img: "images/img-12.jpg",
	},
  ];
  
  // 本地存储
  const storedShopItemsData = localStorage.getItem('shopItemsData')
  
  // 将 shopItemsData 数组转换为 JSON 字符串并存储到 localStorage
  if (!storedShopItemsData) {
    localStorage.setItem('shopItemsData', JSON.stringify(shopItemsData))
  }
  
  // 从 localStorage 加载数据并将其转换回数组
  // const loadedShopItemsData = JSON.parse(localStorage.getItem('shopItemsData'))
  // console.log(loadedShopItemsData)