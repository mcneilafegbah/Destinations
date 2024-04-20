var defaultCoordinates = { lat: 41.0082, lng: 28.9784 };

  // Predefined coordinates for different place types
  var coordinates = {
    hotel: [
      { lat: 41.0055, lng: 28.9773 },
      { lat: 41.0081, lng: 28.9781 },
      { lat: 41.0043, lng: 28.9749 },
      { lat: 41.0111, lng: 28.9799 },
      { lat: 41.0092, lng: 28.9743 }
    ],
    bar: [
      { lat: 41.0090, lng: 28.9777 },
      { lat: 41.0073, lng: 28.9756 },
      { lat: 41.0062, lng: 28.9735 },
      { lat: 41.0123, lng: 28.9788 },
      { lat: 41.0045, lng: 28.9772 }
    ],
    restaurant: [
      { lat: 41.0102, lng: 28.9795 },
      { lat: 41.0058, lng: 28.9759 },
      { lat: 41.0084, lng: 28.9772 },
      { lat: 41.0118, lng: 28.9791 },
      { lat: 41.0067, lng: 28.9764 }
    ],
    tourist_attraction: [
      { lat: 41.0107, lng: 28.9754 },
      { lat: 41.0089, lng: 28.9736 },
      { lat: 41.0053, lng: 28.9793 },
      { lat: 41.0096, lng: 28.9759 },
      { lat: 41.0074, lng: 28.9768 }
    ]
  };

  // Sample detailed description for each place type
  var descriptions = {
    hotel: [
      "<h2>Hotel 1</h2><h3>Subheader</h3><p>Rating: 4.5</p><p>Text description for Hotel 1.</p>",
      "<h2>Hotel 2</h2><h3>Subheader</h3><p>Rating: 4.0</p><p>Text description for Hotel 2.</p>",
      "<h2>Hotel 3</h2><h3>Subheader</h3><p>Rating: 3.8</p><p>Text description for Hotel 3.</p>",
      "<h2>Hotel 4</h2><h3>Subheader</h3><p>Rating: 4.2</p><p>Text description for Hotel 4.</p>",
      "<h2>Hotel 5</h2><h3>Subheader</h3><p>Rating: 4.7</p><p>Text description for Hotel 5.</p>"
    ],
    bar: [
      "<h2>Bar 1</h2><h3>Subheader</h3><p>Rating: 4.0</p><p>Text description for Bar 1.</p>",
      "<h2>Bar 2</h2><h3>Subheader</h3><p>Rating: 3.5</p><p>Text description for Bar 2.</p>",
      "<h2>Bar 3</h2><h3>Subheader</h3><p>Rating: 3.8</p><p>Text description for Bar 3.</p>",
      "<h2>Bar 4</h2><h3>Subheader</h3><p>Rating: 4.2</p><p>Text description for Bar 4.</p>",
      "<h2>Bar 5</h2><h3>Subheader</h3><p>Rating: 4.5</p><p>Text description for Bar 5.</p>"
    ],
    restaurant: [
      "<h2>Restaurant 1</h2><h3>Subheader</h3><p>Rating: 4.5</p><p>Text description for Restaurant 1.</p>",
      "<h2>Restaurant 2</h2><h3>Subheader</h3><p>Rating: 4.2</p><p>Text description for Restaurant 2.</p>",
      "<h2>Restaurant 3</h2><h3>Subheader</h3><p>Rating: 4.0</p><p>Text description for Restaurant 3.</p>",
      "<h2>Restaurant 4</h2><h3>Subheader</h3><p>Rating: 4.6</p><p>Text description for Restaurant 4.</p>",
      "<h2>Restaurant 5</h2><h3>Subheader</h3><p>Rating: 4.7</p><p>Text description for Restaurant 5.</p>"
    ],
    tourist_attraction: [
      "<h2>Attraction 1</h2><h3>Subheader</h3><p>Rating: 4.8</p><p>Text description for Attraction 1.</p>",
      "<h2>Attraction 2</h2><h3>Subheader</h3><p>Rating: 4.5</p><p>Text description for Attraction 2.</p>",
      "<h2>Attraction 3</h2><h3>Subheader</h3><p>Rating: 4.7</p><p>Text description for Attraction 3.</p>",
      "<h2>Attraction 4</h2><h3>Subheader</h3><p>Rating: 4.3</p><p>Text description for Attraction 4.</p>",
      "<h2>Attraction 5</h2><h3>Subheader</h3><p>Rating: 4.9</p><p>Text description for Attraction 5.</p>"
    ]
  };

  // Initialize the map with default coordinates
  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: defaultCoordinates,
      zoom: 13
    });
  }

  // Function to show markers based on selected place type
  function showMarkers() {
    var selectedPlaceType = document.getElementById('place-type').value;
    var places = coordinates[selectedPlaceType];
    var descriptionsList = descriptions[selectedPlaceType];
    clearMarkers();
    places.forEach(function(place, index) {
      createMarker(place, descriptionsList[index]);
    });
  }

  // Function to create a marker
  var markers = [];
  function createMarker(place, description) {
    var marker = new google.maps.Marker({
      map: map,
      position: place
    });
    markers.push(marker);

    // Adding info window with detailed description
    var infowindow = new google.maps.InfoWindow({
      content: description
    });

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }

  // Function to clear all markers
  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }