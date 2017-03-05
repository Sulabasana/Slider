let plus = document.querySelector('.next')
let minus = document.querySelector('.prev')

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

plus.addEventListener("click", function(){
	slidePlus(1);
	setTimeout(time, 3000)
});
minus.addEventListener("click", function(){
	slideMinus(-1);
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
