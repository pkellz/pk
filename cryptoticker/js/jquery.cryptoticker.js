/*
* Author: Patrick Scott
* File: cryptoticker.js
* Github: @pkellz
* Description: Customizable jQuery widget that lets you retrieve live
* prices, market caps, and % changes of cryptocurrencies from the CoinMarketCap API
*/

(function($)
{
  $.fn.cryptoticker = function(options = {})
  {
    const apiURL = 'http://cryptoticker-back.herokuapp.com/'

    let requestDefaults = {
      id:'',                    // search by id ("bitcoin" for example) - can only return one coin at a time
      getTopCoins:10,             // return n coins - overrides 'top5' and 'top10' but not 'id'- default 10 coins
      startIndex:1,               // default startIndex is 0, most likely 'bitcoin'
      top5:false,                 // returns top 5 coins by market cap - will not set if any of the above is already set
      top10:false,                // returns top 10 coins by market cap - will not set if any of the above is already set
    }

    let styleDefaults = {
      speed:10000,                // time until slide ends - default 30 seconds
      fadeInOutSpeed:2500,        // time it takes to fade out after slide animation ends - default 2.5 seconds,
      resetSpeed:1000,            // time it takes for the ticker to reset position after fading out - default 1 second
      separatorColor: '#555',     // default separator color
      separatorWidth:1,           // default separator width (px)
      nameColor:'#F9B016',        // default name color
      priceColor:'#ffffff',       // default price color
      capColor:'#ffffff',         // default market cap color
    }

    extendOverwriteOnly(styleDefaults, options)
    extendOverwriteOnly(requestDefaults, options)

    requestDefaults.limit = requestDefaults.getTopCoins
    if(requestDefaults.top5)
      requestDefaults.limit = 5
    else if(requestDefaults.top10)
      requestDefaults.limit = 10

    fetchData(apiURL, this, requestDefaults, styleDefaults)
  }
})(jQuery)

function fetchData(apiURL, _this, requestOptions, styleOptions)
{
  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(requestOptions),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res=> res.json())
  .then(data=>{
    console.log(data);
    renderData(data,_this, requestOptions, styleOptions, apiURL)
   })
  .catch(err=>{ console.log(err) })
}

function renderData(data,_this, reqOpts, opts, url)
{
  // Clear previous ul
  _this.empty()
  _this.append("<ul>");

  data.forEach((data, index)=>
  {
    let {
          percent_change_24h: pct_24,
          market_cap:mktCap,
          price
        } = data.quote.USD
    let { name, symbol } = data

    pct_24 = pct_24.toString()
    mktCap = mktCap.toString()

    // pctChangeSign - is 24% change positive or negative
    const pctChangeSign = pct_24.split('')[0] == '-' ? 'pct_down' : 'pct_up'
    const arrow = pctChangeSign == 'pct_down' ? 'fa-caret-down' : 'fa-caret-up'
    // Replace all spaces in coin name with dashes
    name = name.replace(/\s/g,"-")
    mktCap = addCommasToMarketCap(mktCap)

    _this.children('ul').append(`
    <li>
      <div class="coin" style="border-right:${opts.separatorWidth}px solid ${opts.separatorColor}">
      <div class="top">
        <span class="name" style="color:${opts.nameColor}">
          <a href="https://coinmarketcap.com/currencies/${name}/" target="_blank">${name.toUpperCase()}(${symbol})</a>
        </span>
        <span class="price" style="color:${opts.priceColor}">$${price}</span>
      </div>
      <div class="bottom">
        <span class="cap" style="color:${opts.capColor}">$${mktCap}</span>
        <span class="${pctChangeSign}">
          ${pct_24}%
          <i class="fa ${arrow}"></i>
        </span>
      </div>
    </div>
  </li>`);

    // Expand ul to accomodate the newest li width
    let newestLiWidth = _this.find("li:last-child").css('width')
    _this.children("ul").css({'width':'+='+newestLiWidth});
  })
  beginSliding(_this,reqOpts, opts,url)
}

function beginSliding(_this, reqOpts, opts,url)
{
  let { speed, fadeInOutSpeed, resetSpeed } = opts;
  let ul = _this.find("ul")
  let ulWidth = _this.css('width')
  ul.animate({'opacity':'1'},fadeInOutSpeed);

  ul.animate({'margin-left':`-=${ulWidth}`},speed, ()=> {
    ul.animate({'opacity':'0'},fadeInOutSpeed,()=> {
      ul.animate({'margin-left':`0px`},fadeInOutSpeed,()=> {
        beginSliding(_this,reqOpts, opts,url)
      })
    });
  })
}

function extendOverwriteOnly(target, source)
{
  Object.keys(target).map(key => {
    if(source.hasOwnProperty(key))
       target[key]=source[key]
  })
  return source
}

function addCommasToMarketCap(mktCap)
{
  mktCap = mktCap.split('.')[0].split('')
  for(let i = mktCap.length-3; i > 0; i-=3)
    mktCap.splice(i,0,',')
  return mktCap.join('')
}
