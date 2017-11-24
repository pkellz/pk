/*
* Basic jQuery Tool Tip Plugin
* Author: Patrick Scott
* Github: pkellz
*/

//Different styles
//Animations, eventually
//Width, shortTip? longTip?
//Issues, conflict with text-align:center
(function($)
{
  $.fn.tooltip = function(options)
  {
    var settings = {
      backgroundColor:'#111',
      display:'block',
      position:'absolute',
      left:0,
      bottom:'110%',
      padding:'10px',
      borderRadius:'5px',
      color:'#fff',
      lineHeight:'normal',
      textTransform:'none',
      fontFamily:'Verdana',
      fontSize:'12px',
      opacity:0,
      transform:'scaleY(0)',
      transition:'all 0.5s ease',
      textAlign:'center',
      background:null
    }
    if(options) $.extend(settings, options);

    if($(this).attr('title'))
    {
      $(this).addClass('tipElement');
    }

    var tipElem = $('.tipElement');

    tipElem.each(function() {
      var $toolTipText = $(this).attr('title');
      $(this).removeAttr('title');

      var $toolTipSpan = $('<span/>', {class: '', text: $toolTipText});

      $toolTipSpan.css(settings);

      if ($toolTipText) $toolTipSpan.appendTo($(this));

      $(this).on('mouseenter',function()
      {
        $(this).find('span').css({'opacity':'0.9','transform':'scaleY(1)'});
      }).on('mouseleave',function()
      {
        $(this).find('span').css({'opacity':'0','transform':'scaleY(0)'});
      });
    });
  }
})(jQuery);
