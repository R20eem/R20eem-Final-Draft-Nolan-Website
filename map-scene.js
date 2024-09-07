// Student ID 201691778, Reem Almutairi
// this js uses geolocation to display the user location and nolan's film locations
var map = L.map('map', {
    center: [34.0522, -118.2437], // Default center
    zoom: 2, // Default zoom
    zoomControl: true,
    scrollWheelZoom: false
});

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Function to locate the user
function locateUser() {
    map.locate({setView: true, maxZoom: 10});

    map.on('locationfound', function (e) {
        L.marker(e.latlng).addTo(map)
            .bindPopup("You are here!").openPopup();
    });

    map.on('locationerror', function (e) {
        alert("Location access denied.");
    });
}

// Call the function to locate the user
locateUser();

// locations where Nolan has filmed his movies
var locations = [
    [34.0522, -118.2437, "Inception - Los Angeles, USA"],
    [50.6333, -115.2000, "Interstellar - Kananaskis Country, Canada"],
    [41.8781, -87.6298, "The Dark Knight - Chicago, USA"],
    [51.0344, 2.3768, "Dunkirk - Dunkirk, France"],
    [51.5074, -0.1278, "The Prestige - London, England"],
    [52.2053, 0.1218, "Oppenheimer - Cambridge, England"]
];

// to add markers for Nolan's filming locations
locations.forEach(function(location) {
    L.marker([location[0], location[1]])
        .addTo(map)
        .bindPopup(location[2]);
});
