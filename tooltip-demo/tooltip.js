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
  $('*').each(function()
  {
    var $this = $(this);
    if($this.attr('title'))
    {
      $this.data('title',$(this).attr('title'));
      $this.removeAttr('title');
      $this.css({'cursor':'pointer'});
    }
  });

  var tipBoxStyles = {
    'text-align':'center',
    'justify-content':'center',
    'display':'flex',
    'align-items':'center',
    'background':'rgba(100,100,100,0.85)',
    'position':'absolute',
    'padding':'1%',
    
    'border-radius':'2px',
    'color':'white',
    'border-bottom':'2px solid lightblue',
    'box-shadow':'0px 1px 3px #333',
    'font-size':'13px',
    'font-weight':'bold'
  };

  var tipTextStyles = {
      'font-family':'Verdana'
  };

  var $tipBox = $('<div>').css(tipBoxStyles);

  $.fn.showToolTip = function()
  {
    var $tipText = $('<span>').css(tipTextStyles).append($(this).data("title"));
    $(this).append($tipBox.append($tipText));
  }
  $.fn.hideToolTip = function()
  {
    $tipBox.remove();
    $tipBox.empty();
  }
})(jQuery);
