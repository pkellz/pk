$(function()
{
  //Default Style
  $('h1').tooltip();

  $('h2').tooltip({
    'background':'linear-gradient(#994500,orange)',
    'borderBottom':'2px solid black',
    'borderRight':'2px solid black',
    'boxShadow':'2px 2px 7px #555'
  });

  $('h3').tooltip({
    'backgroundColor':'blue',
    'padding':'15px',
    'transition':'all 0.1s ease',
  });

  $('h4').tooltip({
    'backgroundColor':'pink'
  });
  $('div').tooltip();
});
