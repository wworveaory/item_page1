const changItem = document.querySelectorAll('.chang-phone-item')
const vipgroup = document.getElementById('vip-group')
const c3cgroup = document.getElementById('c3c-group')
const prettygroup = document.getElementById('pretty-group')
const bargroup = document.getElementById('bar-group')

console.log(changItem.length)
for (let i = 0; i < changItem.length; i++) {
  console.log(i)
  changItem[i].addEventListener('click', function (e) {
    console.log(i)
    if (i == 0) {
      console.log('0')
      vipgroup.style.display = 'block'
      prettygroup.style.display = 'none'
      c3cgroup.style.display = 'none'
      bargroup.style.display = 'none'
    }
    if (i == 1) {
      console.log('1')
      vipgroup.style.display = 'none'
      prettygroup.style.display = 'block'
      c3cgroup.style.display = 'none'
      bargroup.style.display = 'none'
    }
    if (i == 2) {
      console.log('2')
      vipgroup.style.display = 'none'
      prettygroup.style.display = 'none'
      c3cgroup.style.display = 'block'
      bargroup.style.display = 'none'
    }
    if (i == 3) {
      console.log('3')
      vipgroup.style.display = 'none'
      prettygroup.style.display = 'none'
      c3cgroup.style.display = 'none'
      bargroup.style.display = 'block'
    }
  })
}

//////////////////假json資料//////1///////////////
let youLikeJson = [
  {
    itemCName: 'mac',
    itemPrice: 777,
    itemInfo: '商品描述',
    photoUrl: '2020112414340059.jpg',
  },
  {
    itemCName: '小d',
    itemPrice: 777,
    itemInfo: '商品描述',
    photoUrl: '2020112414340059.jpg',
  },
  {
    itemCName: 'lara',
    itemPrice: 777,
    itemInfo: '商品描述',
    photoUrl: '2020112414340059.jpg',
  },
  {
    itemCName: 'lara',
    itemPrice: 777,
    itemInfo: '商品描述',
    photoUrl: '2020112414340059.jpg',
  },
]
// console.log(youLikeitem)
/////////////猜你也喜歡////////////////
let youLikeitem = ''
const youLike = document.getElementById('youLike')
for (let i = 0; i < youLikeJson.length; i++) {
  youLikeitem += `<div class="index-box">
  <!-- //上// -->
  <div class="like-product">
    <i class="fa fa-heart-o" style="color:red;font-size:24px" id=<%out.println(itemMap.get("itemCode"));%> </i>
  </div>
  <div class="index-box1-pic"><img id="" class="grid-view-item__image lazyautosizes ls-is-cached lazyloaded"
      alt="" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.7775"
      data-sizes="auto" data-image="" src="./images/img/2020112414340059.jpg" />
  </div>
  <!-- //下// -->
  <div class="index-box1-item">
    <div class="h4 grid-view-item__title product-card__title" aria-hidden="true">酒類10101</div>
    <div class="h4 grid-view-item__title product-card__title-1" aria-hidden="true">
      超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝!!</div>
    <a>加入收藏</a>
    <a>詢價</a>
  </div>
</div>`
}
youLike.innerHTML = youLikeitem

/////////////////歷史購買渲染///////////////
let historyitem = ''
const historyPurchase = document.getElementById('historyPurchase')
for (let i = 0; i < youLikeJson.length; i++) {
  historyitem += `<div class="index-box">
  <!-- //上// -->
  <div class="like-product">
    <i class="fa fa-heart-o" style="color:red;font-size:24px" id=<%out.println(itemMap.get("itemCode"));%> </i>
  </div>
  <div class="index-box1-pic"><img id="" class="grid-view-item__image lazyautosizes ls-is-cached lazyloaded"
      alt="" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.7775"
      data-sizes="auto" data-image="" src="./images/img/2020112414340059.jpg" />
  </div>
  <!-- //下// -->
  <div class="index-box1-item">
    <div class="h4 grid-view-item__title product-card__title" aria-hidden="true">酒類10101</div>
    <div class="h4 grid-view-item__title product-card__title-1" aria-hidden="true">
      超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝!!</div>
    <a>加入收藏</a>
    <a>詢價</a>
  </div>
</div>`
}
historyPurchase.innerHTML = historyitem

/////////////////推薦商品///////////////////
let recommendedItem = ''
const recommended = document.getElementById('recommended')
for (let i = 0; i < youLikeJson.length; i++) {
  recommendedItem += `<div class="index-box">
  <!-- //上// -->
  <div class="like-product">
    <i class="fa fa-heart-o" style="color:red;font-size:24px" id=<%out.println(itemMap.get("itemCode"));%> </i>
  </div>
  <div class="index-box1-pic"><img id="" class="grid-view-item__image lazyautosizes ls-is-cached lazyloaded"
      alt="" data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.7775"
      data-sizes="auto" data-image="" src="./images/img/2020112414340059.jpg" />
  </div>
  <!-- //下// -->
  <div class="index-box1-item">
    <div class="h4 grid-view-item__title product-card__title" aria-hidden="true">酒類10101</div>
    <div class="h4 grid-view-item__title product-card__title-1" aria-hidden="true">
      超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝超好喝!!</div>
    <a>加入收藏</a>
    <a>詢價</a>
  </div>
</div>`
}
recommended.innerHTML = recommendedItem
////////////////////////////////////////////////////////////////////////////////////


var xhr = new XMLHttpRequest();
// console.log(xhr)
// 方法
xhr.open('post','https://hexschool.github.io/ajaxHomework/data.json',true)
//open功能 格式 .要讀取的網址.同步與非同步
//格式get(讀取)那網址的資料 post(傳送資料到伺服器)
// readyStated
//0-已經生產一個xmlhttprequest 但還沒連結你要的資料
//1 -用了open 但資料還沒送出去
//2-偵測到你有send
//3.loading
//4.撈到內容了
//responseText要拿到資訊
// xhr.onreadystatechange = function(){
//     if(xhr.readyState === 4 ){
//         if(xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
//             console.log(xhr.responseText);
//         }
//     }
// }
// // 处理请求参数
// postData = {"name1":"value1","name2":"value2"};
// postData = (function(value){
// var dataString = "";
// for(var key in value){
//      dataString += key+"="+value[key]+"&";
// };
//   return dataString;
// }(postData));
// // 设置请求头
// xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
// // 异常处理
// xhr.onerror = function() {
//    console.log('Network request failed')
// }
// // 跨域携带cookie
// xhr.withCredentials = true;
// // 发出请求
// xhr.send(postData);

