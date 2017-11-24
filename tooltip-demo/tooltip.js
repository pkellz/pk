/*
* Basic jQuery Tool Tip Plugin
* Author: Patrick Scott
* Github: pkellz
*/

//Different styles
//Animations, eventually
//Add Fade In
(function($)
{
  $.fn.tooltip = function()
  {
    if($(this).attr('title'))
    {
      $(this).addClass('tipElement');
    }

    var tipElem = $('.tipElement');

    tipElem.each(function() {
      var $toolTipText = $(this).attr('title');
      $(this).removeAttr('title');

      var $toolTipSpan = $('<span/>', {class: 'tooltip', text: $toolTipText});

      if ($toolTipText) $toolTipSpan.appendTo($(this));

      $(this).on('mouseenter',function()
      {
        $(this).find('span').css({'opacity':'0.8','transform':'scaleY(1)'});
      }).on('mouseleave',function()
      {
        $(this).find('span').css({'opacity':'0','transform':'scaleY(0)'});
      });
    });
  }
})(jQuery);
