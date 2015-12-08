'use strict';
$(function(){
  //Tooltip initialize and setting
$("div.mainBody").on('click','>div',function(){
   $("[data-toggle='tooltip']").tooltip();
   $("[data-toggle='tooltip']").on('click',function(){
    $(this).attr('data-original-title',"copied!");
    $(this).tooltip('show');
    $(this).attr('data-original-title',"copy");
   })
})
  //aniview initialize
  var options = {
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options); 
  $('#backTop').backTop({
  'position' : 500,
  'color' : 'black',
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

