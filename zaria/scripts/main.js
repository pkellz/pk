$(function(){
  const $billboard_img = $('.billboard-slider img')
  startBillboardTransition($billboard_img);

})
function initMap() {
  const center = {lat:39.102, lng:-97.4129};
  const styles = getMapStyles()
  const map = new google.maps.Map(document.getElementById('map'),{zoom: 4.8,center,styles});
  const markerPosition = {lat:33.9938, lng:-81.074}
  let previousMarker;
  map.addListener('click', function(e) {
      if(previousMarker != null)
        previousMarker.setMap(null)
      placeMarker(e.latLng, map);
  });

  function placeMarker(position, map) {
      var marker = new google.maps.Marker({
          position: position,
          map: map
      });
      previousMarker = marker
      map.panTo(position);
  }

}
function closeInstagram()
{
  const $close_insta = $('.insta-reminder i')
  const $insta_bar = $('.insta-reminder')
  $close_insta.on('click',function(){
    $insta_bar.hide();
  })
}

function startBillboardTransition($billboard_imgs)
{

  const pause = 5000
  let i = $billboard_imgs.length-1;

  setInterval(function(){
    $billboard_imgs.eq(i).fadeOut('slow')
    if(i ==0)
      i = $billboard_imgs.length
    $billboard_imgs.eq(i-1).fadeIn('slow')
    i--;
  },pause)
}
$(window).scroll( function() {
	const scroll = $(window).scrollTop();
  const speed = 0.5;

	$('.scroller').each(function(){
		const $this = $(this);
    const $parent = $this.parent()
    const topOffset = $parent.offset().top;
    const height = $parent.outerHeight(true);
    const parallaxSize = (scroll - topOffset) * speed;

    // prevent parallax when scroll down
    if(scroll > topOffset + height)
        return;
    $this.css({
        'transform': scroll >= topOffset ? ('translateY(' + parallaxSize + 'px)' ) : ''
    });
	});
});
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
          "color": "#2c2c2c"
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
          "color": "#aa028a"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#add8e6"
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
