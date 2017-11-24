## jquery-tooltip-plugin

Basic jquery tooltip plugin.

# Installation
## Load the jQuery file, the plugin file, and the plugin stylesheet

```html
<head>
   <script src="https://code.jquery.com/jquery-3.2.1.js"></script>
   <script type="text/javascript" src="tooltip.js"></script>
   <link type="text/css" rel="stylesheet" href="tooltip.css"></link>
</head>
```


## Initialization and Usage
To use the plugin, simply add the title attribute in your HTML to the element you want to add the tooltip.
```html
<p class="paragraph" title="Tooltips Are Fun!">Hover Over Me!</p>
```
Then, initialize the tooltip in your javascript code.

```javascript
$(function()
{
  $('.paragraph').tooltip();
});

```
Link to the demo - https://pkellz.github.io/pk/tooltip-demo/
