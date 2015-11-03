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

$("#enter_button").click(function(){
   $('div#shadow').addClass('animated zoomOutRight');
   setTimeout(function(){
    $('div#shadow').remove();
  },400);
   $('header,div.mainBody').fadeIn('2000');
})
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

