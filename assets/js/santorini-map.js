var defaultLat = 36.3932;
var defaultLng = 25.4615;

var map;
var markers = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: defaultLat, lng: defaultLng },
        zoom: 12 // Adjust the zoom level as needed
    });
}

function showMarkers() {
    // Clear existing markers
    clearMarkers();

    var placeType = document.getElementById('place-type').value;
    if (placeType === "Select a place type") {
        alert("Please select a place type");
        return;
    }

    // Real-world data for demonstration, replace with actual data
    var locations = [];
    switch (placeType) {
        case "hotel":
            locations = [
                { lat: 36.393568, lng: 25.468540, name: "Santorini Secret Suites & Spa", description: "Luxury hotel with stunning views of the caldera.", rating: 4.5, website: "https://www.santorinisecret.com/" },
                { lat: 36.431616, lng: 25.423514, name: "Canaves Oia Suites & Spa", description: "Elegant suites with infinity pools overlooking the Aegean Sea.", rating: 4.8, website: "https://www.canaves.com/oia/" },
                { lat: 36.460540, lng: 25.374806, name: "Grace Hotel Santorini", description: "Boutique hotel offering panoramic views and gourmet dining.", rating: 4.3, website: "https://www.gracehotels.com/santorini/" },
                { lat: 36.394370, lng: 25.434986, name: "Katikies Hotel", description: "Clifftop hotel featuring luxurious rooms and sunset views.", rating: 4.6, website: "https://www.katikies.com/" },
                { lat: 36.464439, lng: 25.376487, name: "Mystique, a Luxury Collection Hotel", description: "Secluded retreat with minimalist suites and private terraces.", rating: 4.7, website: "https://www.mystique.gr/" }
            ];
            break;
        case "bar":
            locations = [
                { lat: 36.462429, lng: 25.376281, name: "Franco's Bar", description: "Chic cocktail bar with panoramic views of the caldera.", rating: 4.7, website: "https://www.francosbar.com/" },
                { lat: 36.465037, lng: 25.377131, name: "Tropical Bar", description: "Lively bar with outdoor seating and a wide range of drinks.", rating: 4.2, website: "https://www.tropicalbar.gr/" },
                { lat: 36.425537, lng: 25.428109, name: "Two Brothers Bar", description: "Casual spot serving cocktails and light bites near the beach.", rating: 4.5, website: "https://www.twobrothersbar.com/" },
                { lat: 36.415276, lng: 25.430197, name: "Murphy's Pub", description: "Irish pub offering drinks, live music, and pub grub.", rating: 4.4, website: "https://www.murphyspub.com/" },
                { lat: 36.395936, lng: 25.459277, name: "Sunset Bar", description: "Relaxed bar with sunset views and a diverse drink menu.", rating: 4.8, website: "https://www.sunsetbar.gr/" }
            ];
            break;
        case "restaurant":
            locations = [
                { lat: 36.462603, lng: 25.378116, name: "1800-Floga Restaurant", description: "Fine dining restaurant serving Greek and Mediterranean cuisine.", rating: 4.6, website: "https://www.1800-floga.com/" },
                { lat: 36.460904, lng: 25.376294, name: "Ambrosia Restaurant", description: "Gourmet restaurant with a terrace overlooking the caldera.", rating: 4.9, website: "https://www.ambrosiarestaurant.com/" },
                { lat: 36.395215, lng: 25.433746, name: "La Maison Restaurant", description: "French restaurant offering elegant dishes in a romantic setting.", rating: 4.7, website: "https://www.lamaison.gr/" },
                { lat: 36.404116, lng: 25.450850, name: "Selene Restaurant", description: "Award-winning restaurant specializing in Greek cuisine.", rating: 4.8, website: "https://www.selene.gr/" },
                { lat: 36.430135, lng: 25.429122, name: "Nichteri Restaurant", description: "Cozy eatery serving traditional Greek dishes with a modern twist.", rating: 4.3, website: "https://www.nichteri.com/" }
            ];
            break;
        case "tourist_attraction":
            locations = [
                { lat: 36.393028, lng: 25.478013, name: "Oia Sunset", description: "Famous spot to watch the sunset over the Aegean Sea.", rating: 4.9, website: "https://www.oiasunset.com/" },
                { lat: 36.392891, lng: 25.432815, name: "Fira Town", description: "Picturesque town with narrow streets, shops, and cafes.", rating: 4.6, website: "https://www.firatown.com/" },
                { lat: 36.418728, lng: 25.431191, name: "Akrotiri Archaeological Site", description: "Ancient Minoan settlement preserved under volcanic ash.", rating: 4.7, website: "https://www.akrotiri.com/" },
                { lat: 36.396681, lng: 25.432652, name: "Santorini Caldera", description: "Impressive volcanic caldera offering scenic views.", rating: 4.8, website: "https://www.santorinicaldera.com/" },
                { lat: 36.389345, lng: 25.424620, name: "Red Beach", description: "Unique beach with red volcanic cliffs and clear blue waters.", rating: 4.5, website: "https://www.redbeach.com/" }
            ];
            break;
    }

    // Display markers for selected place type
    for (var i = 0; i < locations.length; i++) {
        var marker = new google.maps.Marker({
            position: { lat: defaultLat, lng: defaultLng }, // Set initial position off the map
            map: map,
            title: locations[i].name,
            animation: google.maps.Animation.DROP // Add drop animation
        });

        // Animate marker to its actual position
        animateMarker(marker, { lat: locations[i].lat, lng: locations[i].lng }, i * 200);

        // Create and attach info window to marker
        var infowindow = new google.maps.InfoWindow({
            content: "<h3>" + locations[i].name + "</h3><p>" + locations[i].description + "</p><p>Rating: " + locations[i].rating + "</p><p>Website: <a href='" + locations[i].website + "' target='_blank'>" + locations[i].website + "</a></p>"
        });

        attachInfoWindow(marker, infowindow);

        markers.push({ marker: marker, infowindow: infowindow });
    }
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].marker.setMap(null);
    }
    markers = [];
}

function attachInfoWindow(marker, infowindow) {
    marker.addListener('click', function () {
        closeAllInfoWindows();
        infowindow.open(map, marker);
    });
}

function closeAllInfoWindows() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].infowindow.close();
    }
}

function animateMarker(marker, destination, delay) {
    setTimeout(function () {
        marker.setPosition(destination);
    }, delay);
}
