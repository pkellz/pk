$(function()
{
  $('h1, h2, h3, h4, h5, h6, p, a, div').on('mouseenter',function()
  {
    $(this).showToolTip();
  }).on('mouseleave',function()
  {
    $(this).hideToolTip();
  });
});
