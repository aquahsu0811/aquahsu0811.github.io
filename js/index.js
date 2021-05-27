// initial 	
$(document).ready(function () {
	$('.sidenav').sidenav({
		edge: 'right',
		preventScrolling: false
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
	$('select').formSelect({ classes: "abc" });
	// 選擇 language
	$(".select-wrapper ul li").click(function (e) {
		if (e.target.innerHTML === "繁體中文") {
			let tag = [".titlecontent1", ".titlecontent2", ".titlecontent3", ".titlecontent4", ".titlecontent5"]
			let litag = [".licontent1", ".licontent2" ,".licontent3",".licontent4",".licontent5" ,".licontent6" ,".licontent7" ,".licontent8"]
			let chCntent = ["經濟部工業局補助計畫-公車評鑑智慧化與商用車ADAS 雲端運算服務"
				, "2018 Meet Taipei 創新創業嘉年華", "Multiple Kinect V2 : Build 3D Model"
				,"Nexcom 機械手臂 LED燈泡"
				, "VR創作箱:以多台Kinect V2 重建3D動態模型"
				, "資策會實習 - 3D光學檢測儀器深度資料重建"]
			let chLicontent = [
				" <li> 是一款以AI虛擬圍籬系統，例如入侵偵測、異常事情偵測等。</li ><li> 使用者可以自由繪製虛擬圍籬的範圍及大小，並可彈性地調整AI的偵測靈敏度。</li><li> 以適應不同的使用環境及需求，並可於及時串流中查找觀看事件。</li><li> 目前已經於香港正式場景實用，並規畫為公司標準品發售。</li>",
				" <li> 開發⼀套由C++撰寫的 AI detection library，包含⼈形、性別、表情、年齡偵測，以及針對bounding box 的unique ID追蹤。</li>",
				" <li> Acap plugin</li><li> 可於plugin開啟是否主動發送攝影機影像， 並設定多久發⼀次影像到server端，搭配公司的AI Server去做影像偵測，此專案在 Axis的show room中合作展出。 </li>",
				" <li> 計畫中需⾃動判別駕駛者有無危險駕駛、違規⾏為，包含「有無繫安全帶偵測」、 「駕駛時是否使⽤⼿機偵測」、「執勤時是否有使⽤香菸偵測」及「疲勞駕駛偵測」。</li><li> 我於計畫中負責疲勞駕駛偵測項⽬，判斷駕駛是否有打呵⽋，以Opencv dlib 偵測嘴巴特徵點，並判斷嘴型狀態。 </li>",
				" <li> 由經濟部邀展的新創活動，判斷臉部特徵判斷，表情、性別、年齡偵測。</li>",
				" <li> ⼀套由AI判斷出LED燈泡位置的程式，並將LED燈泡定位點發給機器⼈⼿臂拾取；我於專案中負責AI之後的影像處理加⼯，包含LED燈泡的旋轉⾓度判斷，還有燈泡顏⾊。</li>",
				" <li> 利⽤多台Kinect V2拍攝⼈物場景並重建3D模型。</li><li> 校正多台攝影機初始位置，並且利⽤ICP演算法再次進⾏ 修正疊合點雲，最後將點雲進⾏過濾改善雜訊問題。</li><li>  本研究在未來的運⽤，包括在 VR的3D場景與⼈物建模，以及繪製3D模型的三視圖，作為物件觀察使⽤。</li>",							
				" <li> 經由雷射光線掃描儀器所取得的原始深度資料或點雲，具有⼀些雜訊，也⽋缺表⾯結構資訊。</li><li> 在本系統中能將深度資料進⾏3種功能操作，分別是(1)分析/處理、(2)重建/ 建模、(3)視覺化/調整顯⽰細節。</li><li> 本計畫未來可能的應⽤，包括瑕疵檢測，資訊分析，以及⾃動掃描3D模型建模等。</li>",							
		
]
			for (let i = 0; i < tag.length; i++) {
				$(tag[i]).text(chCntent[i]);
			}
			for (let i = 0; i < litag.length; i++) {
				$(litag[i]).html(chLicontent[i]);
			}
		} else {
			let tag = [".titlecontent1", ".titlecontent2", ".titlecontent3", ".titlecontent4", ".titlecontent5"]
			litag = [".licontent1", ".licontent2" ,".licontent3",".licontent4",".licontent5",".licontent6" ,".licontent7" ,".licontent8"]
			let engContent =
				["Industrial Development Bureau Project : Intelligence Bus Driver Detection and ADAS Cloud Computing"
					, "2018 Meet Taipei Exhibition"
					,"Nexcom Mechanical arm"
					, "Multiple Kinect V2 : Build 3D Model"
					, "Internship : 3D Scanning with Optical Inspection Instruments"]
			englicontent = [
				"<li> AI Virtual Fence System : Intrusion detection 、abnormal occurrence detection.。</li ><li> User can draw virtual fence with polygon, box, and line, also adjust AI confidence randomly.。</li><li> Can be easily applied to different environment ,  and search event list in real-time streaming.</li><li> Alert Event :  flow counting, residence time , region counting</li>",
				"<li>AI detection API : Including people shape, gender , emotion, age detection, and bounding box unique ID tracker。</li >",
				"<li> Acap plugin</li><li> Detect motion and send camera frame to server. </li>",
				"<li> Detect Irregularities : seat belt , smoking , phone using, drowsy driving </li>",
				"<li> Demo AI detection with face emotion, gender, and age </li>",
				"<li>A system for detection LED lamp : detect position , LED lamp rotation angle and color.</li>",
				"  <li>Calibrate camera initial position, and recalculate precise cloud points 。</li><li> with ICP algorithm, the filter point cloud noise.</li>",							
				" <li> Point Cloud Visualization System 。</li><li>User could operate system with point cloud data , analyze and rebuild point cloud, then display with detail information.",							
			]
			for (let i = 0; i < tag.length; i++) {
				$(tag[i]).text(engContent[i]);
			}
			for (let i = 0; i < litag.length; i++) {
				$(litag[i]).html(englicontent[i]);
			}
		}
	});
});
// animation
const nav = document.querySelector('nav')
const navHeight = nav.offsetHeight
// Handle navbar animation
function changenav() {
	if (window.pageYOffset > navHeight) {
		return nav.classList.add('blue-grey', 'darken-3', 'shadow')
	} nav.classList.remove('blue-grey', 'darken-3', 'shadow')
}

window.addEventListener('scroll', () => {
	changenav()
})


var str = ["Computer Vision Engineer?", " Interaction Engineer?"];
var i = 0;
var j = 0
function typing(func) {
	var divTyping = document.getElementById("divTyping");
	if (j === 2 || i <= str[j].length) {
		if (j == 2) j = 0
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
typing(() => typing());


//typing1();

const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function () {
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
	var htmlID = ["YouTubeVideoPlayerAPI_v1", "YouTubeVideoPlayerAPI_v2", "YouTubeVideoPlayerAPI_v3", "YouTubeVideoPlayAPI_v4"];
	var youAPIID = ["_11o5ehJsTc", "44sZAuctqSw", "CXtt25TVekc", "Cs7tJsMsdWo"];
	for (let i = 0; i < htmlID.length; i++) {
		player = new YT.Player(htmlID[i], {
			videoId: youAPIID[i],   // YouTube 影片ID
			width: '390',            // 播放器寬度 (px)
			height: '390',           // 播放器高度 (px)
			playerVars: {
				autoplay: 1,            // 自動播放影
				showinfo: 0,            // 隱藏影片標題
				modestbranding: 0,      // 隱藏YouTube Logo
				loop: 1,                // 重覆播放
				playlist: youAPIID[i], // 當使用影片要重覆播放時，需再輸入YouTube 影片ID
				fs: 0,                  // 隱藏全螢幕按鈕
				cc_load_policty: 0,     // 隱藏字幕
				iv_load_policy: 3,      // 隱藏影片註解
				autohide: 0             // 影片播放時，隱藏影片控制列
			},
			events: {
				onReady: function (e) {
					e.target.mute();      //播放時靜音
					e.target.playVideo(); //強制播放(手機才會自動播放，但僅限於Android)
				}
			}
		});
	}
}