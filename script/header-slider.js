$(function(){
		$('#prev').click(function(){
		$('.box-slider').removeClass('slide-right').addClass('slide-left');

		});

		$('#next').click(function(){
		$('.box-slider').removeClass('slide-left').addClass('slide-right');

		});
});


var slideIndex = 1;
var countLoop = 0;
var slides = document.getElementsByClassName("box-slider");
sliderShow(slideIndex);

function arrow(n){
	countLoop = countLoop + n;
	console.log('Count Loop: '+countLoop)
 	var prev = document.getElementById("prev");
 	var next = document.getElementById("next");

 	if(parseInt(countLoop)!= 0 && parseInt(countLoop)!=2){
 		prev.classList.remove("disabled");
 		next.classList.remove("disabled");
 	}
	if(parseInt(countLoop)==0){
		prev.classList.add("disabled");
	}
	else if(countLoop == 2){
		next.classList.add("disabled");
	}
	
	sliderShow(slideIndex += n);
}


function activeSlider(n) {
 	var prev = document.getElementById("prev");
 	var next = document.getElementById("next");

 	if(n==1){
 		countLoop=0;
 		prev.classList.add("disabled");
 		next.classList.remove("disabled");
 	}
	else if(n==2){
		countLoop=1;
		prev.classList.remove("disabled");
 		next.classList.remove("disabled");
	}
	else if(n==3){
		countLoop=2;
		next.classList.add("disabled");
		prev.classList.remove("disabled");
	}
	
	sliderShow(slideIndex = n);
}


function sliderShow(n){
	var i;
	var circle = document.getElementsByClassName("circle");

	if (n > slides.length) { slideIndex = 1};
	if (n < 1) { slideIndex = slides.length};
	for (i=0;i<slides.length;i++) {
	slides[i].style.display = "none";
	};

	for (i=0;i<circle.length;i++) {
	circle[i].className = circle[i].className.replace(" active","");
	};

	slides[slideIndex-1].style.display = "block";
	circle[slideIndex-1].className += " active";
}