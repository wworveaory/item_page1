body,h1,h2,h3,h4,h5 {font-family: &quot;Raleway&quot;, sans-serif}

function getRequests() {
    var s1 = location.search.substring(1, location.search.length).split('&'),
        r = {}, s2, i;
    for (i = 0; i < s1.length; i += 1) {
        s2 = s1[i].split('=');
        r[decodeURIComponent(s2[0]).toLowerCase()] = decodeURIComponent(s2[1]);
    }
    return r;
};
var QueryString = getRequests();



function showPrice(id){
	var priceHidden = document.getElementById("price-hidden-"+id);categoryType
	var priceShow = document.getElementById("price-show-"+id);
	var it = document.getElementById("itemCode-"+id);
	var login = document.getElementById("userLogin");
	if(priceHidden.style.display != "none" ) {
		priceHidden.style.display = "none";
	}
	if(priceShow.style.display == "none" ) {
		priceShow.style.display = "inline";
	}
	sendLog('click_price',it);
    var millisecondsToWait = 1000;
    setTimeout(function() {
    	hiddenPrice(id);
    }, millisecondsToWait);
}

function hiddenPrice(id){
	var priceHidden = document.getElementById("price-hidden-"+id);
	var priceShow = document.getElementById("price-show-"+id);
	priceHidden.style.display = "inline";
	priceShow.style.display = "none";
}

function myFunction(){
	var cty = document.getElementById("categoryType");
	var isAlarm = cty.value
	if(isAlarm==0 || isAlarm==1) return confirm("是否已滿18歲");	
}

window.onbeforeunload = function (){
	var user = document.getElementById("userLogin");
	sendLog('stay_in',user);
	sendLog('leave',user);
	return null;
}

function sendLog(type,it){
	var httpRequest = new XMLHttpRequest();
	var user = document.getElementById("userLogin");
	var caType = document.getElementById("categoryType");
	var logIt = "";
	console.log(typeof(it));
	if(typeof(it)=="object"){
		logIt = it.value;
	}else if(typeof(it)=="string"){
		logIt = it;
	}
	console.log("saveLog.jsp?login="+user.value+"&functionCode="+type+"&itemCode="+logIt+"&categoryType="+caType.value);
	httpRequest.open("POST", "saveLog.jsp?login="+user.value+"&functionCode="+type+"&itemCode="+logIt+"&categoryType="+caType.value);
    httpRequest.send();
}

function contectNsaveLog(type,it){
	alert("專員將會於24小時內與您聯繫，謝謝！");
	sendLog('contect_customs',it);
}

var user = document.getElementById("userLogin");
    	sendLog("login",user);
    	var ele;
    	var body = document.getElementsByTagName("body")[0];
    	
    	body.addEventListener('click', function(event){
    		let element = event.target;
    		if(element.className.indexOf('fa-heart-o') > 0){
    			element.classList.remove('fa-heart-o');
    			element.classList.add('fa-heart');
    			ele = element;
    			sendLog("favorate",element.id);
    		}else if(element.className.indexOf('fa-heart') > 0){
    			element.classList.remove('fa-heart');
    			element.classList.add('fa-heart-o');
    			ele = element;
    			sendLog("unfavorate",element.id);
    		}
    	});