$(function()
{
  const domElements = domCache()
  const portfolioProjects = getProjects()
  startBillboardTransition(domElements['$billboard_img'])
  bindEvents(portfolioProjects, domElements)
})

function startBillboardTransition($billboard_imgs)
{
  const pause = 7000
  let i = 0

  setInterval(function(){
    $billboard_imgs.eq(i).fadeOut('slow')
    if(i == $billboard_imgs.length-1)
      i = -1
    $billboard_imgs.eq(i+1).fadeIn('slow')
    i++;
  },pause)
}

function domCache()
{
  const $more_img = $('.img-container')
  const $more_desc = $('.desc-container').children('p').eq(0)
  const $more_skills = $('.skills-container').eq(0)
  const $more_url = $('.desc-container').find('a').eq(0)
  const $more_container = $('.more-container')
  const $body_overlay = $('.body-overlay')
  const $more_name = $('.project-name').eq(0);
  const $billboard_img = $('.billboard img')
  const $grid_elements = $('.grid-wrapper > div')
  const $see_more = $('.see-more')
  const $fa_bars = $('.fa-bars')
  const $about_link = $('#about')
  const $contact_link = $('#contact')
  const $portfolio_link = $('#portfolio')
  const $side_tab = $('#side-tab')
  const $side_tab_container = $('#side-container')

  return { $more_img, $more_desc, $more_skills,$more_url, $more_container,
           $body_overlay,$more_name, $billboard_img, $grid_elements, $see_more,
          $fa_bars, $about_link, $contact_link, $portfolio_link, $side_tab, $side_tab, $side_tab_container};
}

function bindEvents(projects, dom)
{
  let { $more_img, $more_desc, $more_skills, $more_url, $more_container,
        $body_overlay, $more_name, $grid_elements, $see_more, $fa_bars,
        $about_link, $contact_link, $portfolio_link, $side_tab, $side_tab_container } = dom

  $side_tab.on('click', function(){
    $side_tab_container.toggleClass('closed-tab')
  })

  // Navigation easy scroll
  $about_link.on('click', easyScroll.bind(null, "about-section",50, 1000))
  $contact_link.on('click', easyScroll.bind(null, "contact-section", -window.innerHeight, 1000))
  $portfolio_link.on('click', easyScroll.bind(null, "portfolio-section",50, 1000))


  $fa_bars.on('click',function(){
    $('.nav li:first-child').siblings('li').toggleClass('responsive')
  })
  $grid_elements.on('mouseover',function()
  {
    $(this).children('.info-overlay').css({'opacity':'1'})
  }).on('mouseleave',function(){
    $(this).children('.info-overlay').css({'opacity':'0'})
  })
  $body_overlay.on('click',function()
  {
    $(this).css({'display':'none','opacity':'0'})
    $more_container.css({'display':'none','opacity':'0'})
  })
  $see_more.on('click',function()
  {
    const project = $(this).attr('id');
    let { name, url, img, desc, skills } = projects[project];

    $('.info-overlay').css({'opacity':'0'})
    $('.body-overlay').css({'opacity':'1','display':'inherit'})

    //Display more information about project
    $more_url.attr('href',url)
    $more_img.children('img').attr('src',img)
    $more_desc.html(desc);
    $more_name.html(name)
    $more_skills.html("")
    skills.forEach(skill=>{
      $more_skills.html($more_skills.html() + `<span class='skill'>${skill}</span>`)
    })
    $more_container.css({'opacity':1,'display':'inherit'})
  })
}

function easyScroll(className, offset, duration)
{
  $('html, body').animate({scrollTop: $(`.${className}`).offset().top - offset}, duration);
}

function initMap() {
  const center = {lat:33.9957, lng:-81.084};
  const styles = getMapStyles()
  const map = new google.maps.Map(document.getElementById('map'),{zoom: 14,center,styles});
  const markerPosition = {lat:33.9938, lng:-81.074}
  const newMarker = new google.maps.Marker({
    position:markerPosition,
    map,
  });
}

function getProjects()
{
  return {
    'Availabook' : {
      name:'Availabook',
      url:'http://availabook.herokuapp.com',
      img:'images/portfolio/availabook.png',
      desc:" Volunteer web application for the Thomas Cooper Library at the University of South Carolina. The application is named Availabook, as it allows students to subscribe to text message notifications when a particular book they are looking for is returned to the library. I created Availabook because I saw a need. Students could not get reliable notification as to when an important book that they needed was returned, so I decided to pioneer this project in order to fill the void.",
      skills:['HTML','CSS','Javascript','NodeJS','Express','Nexmo API','MongoDB']
    },
    'Jobx' : {
      name:'Jobx',
      url:'http://jobx.herokuapp.com',
      img:'images/portfolio/jobx.png',
      desc:"I built Jobx at the 2018 Colahacks Hackathon. Think of it as a Tinder for jobs. Swipe right on jobs you're interested in; left on jobs that you aren't. (Not Finished!)",
      skills:['HTML','CSS','Javascript / jQuery','Express','NodeJS','MongoDB']
    },
    'Everest' : {
      name:'Everest',
      url:'http://everestjs.com',
      img:'images/portfolio/everest.png',
      desc:"Everest is a live-trading cryptocurrency bot on the Poloniex exchange.",
      skills:['Javascript']
    },
    'V2V' : {
      name:'VisasToVikas Yoga',
      url:'http://www.visastovikasokc.com/',
      img:'images/portfolio/v2v.png',
      desc:"Website built for an Upwork client.",
      skills:['HTML','CSS','Javascript', 'jQuery']
    },
    'CryptoTicker' : {
      name:'CryptoTicker',
      url:'cryptoticker',
      img:'images/portfolio/cryptoticker.png',
      desc:"jQuery CryptoTicker plugin. It's like a stock market ticker, except with cryptos. Plugin fetches data such as current coin value, market cap, and 24h percentage changes from CoinMarketCap API.",
      skills:['HTML','CSS','jQuery','CoinMarketCap API']
    },
    'Camoflyge' : {
      name:'Camoflyge',
      url:'http://www.camoflyge.com',
      img:'images/portfolio/camoflyge.png',
      desc:"My online clothing store - Camoflyge. Find some of the freshest camouflage jackets and pants in 2019 so you can stay CamoFly.",
      skills:['Shopify']
    },
    'FateJS' : {
      name:'fateJS',
      url:'fatedocs',
      img:'images/portfolio/fatejs.png',
      desc:`Modeled after <a href='https://chancejs.com/' target='_blank'>Chance.js</a>, fateJS is a Javascript library that helps generate random numbers, characters,
       booleans, etc. I built fateJS in order to build my chops in creating Javascript libraries from scratch.`,
      skills:['Javascript','ES6','Docpress']
    },
    'SWA':{
      name:'Scott Web Agency',
      url:'http://www.scottwebagency.com',
      img:'images/portfolio/swa.png',
      desc:'This is my web development agency website. I develop websites for individuals and small businesses in the Columbia, SC area.',
      skills:['HTML5','CSS3','Javascript']
    }
  }
}

function getMapStyles()
{
  return [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#542911"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]
}
