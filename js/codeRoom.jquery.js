'use strict';
  $(function(){
     
    var width = 1140;
    var animateSpeed = 1000;
    var pause = 6000;
    var count = 1;
    var bannerText = true;
    var interval;
  
    var $slider = $('#slider');
    var $sliderContainer = $slider.find(".slides");
    var $slideImage = $sliderContainer.find(".slide");

    function startSlider(){
      interval = setInterval(function(){
        $sliderContainer.animate({'margin-left':'-='+width},animateSpeed,function(){
            count++;
            if(count == $slideImage.length){
              $sliderContainer.css({'margin-left':'0'});
              count=1;
            }
        });
        if(bannerText){
              $('h1.banner').html("<span class='white animated fadeInDown'>Exploring the cutting-edge web technology!</span>");
              bannerText = false;
        }
        else{
              $('h1.banner').html("<span class='animated fadeInDown'><span style='color:#CCCCCC'>W</span><strong>Here</strong> to find Web Development Resources!</span>");
              bannerText = true;
        }
     
     },pause);      
    };


    function pauseSlider(){
      clearInterval(interval);
    }
    $slider.on('mouseenter',pauseSlider).on('mouseleave',startSlider);
    startSlider();
  });

$(function(){
  $('#backTop').backTop({
  'position' : 500,
  'color' : 'black',
});
   $('img#logo').hover(function(){
      $(this).toggleClass('animated pulse');
   });
     $("#cssLink,#jsLink,#frameworkLink,#devLink").click(
        function(){
    var height = $($(this).attr('href')).offset().top;
    console.log(height);
    $('body').animate({
      scrollTop: height},'slow');
   });
   })

