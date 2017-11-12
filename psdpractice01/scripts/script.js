$(function()
{
  initialSize();
  resizeIpad();
});
$(window).on('scroll',function()
{
  var scroll = $(this).scrollTop();
  if(scroll > 500)
  {
    $('.right-container img').addClass('pop');
  }
});

$(window).resize(function()
{
    resizeIpad();
});
function initialSize()
{
  var containerHeight = $('.ipad').height()+60;
  $('.right-container').css({'height':containerHeight});
}
function resizeIpad()
{
  var containerHeight = $('.ipad').height();
  $('.right-container').css({'height':containerHeight});

}
