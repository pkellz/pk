 $(function()
{
  var windowWidth = $(window).width();
  scaleMainContainer(windowWidth);
  //////////////////////
 $('.col .overlay').mouseenter(function()
  {

    $(this).animate({'opacity':'0.6'});
    $(this).children('h1').animate({"font-size":"35px"},250);
  });
  $('.col .overlay').mouseleave(function()
  {
    $(this).animate({'opacity':'0.1'});
    $(this).children('h1').animate({"font-size":"50px"},250);
  });
  //////////////////////
  $('.menu-icon').click(function()
  {
    $(this).css({'display':'none'});
    $('.x-icon').fadeTo('fast',1);
    $('.sidebar-menu-expanded').animate({'margin-left':'+=320px', 'opacity':1},200);
    $('.sidebar-profile').animate({'margin-left':'+=100px', 'opacity':0.0},200);
  });
  $('.x-icon').click(function()
  {
    $(this).css({'display':'none'});
    $('.menu-icon').fadeTo('fast',1);
    $('.sidebar-menu-expanded').animate({'margin-left':'-=320px', 'opacity':0.0},200);
    $('.sidebar-profile').animate({'margin-left':'-=100px', 'opacity':1},200);
  });

});

$(window).on('resize',function()
 {
   var windowWidth = $(window).width();
   scaleMainContainer(windowWidth);
  if(windowWidth < 990)
   {
     $('.footer').css({ 'width':'100%'});
   }
 });
var scaleMainContainer = function(windowWidth)
{
  var sideBarWidth = $('.sidebar').width()-1;
  var mainContainerWidth = windowWidth - sideBarWidth;
  $('.main-container').css({'width':mainContainerWidth});
  $('.footer').css({'width':mainContainerWidth});
}
