let plus = document.querySelector('.next')
let minus = document.querySelector('.prev')
let play = document.querySelector('.play')
let stop = document.querySelector('.pause')
let click = document.querySelector(".click")
let slideIndex = 1;
showSlides(slideIndex) 
auto()

// function currentSlide(n){
// 	showSlides(slideIndex = n)
// }
	function slidePlus(n){
		showSlides(slideIndex += n )
	}
	function slideMinus(n){
		showSlides(slideIndex -= n)
	}
	click.addEventListener("click",function(){
		clearTimeout(time)
		auto()
	});
	plus.addEventListener("click", function(){
		slidePlus(1);
	});
	minus.addEventListener("click", function(){
		slideMinus(-1);
	})
	stop.addEventListener("click", function(){
		if(time){
			 clearTimeout(time)
			 console.log("stop")
		}
	});
	play.addEventListener("click", function(){
		setTimeout(auto,3000);
		console.log("Start!")
	})
	function showSlides(n){
		let i = 0;
		const slider = document.querySelectorAll(".slider img")
		const len = slider.length

		if(n>len){slideIndex = 1}
		if(n<1){slideIndex = len}

		for(i=0;i<len;i++){
			slider[i].style.display = "none"
		}
		slider[slideIndex-1].style.display = "block"; //because first index is 0 
	}

	function auto(){
		let i = 0;
		const slider = document.querySelectorAll(".slider img")
		const len = slider.length;
		slideIndex++
		if(slideIndex>len){slideIndex = 1};
		for(i;i<len;i++){
			slider[i].style.display = "none"
		}
		slider[slideIndex-1].style.display = "block"
		time = setTimeout(auto, 3000)
		
	}
