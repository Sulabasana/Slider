$(document).ready(function() {
 var images = $('.slider img');
 var triggers = $('<ul/>')
  .addClass('triggers')
  .appendTo(images);
  var trig = '';
  for(var i=0; i<images.length; i++){
    trig += '<li/>'
  }
  triggers.append(trig);
  var lastElement = images.length -1;
  var prev = $('.prev');
  var next = $('.next');
  images.first().show();
 function slide(target){

	 images.hide("slide",{direction:"left"},500).eq(target).show("slide",{direction:"right"},500);
	
}

	function currentSlide(target){
    var numb = target + 1 + " / " + images.length;
    // curr.html(numb); 
  	} 
  currentSlide(0);
 triggers.children().click(function(){
    if(!$(this).hasClass('active')){
      target = $(this).index();
      slide(target);
      currentSlide(target);
      resetTiming(); // żeby odliczało od początku po kliknięciu w przycisk
    }
   });
 next.click(function(){
      target = $('ul.triggers li.active').index();
      if(target === lastElement){
        target = 0;
      } else{
        target += 1;
      }
      // images.hide("slide",{direction:"left"},500).eq(target).show("slide",{direction:"right"},500);
      
      slide(target);
      currentSlide(target);
      resetTiming();
  });
   prev.click(function(){
    target = $('ul.triggers li.active').index();
    if(target === 0){
      target = lastElement;
    }else{
      target -= 1;
    }
     images.hide("slide",{direction:"right"},500).eq(target).show("slide",{direction:"left"},500);
     

      slide(target);
      currentSlide(target);
      resetTiming();
  });
   function sliderTiming (){
      target = $('ul.triggers li.active').index();
      if(target === lastElement){
        target = 0;
      }else{
        target += 1;
      }
       slide(target);
       currentSlide(target);
     
   }
  var timingRun = setInterval(function() { sliderTiming(); },7000);
    function resetTiming() {
      clearInterval(timingRun);
      timingRun = setInterval(function() { sliderTiming(); },7000);
    }
});
