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

