$(document).ready(function() {
  
  var img = $("ul.images");
  var images = img.find("li");
  var triggers = $('<ul/>')
  .addClass('triggers')
  .appendTo(img);
  var trig = '';
  for(var i=0; i<images.length; i++){
    trig += '<li/>'
  }
  triggers.append(trig);
  var lastElement = images.length-1;
  var target;
  var next = $('.next');
  var prev = $('.prev');
  var play = $('.play');
  var pause = $('.pause');
  var curr = $('.current');
 
  triggers.children().first().addClass('active');
  images.first().show();
  
  function sliderResponse(target){
     //images.hide("slide",{direction:"left"}, 0).eq(target).show("slide",{direction:"right"},0);
     triggers.children().removeClass('active').eq(target).addClass('active');
     console.log(target)
     
  }

  function currentSlide(target){
    var numb = target + 1 + " / " + images.length;
    var curr = $('.current');
    curr.html(numb); 
  } 

  currentSlide(0);
  
  function sliderTiming (){
      target = $('ul.triggers li.active').index();
      if(target === lastElement){
        target = 0;
      }else{
        target += 1;
      }
       images.hide().eq(target).show("slide",{direction:"right"},300);
       sliderResponse(target);
       currentSlide(target);
   }
     
   triggers.children().click(function(){
    if(!$(this).hasClass('active')){
      target = $(this).index();
      sliderResponse(target);
      currentSlide(target);
      resetTiming();  
    }
   });

   next.click(function(){
      target = $('ul.triggers li.active').index();
      if(target === lastElement){
        target = 0;
      } else{
        target += 1;
      }
      images.hide().eq(target).show("slide",{direction:"right"},300);
      sliderResponse(target);
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
      images.hide().eq(target).show("slide",{direction:"left"},300);
      sliderResponse(target);
      currentSlide(target);
      resetTiming();
  });

   
    function timer(){
        var inp = $('#time').val();
        var time = 0;
        if(inp.length === 0){
        time = 7000;
        }else{
        time = inp * 1000;
        }
        return time;
      }
    var timingRun = setInterval(function() { sliderTiming(); }, timer());
    
    function resetTiming() {
      clearInterval(timingRun);
      timingRun = setInterval(function() { sliderTiming(); }, timer());
    }
  
    play.click(function(){
    clearInterval(timingRun);
    timingRun = setInterval(function() {sliderTiming();}, timer());
       
   });

    
    function stop() {
      clearInterval(timingRun);
    }
    pause.click(function(){
      stop();
    });

}); 
