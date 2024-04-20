var defaultCoordinates = { lat: 41.0082, lng: 28.9784 };
var coordinates = {
    hotel: [
        { lat: 41.04251, lng: 29.0113 },
        { lat: 41.0068, lng: 28.9790 },
        { lat: 41.0441, lng: 29.0161 }, 
        { lat: 41.0402, lng: 28.9877 },  
        { lat: 41.0242, lng: 28.979} 
    ],
    bar: [
        { lat: 41.0351, lng: 28.9771 },
        { lat: 41.0366, lng: 28.9820 },
        { lat: 41.0255, lng: 28.9740 },
        { lat: 41.0355, lng: 28.9770 },
        { lat: 40.7745, lng: 30.4008 }  
    ],
    restaurant: [
        { lat: 41.0064, lng: 28.9735 },
        { lat: 41.0405, lng: 28.9926 },
        { lat: 41.0086, lng: 28.9745 },
        { lat: 41.0089, lng: 28.9739 },
        { lat: 41.0119, lng: 28.9582 }
    ],
    tourist_attraction: [
        { lat: 41.0095, lng: 28.9766 },
        { lat: 41.0356, lng: 28.9937 },
        { lat: 41.0036, lng: 28.9802 },
        { lat: 41.0056, lng: 28.9794 },
        { lat: 41.0400, lng: 28.9756 }
    ]
};

var descriptions = {
  hotel: [
      "<h2>InterContinental Istanbul</h2><br><h4>In a bustling commercial area, this upscale hotel offering Bosphorus views is a 7-minute walk from Taksim metro station, and an 11-minute walk from shopping and nightlife on İstiklal Avenue.</h4><br><p>Address: Gümüşsuyu, Asker Ocağı Cd. No:1, 34435 Beyoğlu/İstanbul, Türkiye</p><br><p>Tel: +90 212 368 44 44</p><p><a href='https://www.ihg.com/intercontinental/hotels/gb/en//istanbul/istha/hoteldetail?sa=X&ved=2ahUKEwi6p4fI486FAxUCSUECHSJeBaUQyK4DegUIAxDVCw'TARGET='_blank'_>Website</a></p>",
      "<h2>JW Marriott Istanbul Bosphorus</h2><br><h4>Among restaurants and cafes, this polished hotel with views of the Bosphorus Strait is an 11-minute walk from the restored 5th-century Galata Tower and 39 km from Istanbul Airport.</h4><br><p>Address: Kemankeş Karamustafa Paşa, Kemankeş Cd. No:26, 34425 Beyoğlu/İstanbul, Türkiye</p><br><p>Tel: +90 212 806 20 20 <a href='https://www.marriott.com/en-us/hotels/istjb-jw-marriott-istanbul-bosphorus/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0&sa=X&ved=2ahUKEwjMjvT1486FAxVjHAYAHeqaA3AQyK4DegUIAxD5DA' TARGET='_blank'_>Website</a></p>",
      "<h2>Ciragan Palace Kempinski</h2><br><h4>Occupying an ornate former Ottoman palace overlooking the Bosphorus strait, this luxe hotel is 2 km from Dolmabahçe Sarayı, an art museum in a grand palace.</h4><br><p>Address: Yıldız, Çırağan Cd. No:32, 34349 Beşiktaş/İstanbul, Türkiye</p><p>Tel: +90 212 326 46 46<a href='https://www.kempinski.com/en/ciragan-palace?utm_medium=organic&utm_source=google&utm_campaign=KIIST&utm_content=gmb&source=S308962248&sa=X&ved=2ahUKEwiL5quB486FAxXwTkECHYJVBroQyK4DegUIAxDsDA' TARGET='_blank'_>Website</a></p>",
      "<h2>Four Seasons Hotel Istanbul At The Bosphorus</h2><br><h4>Set on the Bosphorus waterfront, this grand luxe hotel is set in a 19th-century Ottoman palace. It's 7 km from the Hagia Sophia mosque.</h4><br><p>Adddress: No:28, Çırağan Cd., 34349 Beşiktaş/İstanbul, Türkiye</p><p>Tel: +90 212 381 40 00 <a href='https://www.fourseasons.com/bosphorus/?utm_source=google&utm_medium=organicsearch&utm_campaign=tor-bop-hre-mid-seo-na&utm_content=na-na&utm_term=na&sa=X&ved=2ahUKEwjXv7T14s6FAxWsHwYAHUBPDAcQyK4DegUIAxCoDA' TARGET='_blank'_>Website</a></p>",
      "<h2>Hagia Sofia Mansions Istanbul, Curio Collection by Hilton</h2><br><h4>Set on a cobblestone street 2 minutes by foot from the Hagia Sofia Museum, this old-world hotel with a leafy courtyard is a 4-minute walk from the iconic Blue Mosque and 46 km from Istanbul Airport.</h4><br><p>Address: Sultan Ahmet, Kabasakal Cd. No:5, 34122 Fatih/İstanbul, Türkiye</p><p>Tel: +90 212 912 42 12 <a href='https://www.hilton.com/en/hotels/isthsqq-hagia-sofia-mansions-istanbul/?SEO_id=GMB-EMEA-QQ-ISTHSQQ&sa=X&ved=2ahUKEwjL89TA4s6FAxUnSkECHTEIBqgQyK4DegUIAxDECg' TARGET='_blank'_>Website</a></p>"
  ],
  bar: [
      "<h2>Ritim</h2><p>Rating: 4.0</p><h3>Located at Taksim, that is the most colorful and active district for night life in Istanbul. You can reach our bar walking 10 m. before you turn to Nevizade street in Beyoglu Fish Bazaar or pls cheek out map on the web site.  </h3><br><p>Address: Hüseyinağa, Sahne Sk. No:20, 34435 Beyoğlu/İstanbul, Türkiye<br> Phone: +905323598403 <a href='http://ritimbar.com/' TARGET='_blank'_>Website</a></p>",
      "<h2>U2 Istanbul Irish Pub</h2><p>Rating: 3.5</p><h3>Convivial tavern offering Irish tap brews, rugby & other live sports on TV & Irish folk music.</h3><br><p>Address: Şehit Muhtar, Bekar Sk. No:21, 34435 Beyoğlu/İstanbul, Türkiye  <br> Phone: +905323598403 <a href='http://www.u2istanbulirishpub.com/' TARGET='_blank'_>Website</a></p>",
      "<h2>Tower Pub</h2><p>Rating: 4.8</p><p>Address: Bereketzade, Galata Kulesi Sk. No:4, 34421 Beyoğlu/İstanbul, Türkiye <br> Tel:+9053844869379 <a href='http://thetowerpub.com/' TARGET='_blank'_>Website</a></p>",
      "<h2>Back Street Club & Rooftop Bar Taksim</h2><p>Rating: 4.2</p><h3></h3><p>Address: Kamer Hatun, Kamer Hatun Cd. No:19, 34435 Beyoğlu/İstanbul, Türkiye<br> Tel: +905398590095  <a href='https://backstreettaksim.com/' TARGET='_blank'_>Website</a></p>",
      "<h2>GUSTO PUB & ROOF</h2><p>Rating: 4.5</p><h3></h3><p>Address: Semerciler, Milli Egemenlik Cd. No:13, 54100 Adapazarı/Sakarya, Türkiye<br> Tel: <a href='#' TARGET='_blank'_>Website</a></p>"
  ],
  restaurant: [
      "<h2>GRACE Rooftop Restaurant</h2><p>Rating: 4.5</p><p>Address: Sultan Ahmet, Binbirdirek Mah, Lady diana otel, Terzihane Sk. No:15, 34122 Fatih/İstanbul, Türkiye <br> Tel: +905428444473  <a href='http://www.gracerooftop.com/' TARGET='_blank'_>Website</a></p>",
      "<h2>Atölye Restaurant</h2><p>Rating: 4.2</p><p>Address: Asker Ocağı Cd. No:6 The Ritz-Carlton, Istanbul, Vişnezade, Suzer Plaza, Istanbul 34367 Türkiye<br> Tel:  +90 212 334 44 44 <a href='http://www.ritzcarlton.com/en/hotels/europe/istanbul/dining/atolye' TARGET='_blank'_>Website</a></p>",
      "<h2>Istanbul Kebab Cafe & Restaurant</h2><p>Rating: 4.0</p><p>Address: Alemdar, Biçki Yurdu Sk. No 5, Istanbul 34122 Türkiye<br> Tel: +90 537 982 73 95 <a href='https://www.facebook.com/Istanbul-kebab-cafe-restaurant-269332187282050/' TARGET='_blank'_>Website</a></p>",
      "<h2>Las Tapas Restaurant</h2><p>Rating: 4.6</p><p>Address:Alemdar Mah. Catalçeşme Sokak no:5/A Fatih, Istanbul 34110 Türkiye <br> Tel: +90 212 526 46 46 <a href='http://www.lastapasrestaurant.com/' TARGET='_blank'_>Website</a></p>",
      "<h2>Lotiz Lounge & Hookah  </h2><p>Rating: 4.7</p><p>Address: Vidinli Tevfik Pasa Cad. No:14 Balabanaga Mahallesi, Istanbul 34134 Türkiye<br> Tel: +90 533 149 22 72 <a href='http://lotipoints.com/lotiz-lounge-hookah/' TARGET='_blank'_>Website</a></p>"
  ],
  tourist_attraction: [
      "<h2>Guided Istanbul Tours</h2><p>Rating: 4.8</p><p>Address: Alemdar, N 0:22, Divan Yolu Cd. Kat:3 D:3, 34110 Fatih/İstanbul, Türkiye <br> Tel:+905425919925  <a href='http://www.guidedistanbultours.com/'>Website</a></p>",
      "<h2>Pereme Tours</h2><p>Rating: 4.5</p><p>Address: Ömer Avni, Meclis-i Mebusan Cd. No:34, 34427 Beyoğlu/İstanbul, Türkiye <br> Tel: +902163253600  <a href='http://www.pereme.com.tr/' TARGET='_blank'_>Website</a></p>",
      "<h2>Anas Crecca Travel - Turkey Tours</h2><p>Rating: 4.7</p><p>Address: Sultan Ahmet, Keresteci Hakkı Sk. No:21, 34112 Fatih/İstanbul, Türkiye <br> Tel: +90 505 106 42 00<a href='https://www.anascreccatravel.com/' TARGET='_blank'_>Website</a></p>",
      "<h2>Istanbul Guided Private Tours</h2><p>Rating: 4.3</p><p>Address: Firuzağa, Bostanbaşı Cd. No:25, 34425 Beyoğlu/İstanbul, Türkiye <br> Tel: +90 535 663 27 63 <a href='http://www.guidedistanbultour.com' TARGET='_blank'_>Website</a></p>",
      "<h2>Haqqi Tours</h2><p>Rating: 4.9</p><p>Address: Hacıahmet, Yahya Köprüsü Sk. No:1, 34440 Beyoğlu/İstanbul, Türkiye <br> Tel: +90 544 304 26 36  <a href='https://www.haqqitours.com/' TARGET='_blank'_>Website</a></p>"
  ]
};


var map;
var markers = [];
var currentInfoWindow = null;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: defaultCoordinates,
        zoom: 13
    });
}

function showMarkers() {
    var selectedPlaceType = document.getElementById('place-type').value;
    var places = coordinates[selectedPlaceType];
    var descriptionsList = descriptions[selectedPlaceType];
    clearMarkers();
    places.forEach(function(place, index) {
        createMarker(place, descriptionsList[index]);
    });
}

function createMarker(place, description) {
    var marker = new google.maps.Marker({
        map: map,
        position: place
    });
    markers.push(marker);

    var infowindow = new google.maps.InfoWindow({
        content: description
    });

    marker.addListener('click', function() {
        if (currentInfoWindow) {
            currentInfoWindow.close();
        }
        infowindow.open(map, marker);
        currentInfoWindow = infowindow;
    });
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}
