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
    }5
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

]
// console.log(youLikeitem)
/////////////猜你也喜歡////////////////
let youLikeitem = ''
const youLike = document.getElementById('youLike')
for (let i = 0; i < youLikeJson.length; i++) {
  youLikeitem += `<div class="index-box">
  <!-- //上// -->
  <div class="like-product">
   <i class="fa fa-heart-o" style="color:red;font-size:24px" id=""> </i>
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
</div>
`
}
youLike.innerHTML = youLikeitem

/////////////////歷史購買渲染///////////////
let historyitem = ''
const historyPurchase = document.getElementById('historyPurchase')
for (let i = 0; i < youLikeJson.length; i++) {
  historyitem += `<div class="index-box">
  <!-- //上// -->
  <div class="like-product">
   <i class="fa fa-heart-o" style="color:red;font-size:24px" id=""> </i>
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
   <i class="fa fa-heart-o" style="color:red;font-size:24px" id=""> </i>
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
xhr.open('get','http://192.168.50.139:8080/erp_dev_20210914/servlet/ImageRequest?login=0939116815&brandCode=T2&categoryType=0',true)
// xhr.open('get','https://hexschool.github.io/ajaxHomework/data.json',true)
//false就是他會等資料傳回來才讓程式碼繼續往下跑'
//用true了話xhr.responseText 跑不出來
//true:非同步就是你傳送資料過去後 他不會等資料傳回來，先跳過讓其他程式往下跑，等到回傳才會自動回傳
//那應該如何讓他跑呢
//open功能 格式 .要讀取的網址.同步與非同步
//格式get(讀取)那網址的資料 post(傳送資料到伺服器)
// readyStated 撈資料時的狀態
//0-已經生產一個xmlhttprequest 但還沒連結你要的資料
//1 -用了open 但資料還沒送出去
//2-偵測到你有send
//3.loading
//4.撈到內容了
//撈完資料會觸發onload
xhr.send(null)
//送出出資料 用null (因為我並沒有要傳送任何值 我只打算讀取任何資料)
//除非要和對方伺服器詢問一些事情 才需寫post
//如果要和後端伺服器問問題就用post(例如我問候端說，我現在傳送過去的帳密是否正確，後端會在回覆我是不是正確，就會回傳我一個字串，我在利用那個字串去做判斷)
console.log(xhr.responseText)
// 目前撈不到資料 因為他不會等前後端串接的資料傳好，他會直接些跳過
//那我該如何 設定在什麼情況才可以撈出資料呢?
// 用 onload 意思指當我確認他跑完以後 再去執行這個事件
xhr.onload=function(){
  console.log(xhr.responseText)
  let c=JSON.parse(xhr.responseText)
  // console.log(c[0].name)
  // const c3=document.getElementById('c3')
  
}

// post
// XMLDocument.setRequestHeader('content-type','application/x-www-form-urlencoded')
// xhr.send('em')







// 方法
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

