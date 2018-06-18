window.onload = function(){
	var music = document.getElementById("music");
	var audio = document.getElementsByTagName("audio")[0];
	audio.addEventListener("ended",function(event){
		music.setAttribute("class","");
	},false);
//	music.onclick = function(){
//		if(audio.paused){
//			audio.play();
//			//this.setAttribute("class","play");
//			this.style.animationPlayState = "running";
//			this.style.webkitAnimationPlayState = "running";
//		}else{
//			audio.pause();
//			//this.setAttribute("class","");
//			this.style.animationPlayState = "paused";
//			this.style.webkitAnimationPlayState = "paused";
//		}
//	};
	music.addEventListener("touchstart",function(event){
		if(audio.paused){
			audio.play();
			this.setAttribute("class","play");
		}else{
			audio.pause();
			this.setAttribute("class","");
		}
	},false);
	p1.addEventListener("touchstart",function(event){
		p1.style.display = "none";
		p2.style.display = "block";
		p3.style.display = "block";
		p3.style.top = "100%";
		setTimeout(function(){
			p2.setAttribute("class","page fadeout");
			p3.setAttribute("class","page fadein");
		},5500);
	},false);
}

