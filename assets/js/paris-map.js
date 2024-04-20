var map;
var currentInfowindow = null;

// Define coordinates and descriptions for different types of places in Paris
var placeData = {
    hotel: [
        { 
            location: { lat: 48.8566, lng: 2.3522 }, // Coordinates for hotels
            description: {
                header: "Luxurious Hotel",
                subHeader: "Stunning Views of the Eiffel Tower",
                rating: "4.8",
                text: "Experience luxury and comfort with breathtaking views of the iconic Eiffel Tower. Our hotel offers elegant accommodations and top-notch amenities for an unforgettable stay."
            }
        },
        { 
            location: { lat: 48.8614, lng: 2.3445 }, 
            description: {
                header: "Boutique Hotel",
                subHeader: "Cozy Atmosphere in the Heart of Paris",
                rating: "4.5",
                text: "Discover a hidden gem in the bustling streets of Paris. Our boutique hotel combines charm and sophistication, offering personalized service and stylish accommodations."
            }
        },
     
        { 
            location: { lat: 48.8580, lng: 2.3470 }, 
            description: {
                header: "Modern Hotel",
                subHeader: "Convenient Location Near Attractions",
                rating: "4.3",
                text: "Stay in style at our modern hotel located just minutes away from popular attractions. With sleek design and comfortable amenities, your stay with us will be nothing short of exceptional."
            }
        },
        { 
            location: { lat: 48.8622, lng: 2.3556 }, 
            description: {
                header: "Historic Hotel",
                subHeader: "Rich Heritage and Timeless Elegance",
                rating: "4.6",
                text: "Step back in time and experience the charm of our historic hotel. With its ornate architecture and luxurious interiors, it's a journey through Parisian history with all the comforts of modern hospitality."
            }
        }
    ],
    bar: [
        { 
            location: { lat: 48.8599, lng: 2.3504 }, // Coordinates for bars
            description: {
                header: "Lively Bar",
                subHeader: "Craft Cocktails and Local Beers",
                rating: "4.2",
                text: "Join us for a night of fun and entertainment at our lively bar. Sip on expertly crafted cocktails and enjoy a wide selection of local beers while soaking in the vibrant atmosphere."
            }
        },
        { 
            location: { lat: 48.8632, lng: 2.3700 }, 
            description: {
                header: "Hip Bar",
                subHeader: "Live Music Performances",
                rating: "4.6",
                text: "Immerse yourself in the local music scene at our hip bar. From live bands to DJ sets, there's always something exciting happening here. Grab a drink, hit the dance floor, and make memories that last a lifetime."
            }
        },
   
        { 
            location: { lat: 48.8585, lng: 2.3479 }, 
            description: {
                header: "Cozy Pub",
                subHeader: "Relaxing Atmosphere and Friendly Service",
                rating: "4.4",
                text: "Escape the hustle and bustle of the city at our cozy pub. With its warm ambiance and welcoming staff, it's the perfect spot to unwind with a pint of your favorite brew and good company."
            }
        },
        { 
            location: { lat: 48.8620, lng: 2.3545 }, 
            description: {
                header: "Rooftop Bar",
                subHeader: "Panoramic Views and Trendy Vibes",
                rating: "4.7",
                text: "Elevate your nightlife experience at our rooftop bar. Offering stunning panoramic views of the Paris skyline and chic, contemporary décor, it's the ultimate destination for cocktails and conversation."
            }
        }
    ],
    restaurant: [
        { 
            location: { lat: 48.8577, lng: 2.3431 }, // Coordinates for restaurants
            description: {
                header: "Award-Winning Restaurant",
                subHeader: "French Cuisine at Its Finest",
                rating: "4.9",
                text: "Indulge in a culinary journey at our award-winning restaurant. Our talented chefs create exquisite French dishes using the finest ingredients, ensuring a dining experience that delights the senses."
            }
        },
        { 
            location: { lat: 48.8698, lng: 2.3590 }, 
            description: {
                header: "Family-Owned Trattoria",
                subHeader: "Traditional Italian Dishes",
                rating: "4.3",
                text: "Transport yourself to Italy with a visit to our family-owned trattoria. From hearty pasta dishes to mouthwatering pizzas, each bite is a taste of authentic Italian cuisine made with love and passion."
            }
        },
       
        { 
            location: { lat: 48.8590, lng: 2.3412 }, 
            description: {
                header: "Gourmet Brasserie",
                subHeader: "Elegant Dining with a French Twist",
                rating: "4.5",
                text: "Savor the flavors of France at our gourmet brasserie. With its refined atmosphere and innovative menu featuring classic French dishes with a modern twist, it's a culinary experience like no other."
            }
        },
        { 
            location: { lat: 48.8643, lng: 2.3548 }, 
            description: {
                header: "Vegetarian Bistro",
                subHeader: "Fresh and Flavorful Plant-Based Fare",
                rating: "4.2",
                text: "Discover the delights of vegetarian cuisine at our cozy bistro. From vibrant salads to hearty veggie burgers, each dish is bursting with fresh flavors and wholesome ingredients that will satisfy even the most discerning palates."
            }
        }
    ],
    tourist_attraction: [
        { 
            location: { lat: 48.8584, lng: 2.2945 }, // Coordinates for tourist attractions
            description: {
                header: "Iconic Landmark",
                subHeader: "Breathtaking Views of the City",
                rating: "5.0",
                text: "Don't miss out on visiting this iconic landmark during your trip to Paris. Offering panoramic views of the city skyline, it's the perfect spot to capture stunning photos and create lasting memories."
            }
        },
        { 
            location: { lat: 48.8606, lng: 2.3376 }, 
            description: {
                header: "Historic Cathedral",
                subHeader: "Stunning Architecture and Artwork",
                rating: "4.7",
                text: "Step inside the walls of this historic cathedral and marvel at its breathtaking architecture and exquisite artwork. Whether you're religious or not, the beauty and tranquility of this sacred space are sure to leave a lasting impression."
            }
        },

        { 
            location: { lat: 48.8555, lng: 2.3123 }, 
            description: {
                header: "Charming Gardens",
                subHeader: "Tranquil Oasis in the City",
                rating: "4.4",
                text: "Escape the urban hustle and bustle and immerse yourself in the natural beauty of our charming gardens. With lush greenery, colorful blooms, and peaceful pathways, it's the perfect place to relax and rejuvenate."
            }
        },
        { 
            location: { lat: 48.8689, lng: 2.3432 }, 
            description: {
                header: "Historical Museum",
                subHeader: "Journey Through Parisian History",
                rating: "4.6",
                text: "Embark on a fascinating journey through the rich history of Paris at our historical museum. From ancient artifacts to modern exhibits, there's something to captivate visitors of all ages and interests."
            }
        }
    ]
};


function initMap() {
    var paris = {lat: 48.8566, lng: 2.3522}; // Default coordinates for Paris
    map = new google.maps.Map(document.getElementById('map'), {
        center: paris,
        zoom: 14
        
    });
}

function showMarkers() {
    var placeType = document.getElementById("place-type").value;
    var places = placeData[placeType];
    if (!places) return; // Return if no places found for the selected place type

    clearMarkers(); // Clear previous markers
    for (var i = 0; i < places.length && i < 5; i++) {
        createMarker(places[i].location, places[i].description); // Pass location and description to createMarker function
    }
}

var markers = [];
function createMarker(location, description) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker); // Store marker in array
    
    // Create infowindow content
    var contentString = '<div>' +
        '<h3>' + description.header + '</h3>' +
        '<h4>' + description.subHeader + '</h4>' +
        '<p>Rating: ' + description.rating + '</p>' +
        '<p>' + description.text + '</p>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    // Add click event listener to show infowindow on marker click
    marker.addListener('click', function() {
        // Close the current infowindow before opening a new one
        if (currentInfowindow) {
            currentInfowindow.close();
        }
        infowindow.open(map, marker);
        currentInfowindow = infowindow; // Update the current infowindow
    });
}

function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null); // Remove marker from map
    }
    markers = []; // Clear the array
}