// initial 	
	$(document).ready(function(){
	$('.sidenav').sidenav({
	edge:'right',
	preventScrolling:false  
	});
	$('.materialboxed').materialbox();
	$('.parallax').parallax()
	$('.tabs').tabs();
	$('.datepicker').datepicker({

	})
	$('.tooltipped').tooltip();
	$('.scrollspy').scrollSpy();
	$('.slider').slider({
	// 不顯示操控圓鈕
	indicators: false,
	// 每張照片播五秒
	interval: 5000
	});
	$('.carousel.carousel-slider').carousel({
	fullWidth: true,      
	indicators: true
	});
	});
// animation
const nav = document.querySelector('nav')
const navHeight = nav.offsetHeight
// Handle navbar animation
function changenav(){
	if(window.pageYOffset>navHeight){
		return nav.classList.add('blue-grey','darken-3','shadow')
	}nav.classList.remove('blue-grey','darken-3','shadow')
}

window.addEventListener('scroll',()=>{
	changenav()
})


var str = ["Computer Vision Engineer?"," Interaction Engineer?"];
var i = 0;
var j = 0
function typing(func) {
		var divTyping = document.getElementById("divTyping");
		if (j === 2 ||i <= str[j].length  ) {
			if (j == 2) j =0
	// str.slice(start, end) 切片函数，切取数组中的从start到end的字符串，不修改原数组
	// start 参数必须要有，end 可以没有，默认数组最后一个
	divTyping.innerHTML = str[j].slice(0, i++) + "_";
	setTimeout("typing(()=>typing())", 200); // 递归调用
} else {
	// divTyping.innerHTML = str
	 // 结束打字，移除光标
	i = 0
	j++
	func()
}
}

// }
// 该函数实际上不是一个个输出，只是后面的长度多一的字符串覆盖前面的字符串
		typing(()=>typing() );

	
//typing1();

const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "css/light-theme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "css/dark-theme.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "css/light-theme.css";
  }
});

function onYouTubeIframeAPIReady() {
	var player;
	var htmlID = ["YouTubeVideoPlayerAPI_v1" ,"YouTubeVideoPlayerAPI_v2", "YouTubeVideoPlayerAPI_v3","YouTubeVideoPlayAPI_v4"];
	var youAPIID = ["_11o5ehJsTc","44sZAuctqSw","CXtt25TVekc","Cs7tJsMsdWo"];
	for(let i = 0; i<htmlID.length;i++){
	 player = new YT.Player(htmlID[i], {
	  videoId: youAPIID[i],   // YouTube 影片ID
	  width: '390',            // 播放器寬度 (px)
	  height: '390',           // 播放器高度 (px)
	  playerVars: {
		autoplay: 1,            // 自動播放影
		showinfo: 0,            // 隱藏影片標題
		modestbranding: 0,      // 隱藏YouTube Logo
		loop: 1,                // 重覆播放
		playlist:youAPIID[i], // 當使用影片要重覆播放時，需再輸入YouTube 影片ID
		fs: 0,                  // 隱藏全螢幕按鈕
		cc_load_policty: 0,     // 隱藏字幕
		iv_load_policy: 3,      // 隱藏影片註解
		autohide: 0             // 影片播放時，隱藏影片控制列
	  },
	  events: {
		onReady: function(e) {
	   e.target.mute();      //播放時靜音
	   e.target.playVideo(); //強制播放(手機才會自動播放，但僅限於Android)
		}
	  }
	   });
	}
}