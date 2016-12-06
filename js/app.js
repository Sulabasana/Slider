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
  var inp = $('#time');
  var curr = $('.current')
 
  triggers.children().first().addClass('active');
  images.hide().first().show();

  function sliderResponse(target){
     triggers.children().removeClass('active').eq(target).addClass('active');
     images.fadeOut(0).eq(target).fadeIn(0);
     // images.hide("slide",{direction:"left"},500).eq(target).show("slide",{direction:"right"},500);
     
  }

  function currentSlide(target){
    var numb = target + 1 + " / " + images.length;
    curr.html(numb); 
  } 
  currentSlide(0);
   
     
   triggers.children().click(function(){
    if(!$(this).hasClass('active')){
      target = $(this).index();
      sliderResponse(target);
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
     images.hide("slide",{direction:"right"},500).eq(target).show("slide",{direction:"left"},500);
     

      sliderResponse(target);
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
       sliderResponse(target);
       currentSlide(target);
     
   }

   ///poprawić cały ten interwał bo nie działa aż do dołu robi co chce...
   
//jak jest play to żeby nie było Pause i na odwrót czyli na click zmienić
   // console.log(inp.val())
   // var timer = 0;
   // if(inp.val().length === 0){
   //    timer = 4000
   // }else{
   //    timer = inp.val() * 1000
   // };
//    inp.blur(function(){
//     if($(this).val().length === 0 ) {
//         timer = 7000;
//     }else{
//         timer = inp.val() * 1000;
//     }
// });

   // var n = 0;
   // if ((inp).is(":empty")){
   //    n = 7000
   // }else{
   //  n = inp.val() * 1000;
   // };
   
   //on click stop interval
   var timingRun = setInterval(function() { sliderTiming(); }, timer);
    function resetTiming() {
      clearInterval(timingRun);
      timingRun = setInterval(function() { sliderTiming(); }, timer);
    }

   play.click(function(){
    var timingRun = setInterval(function() {sliderTiming();}, 5000);
    $(this).hide().next().show();
   })

   pause.click(function(){
    clearInterval(timingRun);
    $(this).hide().prev().show();
    console.log("stop")
    console.log(pause)
    });
   
   //on click start intreval
   
   //start interval and clear after picture change
   

}); 





// $(document).ready(function() {
  
//   var img = $("ul.images");
//   var images = img.find("li");
//   var triggers = $('<ul/>')
//   .addClass('triggers')
//   .appendTo(img);
//   var trig = '';
//   for(var i=0; i<images.length; i++){
//     trig += '<li/>'
//   }
//   triggers.append(trig);
//   var lastElement = images.length-1;
//   var target;
//   var next = $('.next');
//   var prev = $('.prev');
//   var play = $('.play');
//   var pause = $('.pause');
//   // console.log(triggers);
//   // console.log(trig);
//   // console.log(images);
//   // console.log(img);
//   var inp = $('#time');
   
//   // console.log(triggers.length)

//   triggers.children().first().addClass('active');
//   images.hide().first().show();

//   function sliderResponse(target){
//      images.fadeOut(0).eq(target).fadeIn(0);
//     triggers.children().removeClass('active').eq(target).addClass('active');
//      var numb = target + 1 + " / " + images.length;
//      console.log(numb)
//     }
   
//    triggers.children().click(function(){
//     if(!$(this).hasClass('active')){
//       target = $(this).index();
//       sliderResponse(target);
//       resetTiming(); // żeby odliczało od początku po kliknięciu w przycisk
//     }
//    });
//    next.click(function(){
//       target = $('ul.triggers li.active').index();
//       if( target === lastElement){
//         target = 0;
//       } else{
//         target += 1;
//       }
//       sliderResponse(target);
//       resetTiming();
//   });
//    prev.click(function(){
//     target = $('ul.triggers li.active').index();
//     if(target === 0){
//       target = lastElement;
//     }else{
//       target -= 1;
//     }
//       sliderResponse(target);
//       resetTiming();
//   });
//    function sliderTiming (){
//       target = $('ul.triggers li.active').index();
//       if(target === lastElement){
//         target = 0;
//       }else{
//         target += 1;
//       }
//        sliderResponse(target);
     
//    }
//    console.log(inp)
//    var n = 7000;
//    inp.blur(function(){
//     if($(this).val().length === 0 ) {
//         n = 7000;
//     }else{
//         n = inp.val() * 1000;
//     }
// });
//    // var n = 0;
//    // if ((inp).is(":empty")){
//    //    n = 7000
//    // }else{
//    //  n = inp.val() * 1000;
//    // };
   
//    //on click stop interval
//    pause.click(function(){
//     clearInterval()
//     });
   
//    //on click start intreval
//    play.click(function(){
//     console.log(n)
//     setInterval(function() { sliderTiming(); }, n)
//    });

//    //start interval and clear after picture change
//    var timingRun = setInterval(function() { sliderTiming(); }, n);
//     function resetTiming() {
//       clearInterval(timingRun);
//       timingRun = setInterval(function() { sliderTiming(); }, n);
//     }

// }); 