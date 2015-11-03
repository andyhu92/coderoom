'use strict';
$(function(){
  var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);
  
  $('#backTop').backTop({
  'position' : 500,
  'color' : 'black',
});
// enter screen
$("#enter_button").click(function(){
   $('div#shadow').addClass('animated zoomOutRight');
   $("div.removeAnimate").addClass("animated slideInUp");
   setTimeout(function(){
    $('div#shadow').remove();
    $("div.removeAnimate").removeClass("animated slideInUp removeAnimate");
  },1000);
   $('header,div.mainBody,footer').fadeIn();
});
//back to top
$("#small_backTop").click(function(e){
  e.preventDefault();
  $('body').animate({"scrollTop":0}, 600);
})
//menu toggle
  /* $('a.button').on('mouseenter',function(){
      var self  = $(this);
      self.removeClass("zoomIn");
      self.addClass("pulse");
      setTimeout(function(){
        self.removeClass('pulse');
      }, 1000);
   });*/
  /*   $("#cssLink,#jsLink,#frameworkLink,#devLink,#nodeLink,#dbLink").click(
        function(){
    var height = $($(this).attr('href')).offset().top;
    console.log(height);
    $('body').animate({
      scrollTop: height},'slow');
   });
*/
   })

