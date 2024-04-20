var map;
var defaultLocation = { lat: 21.1619, lng: -86.8515 }; // Default coordinates for Cancun
var markers = [];
var currentInfoWindow = null;

// Coordinates with descriptions for 5 different places for each place type
var places = {
  hotel: [
    { location: { lat: 21.1751, lng: -86.8492 }, name: "Hotel Riu Palace Peninsula", rating: 4.6, description: "<a href='https://www.riu.com/en/hotel/mexico/cancun/hotel-riu-palace-peninsula/' target='_blank'>Hotel Riu Palace Peninsula</a> - Luxurious hotel with stunning views." },
    { location: { lat: 21.1462, lng: -86.7901 }, name: "Hotel Zone Cancun", rating: 4.2, description: "<a href='https://www.hotels.com/de1633551/hotels-cancun-mexico/' target='_blank'>Hotel Zone Cancun</a> - Cozy hotel near the beach." },
    { location: { lat: 21.1350, lng: -86.7533 }, name: "The Westin Resort & Spa", rating: 4.4, description: "<a href='https://www.marriott.com/hotels/travel/cunwi-the-westin-resort-and-spa-cancun/' target='_blank'>The Westin Resort & Spa</a> - Affordable hotel with excellent service." },
    { location: { lat: 21.1579, lng: -86.8563 }, name: "Grand Fiesta Americana Coral Beach Cancun", rating: 4.5, description: "<a href='https://www.coralbeachcancunresort.com/' target='_blank'>Grand Fiesta Americana Coral Beach Cancun</a> - Modern hotel with rooftop pool." },
    { location: { lat: 21.1570, lng: -86.8469 }, name: "Hard Rock Hotel Cancun", rating: 4.7, description: "<a href='https://www.hardrockhotels.com/cancun/' target='_blank'>Hard Rock Hotel Cancun</a> - Boutique hotel with personalized service." }
  ],
  bar: [
    { location: { lat: 21.1483, lng: -86.7907 }, name: "La Vaquita Cancun", rating: 4.0, description: "<a href='https://www.lavaquitacancun.com/' target='_blank'>La Vaquita Cancun</a> - Lively bar with live music." },
    { location: { lat: 21.1561, lng: -86.8403 }, name: "Mandala Beach Club", rating: 4.3, description: "<a href='https://mandalabeachcancun.com/' target='_blank'>Mandala Beach Club</a> - Relaxed bar with beachfront seating." },
    { location: { lat: 21.1311, lng: -86.7470 }, name: "Coco Bongo", rating: 4.2, description: "<a href='https://www.cocobongo.com.mx/' target='_blank'>Coco Bongo</a> - Charming bar with ocean views." },
    { location: { lat: 21.1366, lng: -86.7489 }, name: "Senor Frog's", rating: 4.1, description: "<a href='https://www.senorfrogs.com/cancun/' target='_blank'>Senor Frog's</a> - Cozy bar with craft cocktails." },
    { location: { lat: 21.1352, lng: -86.7525 }, name: "La Distileria", rating: 4.4, description: "<a href='https://www.ladistilleriacancun.com/' target='_blank'>La Distileria</a> - Trendy bar with outdoor seating." }
  ],
  restaurant: [
    { location: { lat: 21.1581, lng: -86.8458 }, name: "Ruth's Chris Steak House", rating: 4.6, description: "<a href='https://www.ruthschris.com/restaurant-locations/cancun' target='_blank'>Ruth's Chris Steak House</a> - Fine dining experience with ocean views." },
    { location: { lat: 21.1369, lng: -86.7484 }, name: "Puerto Madero", rating: 4.4, description: "<a href='https://www.puertomadero.com.mx/' target='_blank'>Puerto Madero</a> - Family-friendly restaurant with a diverse menu." },
    { location: { lat: 21.1360, lng: -86.7482 }, name: "Lorenzillo's", rating: 4.3, description: "<a href='https://www.lorenzillos.com.mx/' target='_blank'>Lorenzillo's</a> - Authentic Mexican cuisine in a lively atmosphere." },
    { location: { lat: 21.1357, lng: -86.7483 }, name: "Cenacolo Zona Hotelera", rating: 4.5, description: "<a href='https://www.cenacolorestaurant.com.mx/' target='_blank'>Cenacolo Zona Hotelera</a> - Gourmet restaurant with elegant decor." },
    { location: { lat: 21.1358, lng: -86.7483 }, name: "Cambalache", rating: 4.2, description: "<a href='https://cambalacherestaurant.com/' target='_blank'>Cambalache</a> - Casual eatery with outdoor seating." }
  ],
  tourist_attraction: [
    { location: { lat: 21.1602, lng: -86.8574 }, name: "Isla Mujeres", rating: 4.8, description: "<a href='https://www.isla-mujeres.net/' target='_blank'>Isla Mujeres</a> - Must-visit landmark with historical significance." },
    { location: { lat: 21.1577, lng: -86.8489 }, name: "Playa Delfines", rating: 4.7, description: "<a href='https://www.tripadvisor.com/Attraction_Review-g150807-d153788-Reviews-Playa_Delfines-Cancun_Yucatan_Peninsula.html' target='_blank'>Playa Delfines</a> - Scenic spot perfect for photography." },
    { location: { lat: 21.1617, lng: -86.8502 }, name: "Chichen Itza", rating: 4.6, description: "<a href='https://www.chichenitza.com/' target='_blank'>Chichen Itza</a> - Cultural attraction showcasing local art." },
    { location: { lat: 21.1655, lng: -86.8442 }, name: "Xcaret Park", rating: 4.5, description: "<a href='https://www.xcaret.com/' target='_blank'>Xcaret Park</a> - Interactive museum with exhibits for all ages." },
    { location: { lat: 21.1587, lng: -86.8450 }, name: "Cenote Ik Kil", rating: 4.4, description: "<a href='https://www.mexicancaribbean.com/cenote-ik-kil/' target='_blank'>Cenote Ik Kil</a> - Nature reserve with hiking trails." }
  ]
};

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: defaultLocation,
    zoom: 12
  });
}

function showMarkers() {
  var placeType = document.getElementById('place-type').value;
  clearMarkers();
  markers = [];

  var placesData = places[placeType];

  placesData.forEach(function(place) {
    createMarker(place);
  });
}

function createMarker(place) {
  var marker = new google.maps.Marker({
    map: map,
    position: place.location
  });

  var infowindow = new google.maps.InfoWindow({
    content: "<h3>" + place.name + "</h3>" +
             "<h4>Rating: " + place.rating + "</h4>" +
             "<p>" + place.description + "</p>"
  });

  marker.addListener('click', function() {
    if (currentInfoWindow) {
      currentInfoWindow.close();
    }
    infowindow.open(map, marker);
    currentInfoWindow = infowindow;
  });

  markers.push(marker);
}

function clearMarkers() {
  // Clear existing markers
  markers.forEach(function(marker) {
    marker.setMap(null);
  });
  markers = [];
}